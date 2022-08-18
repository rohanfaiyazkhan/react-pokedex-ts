import { BASE_API_URL, NumberOfItemsPerPage } from "./NetworkConfig";
import { ValidResourceNames } from "./ValidResourceNames";

const VALID_RESOURCE_NAMES = Object.values(ValidResourceNames);

/**
 *
 * @param resourceName Name of resource being fetched, e.g. pokemon or species
 * @param  id (Optional) If fetching one resource, ID of said resource
 * @return URL of PokeAPI route to make a GET request to
 */
export function getSinglePokemonApiRoute(
    resourceName: ValidResourceNames,
    id?: number
) {
    const isResourceUnexpected = !VALID_RESOURCE_NAMES.includes(resourceName);

    if (isResourceUnexpected) {
        throw new Error(
            `[getApiRoute]: resourceName is unexpected: ${resourceName}. Expected ${VALID_RESOURCE_NAMES.join(
                ", "
            )}`
        );
    }

    const url = new URL(BASE_API_URL);
    const pathArray = [];

    pathArray.push(resourceName);

    if (id !== undefined) {
        pathArray.push(id.toString());
    }

    url.pathname = url.pathname + "/" + pathArray.join("/");
    return url;
}

export function getPokemonListApiRoute(
    offset: number,
    limit: number = NumberOfItemsPerPage.DEFAULT
) {
    const url = new URL(BASE_API_URL + "/pokemon");
    url.searchParams.set("limit", limit.toString());
    url.searchParams.set("offset", offset.toString());

    return url;
}
