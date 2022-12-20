import { PaginationInfo } from "../data/PaginationInfo";

import { ResourceKeys } from "./ResourceKeys";

/**
 *
 * @param resourceName Name of resource being fetched, e.g. pokemon or species
 * @param  id (Optional) If fetching one resource, ID of said resource
 * @return URL object of PokeAPI route to make a GET request to
 */
export function getSinglePokemonApiPath(
    resourceName: typeof ResourceKeys[keyof typeof ResourceKeys],
    id?: number
) {
    const pathArray = [];

    pathArray.push(resourceName);

    if (id !== undefined) {
        pathArray.push(id.toString());
    }

    const url = new URL("/" + pathArray.join("/"));
    return url;
}

export function getPokemonListApiPath(pagination: PaginationInfo) {
    const url = new URL("/pokemon");
    url.searchParams.set("limit", pagination.limit.toString());
    url.searchParams.set("offset", pagination.offset.toString());

    return url;
}
