export enum AppUrls {
  HOME = "/home",
  POKEMON = "/pokemon",
}

export interface IPokemon {
  abilities: AbilitiesProps[];
  base_experience: number;
  cries: CriesProps;
  forms: IGetPokemonData[];
  game_indices: GameIndexProp[];
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: MovesProps;
  name: string;
  order: number;
  past_abilities: PastAbilitiesProps[];
  past_types: [];
  species: IGetPokemonData;
  sprites: SpritesProps;
  stats: StatsProps;
  types: IGetPokemonData;
  weight: number;
  image: string;
}

export interface AbilitiesProps {
  is_hidden: boolean;
  slot: number;
  ability: IGetPokemonData;
}

export interface CriesProps {
  latest: string;
  legacy: string;
}

export interface GameIndexProp {
  game_index: number;
  version: IGetPokemonData;
}

export interface MovesProps {
  move: IGetPokemonData;
  version_group_details: MovesVersionGroupDetailsProps[];
}

export interface MovesVersionGroupDetailsProps {
  level_learned_at: number;
  move_learn_method: IGetPokemonData;
  order: null;
  version_group: IGetPokemonData;
}

export interface PastAbilitiesProps {
  abilities: AbilitiesProps;
  generation: IGetPokemonData;
}

export interface SpritesProps {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  other: SpritesOtherProps;
}

export interface SpritesOtherProps {
  dream_world: SpritesOtherDreamWorldProps;
  home: SpritesOtherHomeProps;
  official_artwork: SpritesOtherOfficialArtworkProps;
  showdown: SpritesOtherShowdownProps;
  versions: SpritesVersionsProps;
}

export interface SpritesOtherDreamWorldProps {
  front_default: string;
  front_female: null;
}

export interface SpritesOtherHomeProps {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}

export interface SpritesOtherOfficialArtworkProps {
  front_default: string;
  front_shiny: string;
}

export interface SpritesOtherShowdownProps {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}

export interface StatsProps {
  base_stat: number;
  effort: number;
  stat: IGetPokemonData;
}

export interface SpritesVersionsProps {
  generationOne: SpritesVersionOneProps;
  generationTwo: SpritesVersionTwoProps;
}

export interface SpritesVersionOneProps {
  crystal: {
    back_default: string;
    back_shiny: string;
    back_shiny_transparent: string;
    back_transparent: string;
    front_default: string;
    front_shiny: string;
    front_shiny_transparent: string;
    front_transparent: string;
  };
  gold: {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
    front_transparent: string;
  };
  silver: {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
    front_transparent: string;
  };
}

export interface SpritesVersionTwoProps {
  redBlue: {
    back_default: string;
    back_gray: string;
    back_transparent: string;
    front_default: string;
    front_gray: string;
    front_transparent: string;
  };
  yellow: {
    back_default: string;
    back_gray: string;
    back_transparent: string;
    front_default: string;
    front_gray: string;
    front_transparent: string;
  };
}

export interface IGetPokemonData {
  name: string;
  url: string;
}
