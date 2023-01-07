export const SearchBarElementIds = {
    Input: "autocomplete",
    Results: "autocomplete-results",
    Item: "autocomplete-item",
    ItemWithId: (id: number) => `autocomplete-item-${id}`,
    ItemLink: "autocomplete-item-link",
    ScreenOverlay: "screen-overlay",
} as const;
