export class PokemonUnexpectedIdError extends Error {
    id: any;

    constructor(id: any) {
        super(
            `Unexpected pokemon ID in path param. Expected a number but got ${id}.`
        );
        this.id = id;
    }
}
