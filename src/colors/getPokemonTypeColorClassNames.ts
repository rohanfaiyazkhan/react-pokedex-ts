import { assertPokemonTypeNameValid } from "./../data/PokemonTypes/isPokemonTypeNameValid";
import { PokemonTypeColorClassNames } from "./PokemonTypeColorClassNames";

export function getPokemonTypeColorClassNames(type?: string) {
    if (!type) {
        return undefined;
    }

    try {
        assertPokemonTypeNameValid(type);
        return PokemonTypeColorClassNames[type];
    } catch (error) {
        console.error(error);
        return undefined;
    }
}
