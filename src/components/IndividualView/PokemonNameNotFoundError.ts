export class PokemonNameNotFoundError extends Error {
    name: any;

    constructor(name: any) {
        super(`Expected to find pokemon name but found ${name}.`);
        this.name = name;
    }
}
