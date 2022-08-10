import { LoadingStates } from "../../data/LoadingStates";
import { ValidResourceNames } from "./ValidResourceNames";

export interface ResourceContent<R = any> {
    loadingState?: LoadingStates;
    fetchedOn?: number;
    failedOn?: number;
    requestOn?: number;
    resource?: R;
    error?: any;
}

export interface ResourceContainer {
    [id: number]: {
        [ValidResourceNames.Pokemon]: ResourceContent;
        [ValidResourceNames.Species]: ResourceContent;
    };
}
