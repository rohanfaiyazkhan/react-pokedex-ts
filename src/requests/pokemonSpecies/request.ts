import { PokemonSpeciesInferredType } from "./data";
import { getSinglePokemonApiPath } from "../getApiRoute";
import { POKEMON_SPECIES_RESOURCE_KEY } from "./key";
import { apiRequest } from "../httpClient";

export function makePokemonSpeciesRequest(id: number) {
    const path = getSinglePokemonApiPath(POKEMON_SPECIES_RESOURCE_KEY, id);
    return apiRequest<PokemonSpeciesInferredType>(path.toString());
}
