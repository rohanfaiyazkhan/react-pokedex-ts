import { useQuery } from "@tanstack/react-query";
import { PokemonInferredType } from "./data";
import { POKEMON_RESOURCE_KEY } from "./key";
import { makeIndividualPokemonRequest } from "./request";

export function useIndividualPokemonQuery(id: number) {
    return useQuery<PokemonInferredType>(
        [POKEMON_RESOURCE_KEY, id.toString()],
        () => makeIndividualPokemonRequest(id)
    );
}
