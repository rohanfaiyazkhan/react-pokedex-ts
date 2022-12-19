import { ValidPokemonTypeNames, PokemonTypeNames } from "./PokemonTypeNames";
import { PokemonTypeNotValidError } from "./PokemonTypeNotValidError";

export function isPokemonTypeNameValid(
    type: string
): asserts type is ValidPokemonTypeNames {
    if (!(Object.values(PokemonTypeNames) as string[]).includes(type)) {
        throw new PokemonTypeNotValidError(type);
    }
}
