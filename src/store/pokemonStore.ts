import { create } from "zustand";
import mainCall from "../api/mainCall";
import { IGetPokemonData, IPokemon } from "../types/dataTypes";

interface PokemonState {
  pokemonDetails: IPokemon[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  fetchPokemon: () => Promise<void>;
  filteredPokemon: () => IPokemon[];
}

export const usePokemonStore = create<PokemonState>((set, get) => ({
  pokemonDetails: [],
  loading: false,
  error: null,
  searchQuery: "",

  setSearchQuery: (query) => set({ searchQuery: query }),

  fetchPokemon: async () => {
    set({ loading: true, error: null });

    try {
      const res = await mainCall.get("pokemon?limit=20");
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

      set({ pokemonDetails: details, loading: false });
    } catch (err: any) {
      set({ error: err.message || "Failed to fetch Pokémon", loading: false });
    }
  },

  filteredPokemon: () => {
    const { pokemonDetails, searchQuery } = get();
    return pokemonDetails.filter((p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  },
}));
