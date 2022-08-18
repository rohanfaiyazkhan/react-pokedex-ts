import { mockPokemonResponse } from "../mocks/pokemon.mock";
import { mockSpeciesResponse } from "./../mocks/species.mock";
import { mockListResponse } from "./../mocks/listPokemon.mock";

export type PokemonInferredType = typeof mockPokemonResponse;
export type PokemonSpeciesInferredType = typeof mockSpeciesResponse;
export type PokemonListInferredType = typeof mockListResponse;
