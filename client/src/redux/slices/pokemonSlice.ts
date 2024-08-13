import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  IDescription,
  IOnePokemon,
  IPokemon,
} from "../../interfaces/interfaces";
import { getEvoltionChain } from "src/helperFunctions/pokemonInfo";
export interface PokemonState {
  pokemon: IPokemon[];
  secondGen: IPokemon[];
  thirdGen: IPokemon[];
  pokemonInfo: IOnePokemon;
  pokemonDesc: IDescription;
  pokemonEvo: any;
  pokemonAbililties: any;
}

const initialState: PokemonState = {
  pokemon: [
    {
      name: "",
      url: "",
    },
  ],
  secondGen: [
    {
      name: "",
      url: "",
    },
  ],
  thirdGen: [
    {
      name: "",
      url: "",
    },
  ],
  pokemonInfo: {
    abilities: [
      {
        ability: {
          name: "",
          url: "",
        },
      },
      {
        ability: {
          name: "",
        },
      },
    ],
    base_experience: 0,
    height: 0,
    id: 0,
    moves: [],
    name: "",
    sprites: [],
    stats: [
      { base_stat: 0, stat: { name: "" } },
      { base_stat: 0, stat: { name: "" } },
      { base_stat: 0, stat: { name: "" } },
      { base_stat: 0, stat: { name: "" } },
      { base_stat: 0, stat: { name: "" } },
    ],
    types: [
      {
        slot: 0,
        type: {
          name: "",
        },
      },
      {
        slot: 0,
        type: {
          name: "",
        },
      },
    ],
    weight: 0,
  },
  pokemonDesc: {
    base_happiness: "",
    flavor_text_entries: [
      {
        flavor_text: "",
      },
    ],
  },
  pokemonEvo: [],
  pokemonAbililties: [],
};

export const fetchFirstGenPokemon = createAsyncThunk(
  "pokemon/fetchAllPokemon",
  async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=151/"
    );
    return await response.json();
  }
);

export const fetchSecondGenPokemon = createAsyncThunk(
  "pokemon/fetchSecondGenPokemon",
  async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?offset=151&limit=100"
    );
    return await response.json();
  }
);
export const fetchThirdGenPokemon = createAsyncThunk(
  "pokemon/fetchThirdGenPokemon",
  async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?offset=251&limit=135"
    );
    return await response.json();
  }
);

export const fetchPokemonInfo = createAsyncThunk(
  "pokemon/fetchAllPokemonInfo",
  async (id: number) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

      return response.json();
    } catch (e) {
      console.log(e);
    }
  }
);
export const fetchPokemonDesc = createAsyncThunk(
  "pokemon/fetchAllPokemonDesc",
  async (id: string | number) => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`
      );
      return response.json();
    } catch (e) {
      console.log(e);
    }
  }
);

export const fetchPokemonEvolutions = createAsyncThunk(
  "pokemon/fetchEveolutions",
  async (id: string | number) => {
    try {
      const pokeResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`
      );

      if (pokeResponse) {
        const pokeData = await pokeResponse.json();

        const evolutionUrl = pokeData.evolution_chain.url;

        const evoResponse = await fetch(evolutionUrl);
        // console.log(await evoResponse.json(), "evoResponse.json()");
        const res = await evoResponse.json();
        const evolutions = getEvoltionChain(res.chain);
        return evolutions;
      }
    } catch (e) {
      console.log(e);
    }
  }
);

export const fetchPokemonAbilities = createAsyncThunk(
  "pokemon/fetchPokemonAbilities",
  async (url: string) => {
    try {
      const pokeResponse = await fetch(url);

      if (pokeResponse) {
        const pokeData = await pokeResponse.json();
        console.log(pokeData, "POKE DATA INZGO");
        return pokeData;
      }
    } catch (e) {
      console.log(e);
    }
  }
);

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFirstGenPokemon.fulfilled, (state, action) => {
      state.pokemon = action.payload.results;
    });
    builder.addCase(fetchSecondGenPokemon.fulfilled, (state, action) => {
      state.secondGen = action.payload.results;
    });
    builder.addCase(fetchThirdGenPokemon.fulfilled, (state, action) => {
      state.thirdGen = action.payload.results;
    });
    builder.addCase(fetchPokemonInfo.fulfilled, (state, action) => {
      state.pokemonInfo = action.payload;
    });
    builder.addCase(fetchPokemonDesc.fulfilled, (state, action) => {
      state.pokemonDesc = action.payload;
    });
    builder.addCase(fetchPokemonEvolutions.fulfilled, (state, action) => {
      state.pokemonEvo = action.payload;
    });
    builder.addCase(fetchPokemonAbilities.fulfilled, (state, action) => {
      state.pokemonAbililties = action.payload;
    });
  },
});

export default pokemonSlice.reducer;
