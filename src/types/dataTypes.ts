export enum AppUrls {
  HOME = "/home",
  POKEMON = "/pokemon",
}

export interface IPokemon {
  id: number;
  name: string;
  image: string;
  height: number;
  weight: number;
}

export interface IGetPokemonData {
  name: string;
  url: string;
}
