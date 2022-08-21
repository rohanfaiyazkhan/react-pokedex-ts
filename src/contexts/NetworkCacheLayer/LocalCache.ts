import localforage from "localforage";
import getCurrentTimeStamp from "../../utils/getCurrentTimeStamp";
export const LOCAL_STORAGE_NETWORK_CACHE_KEY = "networkCache";

export class NetworkLocalCache {
    cache: any | undefined = undefined;
    fetchedOn: number | undefined = undefined;
    savedOn: number | undefined = undefined;

    load() {
        try {
            let stateFromCache = localStorage.getItem(
                LOCAL_STORAGE_NETWORK_CACHE_KEY
            );
            this.cache = stateFromCache
                ? JSON.parse(stateFromCache)
                : undefined;
            this.fetchedOn = getCurrentTimeStamp();

            return stateFromCache;
        } catch (e) {
            console.error("Unable to get network cache");
            console.error(e);
        }
    }

    save(newState: any) {
        try {
            let stateToSet: any | undefined = newState;
            if (!stateToSet) {
                stateToSet = this.cache;
            }

            localStorage.setItem(
                LOCAL_STORAGE_NETWORK_CACHE_KEY,
                JSON.stringify(stateToSet)
            );
            this.savedOn = getCurrentTimeStamp();
        } catch (e) {
            console.error("Unable to set network cache");
            console.error(e);
        }
    }

    async asyncSave(newState: any) {
        try {
            let stateToSet: any | undefined = newState;
            if (!stateToSet) {
                stateToSet = this.cache;
            }

            await localforage.setItem(
                LOCAL_STORAGE_NETWORK_CACHE_KEY,
                JSON.stringify(stateToSet)
            );
            this.savedOn = getCurrentTimeStamp();
        } catch (e) {
            console.error("Unable to set network cache");
            console.error(e);
        }
    }

    async asyncLoad() {
        try {
            let stateFromCache = await localforage.getItem<string>(
                LOCAL_STORAGE_NETWORK_CACHE_KEY
            );
            this.cache = stateFromCache
                ? JSON.parse(stateFromCache)
                : undefined;
            this.fetchedOn = getCurrentTimeStamp();

            return stateFromCache;
        } catch (e) {
            console.error("Unable to get network cache");
            console.error(e);
        }
    }

    constructor(initialState: any) {
        if (!initialState) {
            this.load();
        } else {
            this.cache = initialState;
        }
    }
}
