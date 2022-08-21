export function makeRangeIterator(start: number, end: number, step = 1) {
    let nextIndex = start;
    let count = 0;

    const iterator = {
        next() {
            let result;
            if (nextIndex < end) {
                result = { value: nextIndex, done: false };
                nextIndex += step;
                count++;
                return result;
            }
            return { value: count, done: true };
        },
    };

    return iterator;
}

export class RangeIteratable {
    start: number;
    end: number;
    step: number;

    constructor(start: number, end: number, step = 1) {
        this.start = start;
        this.end = end;
        this.step = step;
    }

    [Symbol.iterator]() {
        return makeRangeIterator(this.start, this.end, this.step);
    }
}
