import { RouteNames } from "./RouteNames";
import { generatePath } from "react-router";

export function getRoute(
    name: typeof RouteNames[keyof typeof RouteNames],
    params?: Record<string, string>
) {
    return generatePath(name, params);
}
