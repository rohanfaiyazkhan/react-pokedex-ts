import { PaginationInfo } from "../../data/PaginationInfo";
import { useQuery } from "@tanstack/react-query/build/lib/useQuery";
import { AxiosResponse } from "axios";
import { PokemonListInferredType } from "./data";
import { POKEMON_LIST_RESOURCE_KEY } from "./key";
import { makeListPokemonRequest } from "./request";

export function useListPokemonAPI(paginationInfo: PaginationInfo) {
    return useQuery<AxiosResponse<PokemonListInferredType>>({
        queryKey: [POKEMON_LIST_RESOURCE_KEY, paginationInfo],
        queryFn: () => makeListPokemonRequest(paginationInfo),
        keepPreviousData: true,
    });
}
