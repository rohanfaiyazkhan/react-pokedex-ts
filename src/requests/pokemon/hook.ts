import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { PokemonInferredType } from "./data";
import { POKEMON_RESOURCE_KEY } from "./key";
import { makeIndividualPokemonRequest } from "./request";

export function useIndividualPokemonQuery(id: number) {
    return useQuery<AxiosResponse<PokemonInferredType>>(
        [POKEMON_RESOURCE_KEY, id.toString()],
        () => makeIndividualPokemonRequest(id)
    );
}
