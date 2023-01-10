import { mockListResponse } from "../../mocks/data/listPokemon.mock";

export type PokemonListInferredType = ReturnType<typeof mockListResponse>;
