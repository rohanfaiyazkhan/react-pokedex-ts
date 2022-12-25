import { PaginationInfo } from "../../data/PaginationInfo";
import { PokemonListInferredType } from "./data";
import { PokemonListResourceKeyFactory } from "./key";
import { makeListPokemonRequest } from "./request";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";

function extractOffsetFromListApiUrl(apiUrl: string) {
    const url = new URL(apiUrl);
    return Number(url.searchParams.get("offset")) ?? undefined;
}

export function useInfiniteListQuery() {
    return useInfiniteQuery({
        queryKey: PokemonListResourceKeyFactory.all,
        queryFn: ({ pageParam = 0 }) => makeListPokemonRequest(pageParam),
        keepPreviousData: true,
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.next !== null) {
                return extractOffsetFromListApiUrl(lastPage.next);
            }
        },
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
