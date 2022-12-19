import axios from "axios";
import { getSinglePokemonApiRoute } from "../getApiRoute";
import { EvolutionChainResponse } from "./data";
import { EVOLUTION_CHAIN_RESOURCE_KEY } from "./key";

export function makeEvolutionChainRequest(id: number) {
    const apiUrl = getSinglePokemonApiRoute(EVOLUTION_CHAIN_RESOURCE_KEY, id);

    return axios.get<EvolutionChainResponse>(apiUrl.toString());
}
