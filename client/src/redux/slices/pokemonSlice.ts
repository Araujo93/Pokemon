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
  loading: boolean;
  pokemonInfoLoading: boolean;
}

const initialState: PokemonState = {
  loading: true,
  pokemonInfoLoading: true,
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
        console.log(res.chain, "res.chain");
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
    builder.addCase(fetchFirstGenPokemon.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchFirstGenPokemon.fulfilled, (state, action) => {
      state.pokemon = action.payload.results;
      state.loading = false;
    });
    builder.addCase(fetchSecondGenPokemon.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSecondGenPokemon.fulfilled, (state, action) => {
      state.secondGen = action.payload.results;
      state.loading = false;
    });
    builder.addCase(fetchThirdGenPokemon.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchThirdGenPokemon.fulfilled, (state, action) => {
      state.thirdGen = action.payload.results;
      state.loading = false;
    });
    builder.addCase(fetchPokemonInfo.pending, (state) => {
      state.pokemonInfoLoading = true;
    });
    builder.addCase(fetchPokemonInfo.fulfilled, (state, action) => {
      state.pokemonInfo = action.payload;
      state.pokemonInfoLoading = false;
    });
    builder.addCase(fetchPokemonDesc.pending, (state) => {
      state.pokemonInfoLoading = true;
    });
    builder.addCase(fetchPokemonDesc.fulfilled, (state, action) => {
      state.pokemonDesc = action.payload;
      state.pokemonInfoLoading = false;
    });
    builder.addCase(fetchPokemonEvolutions.pending, (state) => {
      state.pokemonInfoLoading = true;
    });
    builder.addCase(fetchPokemonEvolutions.fulfilled, (state, action) => {
      state.pokemonEvo = action.payload;
      state.pokemonInfoLoading = false;
    });
    builder.addCase(fetchPokemonAbilities.pending, (state) => {
      state.pokemonInfoLoading = true;
    });
    builder.addCase(fetchPokemonAbilities.fulfilled, (state, action) => {
      state.pokemonAbililties = action.payload;
      state.pokemonInfoLoading = false;
    });
  },
});

export default pokemonSlice.reducer;
