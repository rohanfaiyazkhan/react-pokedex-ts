import { StalenessTimeoutInSeconds } from "../../contexts/NetworkCacheLayer/NetworkConfig";
import getCurrentTimeStamp from "./../getCurrentTimeStamp";

export function isDataStale(
    fetchedOn: number,
    stalenessTimeout = StalenessTimeoutInSeconds.DEFAULT
) {
    const timestamp = getCurrentTimeStamp();
    if (timestamp - fetchedOn > stalenessTimeout) {
        return true;
    }

    return false;
}
