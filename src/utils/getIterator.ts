export function getIterator(start: number = 0) {
    let counter = start;

    return {
        next() {
            return counter++;
        },
    };
}
