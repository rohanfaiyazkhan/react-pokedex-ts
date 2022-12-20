import { PokemonInferredType } from "./data";
import { getSinglePokemonApiPath } from "../getApiRoute";
import { POKEMON_RESOURCE_KEY } from "./key";
import { apiRequest } from "../httpClient";

export async function makeIndividualPokemonRequest(id: number) {
    const path = getSinglePokemonApiPath(POKEMON_RESOURCE_KEY, id);
    return apiRequest<PokemonInferredType>(path.toString());
}
