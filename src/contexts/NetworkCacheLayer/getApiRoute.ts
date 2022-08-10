import { BASE_API_URL } from "./NetworkConfig";
import { ValidResourceNames } from "./ValidResourceNames";

const VALID_RESOURCE_NAMES = Object.values(ValidResourceNames);

/**
 *
 * @param resourceName Name of resource being fetched, e.g. pokemon or species
 * @param  id (Optional) If fetching one resource, ID of said resource
 * @return URL of PokeAPI route to make a GET request to
 */
export function getApiRoute(resourceName: ValidResourceNames, id?: number) {
    const isResourceUnexpected = !VALID_RESOURCE_NAMES.includes(resourceName);

    if (isResourceUnexpected) {
        throw new Error(
            `[getApiRoute]: resourceName is unexpected: ${resourceName}. Expected ${VALID_RESOURCE_NAMES.join(
                ", "
            )}`
        );
    }

    const urlArray = [BASE_API_URL];

    urlArray.push(resourceName);

    if (id !== undefined) {
        urlArray.push(id.toString());
    }

    return urlArray.join("/");
}
