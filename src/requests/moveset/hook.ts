import { MOVE_RESOURCE_KEY } from "./key";
import { makeMoveRequest } from "./request";
import { useQuery } from "@tanstack/react-query";

export function useMoveQuery(id: number) {
    return useQuery([MOVE_RESOURCE_KEY, id.toString()], () =>
        makeMoveRequest(id)
    );
}
