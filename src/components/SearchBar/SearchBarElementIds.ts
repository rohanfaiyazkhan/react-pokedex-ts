export const SearchBarElementIds = {
    Input: "autocomplete",
    Results: "autocomplete-results",
    Item: "autocomplete-item",
    ItemWithId: (id: number) => `autocomplete-item-${id}`,
    ItemLink: "autocomplete-item-link",
} as const;
