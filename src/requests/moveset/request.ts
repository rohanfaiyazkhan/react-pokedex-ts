import { ApiPathFactory } from "../ApiPathFactory";
import { apiRequest } from "../httpClient";
import { Move } from "./data";

export async function makeMoveRequest(id: number) {
    const path = ApiPathFactory.move(id);

    return apiRequest<Move>(path);
}
