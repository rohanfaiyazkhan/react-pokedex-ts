import { BASE_API_URL } from "./NetworkConfig";
import { PaginationInfo } from "../data/PaginationInfo";

import { ResourceKeys } from "./ResourceKeys";

/**
 *
 * @param resourceName Name of resource being fetched, e.g. pokemon or species
 * @param  id (Optional) If fetching one resource, ID of said resource
 * @return URL object of PokeAPI route to make a GET request to
 */
export function getSinglePokemonApiRoute(
    resourceName: typeof ResourceKeys[keyof typeof ResourceKeys],
    id?: number
) {
    const url = new URL(BASE_API_URL);
    const pathArray = [];

    pathArray.push(resourceName);

    if (id !== undefined) {
        pathArray.push(id.toString());
    }

    url.pathname = url.pathname + "/" + pathArray.join("/");
    return url;
}

export function getPokemonListApiRoute(pagination: PaginationInfo) {
    const url = new URL(BASE_API_URL + "/pokemon");
    url.searchParams.set("limit", pagination.limit.toString());
    url.searchParams.set("offset", pagination.offset.toString());

    return url;
}
