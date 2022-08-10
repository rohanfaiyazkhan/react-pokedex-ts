export enum NetworkCacheActions {
    GetPokemonRequest = "GetPokemonRequest",
    GetPokemonRequestSuccess = "GetPokemonRequestSuccess",
    GetPokemonRequestFailure = "GetPokemonRequestFailure",
    GetSpeciesRequest = "GetSpeciesRequest",
    GetSpeciesRequestSuccess = "GetSpeciesRequestSuccess",
    GetSpeciesRequestFailure = "GetSpeciesRequestFailure",
}

export type NetworkCacheAction = {
    type: NetworkCacheActions;
    payload?: any;
};
