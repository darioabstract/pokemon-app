import { create } from "zustand";
import mainCall from "../api/mainCall";
import { IGetPokemonData, IPokemon } from "../types/dataTypes";

interface PokemonState {
  pokemonDetails: IPokemon[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
  offset: number;
  setSearchQuery: (query: string) => void;
  fetchPokemon: () => Promise<void>;
  loadMorePokemon: () => Promise<void>;
  filteredPokemon: () => IPokemon[];
}

export const usePokemonStore = create<PokemonState>((set, get) => ({
  pokemonDetails: [],
  loading: false,
  error: null,
  searchQuery: "",
  offset: 0,

  setSearchQuery: (query) => set({ searchQuery: query }),

  fetchPokemon: async () => {
    set({ loading: true, error: null, offset: 0 });

    try {
      const limit = 20;
      const res = await mainCall.get(`pokemon?limit=${limit}&offset=0`);
      const results = res.data.results;

      const details = await Promise.all(
        results.map(async (result: IGetPokemonData) => {
          const res = await mainCall.get(result.url);
          const data = res.data;

          return {
            id: data.id,
            name: data.name,
            image: data.sprites.other.dream_world.front_default,
            height: data.height,
            weight: data.weight,
          };
        })
      );

      set({ pokemonDetails: details, loading: false, offset: limit });
    } catch (err: any) {
      set({ error: err.message || "Failed to fetch Pokémon", loading: false });
    }
  },

  // ⬇️ NEW METHOD
  loadMorePokemon: async () => {
    const { offset, pokemonDetails } = get();
    const limit = 20;

    set({ loading: true, error: null });

    try {
      const res = await mainCall.get(`pokemon?limit=${limit}&offset=${offset}`);
      const results = res.data.results;

      const moreDetails = await Promise.all(
        results.map(async (result: IGetPokemonData) => {
          const res = await mainCall.get(result.url);
          const data = res.data;

          return {
            id: data.id,
            name: data.name,
            image: data.sprites.other.dream_world.front_default,
            height: data.height,
            weight: data.weight,
          };
        })
      );

      // 👇 Append new Pokémon
      set({
        pokemonDetails: [...pokemonDetails, ...moreDetails],
        loading: false,
        offset: offset + limit,
      });
    } catch (err: any) {
      set({
        error: err.message || "Failed to load more Pokémon",
        loading: false,
      });
    }
  },

  filteredPokemon: () => {
    const { pokemonDetails, searchQuery } = get();
    return pokemonDetails.filter((p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  },
}));
