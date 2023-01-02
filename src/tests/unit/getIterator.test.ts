import { getIterator } from "./../../utils/getIterator";

describe("getIterator correctly returns an iterator that iterates a value when called", () => {
    const iterator = getIterator(5);

    expect(iterator.next()).toBe(6);
    expect(iterator.next()).toBe(7);
    expect(iterator.next()).toBe(8);
});
