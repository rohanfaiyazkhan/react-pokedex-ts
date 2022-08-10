import { getApiRoute } from "./getApiRoute";
import { ValidResourceNames } from "./ValidResourceNames";

/**
 *
 * @param {"pokemon" | "pokemon-species"} target
 * @param {number} id
 * @returns {Promise<Response>}
 */
export default function makeFetchRequest(
    target: ValidResourceNames,
    id: number
): Promise<Response> {
    const route = getApiRoute(target, id);
    return fetch(route);
}
