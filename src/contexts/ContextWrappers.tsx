import { useNetworkCacheState } from "./NetworkCacheLayer/useNetworkCacheState";
import {
    IndividualNetworkCacheContext,
    ListResourceCacheContext,
} from "./NetworkCacheLayer/NetworkCacheContext";
import { NetworkCacheStateHandlerContext } from "./NetworkCacheLayer/NetworkCacheStateHandlers";

const NetworkCacheContextWrapper: React.FC<React.PropsWithChildren> = (
    props
) => {
    const { individualPokemonState, listPokemonState, stateHandlers } =
        useNetworkCacheState();

    return (
        <IndividualNetworkCacheContext.Provider value={individualPokemonState}>
            <ListResourceCacheContext.Provider value={listPokemonState}>
                <NetworkCacheStateHandlerContext.Provider value={stateHandlers}>
                    {props.children}
                </NetworkCacheStateHandlerContext.Provider>
            </ListResourceCacheContext.Provider>
        </IndividualNetworkCacheContext.Provider>
    );
};

const ContextWrappers: React.FC<React.PropsWithChildren> = (props) => {
    return (
        <NetworkCacheContextWrapper>
            {props.children}
        </NetworkCacheContextWrapper>
    );
};

export default ContextWrappers;
