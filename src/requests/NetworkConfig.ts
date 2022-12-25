export const BASE_API_URL = "https://pokeapi.co/api/v2";
export const StalenessTimeoutInMs = Object.freeze({
    DEFAULT: 300_000,
});
export const NumberOfItemsPerPage = {
    DEFAULT: 24,
};

export const TotalListLength = {
    Items: 906,
    Pages: Math.floor(906 / NumberOfItemsPerPage.DEFAULT),
};
