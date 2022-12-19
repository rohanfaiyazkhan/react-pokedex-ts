import { PokemonTypeNames } from "./PokemonTypeNames";

export class PokemonTypeNotValidError extends Error {
    type: string;

    constructor(type: string) {
        super(
            `Unexpected Pokemon type name: ${type}. Expected one of ${Object.values(
                PokemonTypeNames
            ).join(", ")}.`
        );
        this.type = type;
    }
}
