import { ValidPokemonTypeNames } from "./PokemonTypeNames";

export type PokemonType = {
    slot: number;
    type: {
        name: ValidPokemonTypeNames;
        url: string;
    };
};
