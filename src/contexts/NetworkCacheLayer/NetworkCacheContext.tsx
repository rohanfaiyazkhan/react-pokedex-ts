import { createContext, useContext } from "react";
import { NetworkCacheAction } from "./NetworkCacheActions";
import { ResourceContainer } from "./ResourceContainer";

export type NetworkCacheDispatch = (action: NetworkCacheAction) => void;

const initialState = {};
export const NetworkCacheContext =
    createContext<ResourceContainer>(initialState);
export const NetworkCacheDispatchContext = createContext<NetworkCacheDispatch>(
    () => {}
);

export function useNetworkCache(): ResourceContainer {
    return useContext(NetworkCacheContext);
}

export function useNetworkCacheDispatch() {
    return useContext(NetworkCacheDispatchContext);
}
