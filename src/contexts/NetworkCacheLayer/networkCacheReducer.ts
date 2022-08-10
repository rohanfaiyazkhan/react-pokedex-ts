import { NetworkCacheAction, NetworkCacheActions } from "./NetworkCacheActions";
import getCurrentTimeStamp from "./../../utils/getCurrentTimeStamp";
import { LoadingStates } from "./../../data/LoadingStates";
import { ResourceContainer } from "./ResourceContainer";
import { ValidResourceNames } from "./ValidResourceNames";

export function networkCacheReducer(
    state: ResourceContainer,
    action: NetworkCacheAction
): ResourceContainer {
    console.debug("[networkCacheReducer -> action recieved]: ", action);

    let id = action?.payload?.id;

    if (!id) {
        throw new Error("[networkCacheReducer]: id is unknown");
    }

    const timestamp = getCurrentTimeStamp();

    switch (action.type) {
        case NetworkCacheActions.GetPokemonRequest:
            return {
                ...state,
                [id]: {
                    ...state?.[id],
                    [ValidResourceNames.Pokemon]: {
                        ...state?.[id]?.pokemon,
                        requestOn: timestamp,
                        loadingState: LoadingStates.Loading,
                    },
                },
            };
        case NetworkCacheActions.GetPokemonRequestSuccess:
            if (!action?.payload?.data) {
                console.error(
                    "[useNetworkReducer.GetPokemonRequestSuccess]: data is missing"
                );
                console.error(action.payload);
            }

            return {
                ...state,
                [id]: {
                    ...state?.[id],
                    [ValidResourceNames.Pokemon]: {
                        ...state?.[id]?.pokemon,
                        fetchedOn: timestamp,
                        loadingState: LoadingStates.Success,
                        resource: action?.payload?.data,
                    },
                },
            };
        case NetworkCacheActions.GetPokemonRequestFailure:
            return {
                ...state,
                [id]: {
                    ...state?.[id],
                    [ValidResourceNames.Pokemon]: {
                        ...state?.[id]?.pokemon,
                        failedOn: timestamp,
                        loadingState: LoadingStates.Fail,
                        error: action?.payload?.error,
                    },
                },
            };
        case NetworkCacheActions.GetSpeciesRequest:
            return {
                ...state,
                [id]: {
                    ...state?.[id],
                    [ValidResourceNames.Species]: {
                        ...state?.[id]?.[ValidResourceNames.Species],
                        requestOn: timestamp,
                        loadingState: LoadingStates.Loading,
                    },
                },
            };
        case NetworkCacheActions.GetSpeciesRequestSuccess:
            if (!action?.payload?.data) {
                console.error(
                    "[useNetworkReducer.GetSpeciesRequestSuccess]: data is missing"
                );
                console.error(action.payload);
            }

            return {
                ...state,
                [id]: {
                    ...state?.[id],
                    [ValidResourceNames.Species]: {
                        ...state?.[id]?.[ValidResourceNames.Species],
                        fetchedOn: timestamp,
                        loadingState: LoadingStates.Success,
                        resource: action?.payload?.data,
                    },
                },
            };
        case NetworkCacheActions.GetSpeciesRequestFailure:
            return {
                ...state,
                [id]: {
                    ...state?.[id],
                    [ValidResourceNames.Species]: {
                        ...state?.[id]?.[ValidResourceNames.Species],
                        failedOn: timestamp,
                        loadingState: LoadingStates.Fail,
                        error: action?.payload?.error,
                    },
                },
            };

        default:
            return state;
    }
}
