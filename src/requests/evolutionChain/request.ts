import { getSinglePokemonApiPath } from "../getApiRoute";
import { apiRequest } from "../httpClient";
import { EvolutionChainResponse } from "./data";
import { EVOLUTION_CHAIN_RESOURCE_KEY } from "./key";

export function makeEvolutionChainRequest(id: number) {
    const path = getSinglePokemonApiPath(EVOLUTION_CHAIN_RESOURCE_KEY, id);

    return apiRequest<EvolutionChainResponse>(path.toString());
}
