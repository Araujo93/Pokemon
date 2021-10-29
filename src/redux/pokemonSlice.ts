import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IDescription, IOnePokemon, IPokemon } from "../interfaces/interfaces";
export interface PokemonState {
  pokemon: IPokemon[];
  pokemonInfo: IOnePokemon;
  pokemonDesc: IDescription;
}

const initialState: PokemonState = {
  pokemon: [
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
};

export const fetchAllPokemon = createAsyncThunk(
  "pokemon/fetchAllPokemon",
  async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=151/"
    );
    return await response.json();
  }
);

export const fetchAllPokemonInfo = createAsyncThunk(
  "pokemon/fetchAllPokemonInfo",
  async (id: string) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      return response.json();
    } catch (e) {
      console.log(e);
    }
  }
);
export const fetchAllPokemonDesc = createAsyncThunk(
  "pokemon/fetchAllPokemonDesc",
  async (id: string) => {
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

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllPokemon.fulfilled, (state, action) => {
      state.pokemon = action.payload.results;
    });
    builder.addCase(fetchAllPokemonInfo.fulfilled, (state, action) => {
      state.pokemonInfo = action.payload;
    });
    builder.addCase(fetchAllPokemonDesc.fulfilled, (state, action) => {
      state.pokemonDesc = action.payload;
    });
  },
});

// export const { fetchAllPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
