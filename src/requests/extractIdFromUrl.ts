export function extractIdFromUrl(url: string) {
    const parts = url.split("/");

    for (let i = parts.length - 1; i >= 0; i--) {
        const id = parts[i];

        if (id === "") {
            continue;
        }

        if (!Number.isNaN(Number(id))) {
            return Number(id);
        }
    }

    return undefined;
}
