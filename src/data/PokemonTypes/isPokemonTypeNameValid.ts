import { ValidPokemonTypeNames, PokemonTypeNames } from "./PokemonTypeNames";
import { PokemonTypeNotValidError } from "./PokemonTypeNotValidError";

export function isPokemonTypeNameValid(type: string) {
    return (Object.values(PokemonTypeNames) as string[]).includes(type);
}

export function assertPokemonTypeNameValid(
    type: string
): asserts type is ValidPokemonTypeNames {
    if (!isPokemonTypeNameValid) {
        throw new PokemonTypeNotValidError(type);
    }
}
