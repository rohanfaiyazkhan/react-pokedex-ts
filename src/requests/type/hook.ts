import { useQueries } from "@tanstack/react-query";
import { POKEMON_TYPE_RESOURCE_KEY } from "./key";
import { makePokemonTypeRequest } from "./request";

export function usePokemonTypeQueries(ids: number[]) {
    return useQueries({
        queries: ids.map((id) => {
            return {
                queryKey: [POKEMON_TYPE_RESOURCE_KEY, id],
                queryFn: () => makePokemonTypeRequest(id),
            };
        }),
    });
}
