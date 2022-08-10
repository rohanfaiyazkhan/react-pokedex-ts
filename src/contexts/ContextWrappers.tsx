import { useReducer } from "react";
import {
    NetworkCacheContext,
    NetworkCacheDispatchContext,
    NetworkCacheDispatch,
} from "./NetworkCacheLayer/NetworkCacheContext";
import { networkCacheReducer } from "./NetworkCacheLayer/networkCacheReducer";

const NetworkCacheContextWrapper: React.FC<React.PropsWithChildren> = (
    props
) => {
    const [state, dispatch] = useReducer(networkCacheReducer, {});

    return (
        <NetworkCacheContext.Provider value={state}>
            <NetworkCacheDispatchContext.Provider value={dispatch}>
                {props.children}
            </NetworkCacheDispatchContext.Provider>
        </NetworkCacheContext.Provider>
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
