import { useQuery } from "@tanstack/react-query";
import { EvolutionChainResponse } from "./data";
import { EVOLUTION_CHAIN_RESOURCE_KEY } from "./key";

export function useEvolutionChainApi(id: number) {
    return useQuery<EvolutionChainResponse>([EVOLUTION_CHAIN_RESOURCE_KEY, id]);
}
