import { PaginationInfo } from "../../data/PaginationInfo";
import { useQuery } from "@tanstack/react-query/build/lib/useQuery";
import { PokemonListInferredType } from "./data";
import { PokemonListResourceKeyFactory } from "./key";
import { makeListPokemonRequest } from "./request";
import { useQueryClient } from "@tanstack/react-query";

export function useListPokemonQuery(paginationInfo: PaginationInfo) {
    return useQuery({
        queryKey: PokemonListResourceKeyFactory.paginated(paginationInfo),
        queryFn: () => makeListPokemonRequest(paginationInfo),
        keepPreviousData: true,
    });
}

export function useListCacheData(paginationInfo?: PaginationInfo) {
    const queryClient = useQueryClient();

    const queryKey = paginationInfo
        ? PokemonListResourceKeyFactory.paginated(paginationInfo)
        : PokemonListResourceKeyFactory.all;

    const listQuery =
        queryClient.getQueryData<PokemonListInferredType>(queryKey);

    return listQuery;
}
