import { getRoute } from "./../../router/getRoute";
import { RouteNames } from "./../../router/RouteNames";

describe("getRoute correctly returns expected Routes", () => {
    const listRoute = getRoute(RouteNames.Home);
    const individualRoute = getRoute(RouteNames.View, { id: "5" });

    const expectedIndividualRoute = RouteNames.View.replace(":id", "5");

    expect(listRoute).toBe(RouteNames.Home);
    expect(individualRoute).toBe(expectedIndividualRoute);
});
