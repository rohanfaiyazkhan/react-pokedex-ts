import { mockPokemonResponse } from "../mocks/data/pokemon.mock";
import { mockSpeciesResponse } from "../mocks/data/species.mock";
import { mockListResponse } from "../mocks/data/listPokemon.mock";
import { mockMove } from "./../mocks/data/move.mock";

export type PokemonInferredType = typeof mockPokemonResponse;
export type PokemonSpeciesInferredType = typeof mockSpeciesResponse;
export type PokemonListInferredType = typeof mockListResponse;
export type PokemonMoveInferredType = typeof mockMove;
