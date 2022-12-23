export function getColumnIterator(start: number = 0) {
    let counter = start;

    return {
        next() {
            return counter++;
        },
    };
}
