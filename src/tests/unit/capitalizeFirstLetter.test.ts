import { capitalizeFirstLetter } from "./../../utils/capitalizeFirstLetter";

describe("capitalizeFirstLetter successfully capitalizes the first letter of a string", () => {
    expect(capitalizeFirstLetter("hello")).toBe("Hello");
});
