import makeFetchRequest from "../contexts/NetworkCacheLayer/makeFetchRequest";
import { ValidResourceNames } from "../contexts/NetworkCacheLayer/ValidResourceNames";

describe("Mock makeFetchRequest works as expected", () => {
    fit("Expects mock makeFetchRequest to be called", async () => {
        // console.log("Mock function resolves to: ", makeFetchRequest("pokemon"));
        const res = await makeFetchRequest(ValidResourceNames.Pokemon, 1);
        const data = await res.json();

        expect(data.name).toBe("bulbasaur");
    });
});
