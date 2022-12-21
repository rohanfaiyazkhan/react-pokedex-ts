import { useQuery } from "@tanstack/react-query";
import { EVOLUTION_CHAIN_RESOURCE_KEY } from "./key";
import { makeEvolutionChainRequest } from "./request";

export function useEvolutionChainQuery(id: number) {
    return useQuery([EVOLUTION_CHAIN_RESOURCE_KEY, id], () =>
        makeEvolutionChainRequest(id)
    );
}
