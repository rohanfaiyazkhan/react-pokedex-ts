import { useState, useEffect } from "react";

export function useDebounce<T = any>(value: T, delayInMs: number) {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);
    const [isDebouncing, setIsDebouncing] = useState(false);

    useEffect(
        () => {
            // Update debounced value after delay
            setIsDebouncing(true);
            const handler = setTimeout(() => {
                setDebouncedValue(value);
                setIsDebouncing(false);
            }, delayInMs);

            // Cancel the timeout if value changes (also on delay change or unmount)
            // This is how we prevent debounced value from updating if value is changed ...
            // .. within the delay period. Timeout gets cleared and restarted.
            return () => {
                clearTimeout(handler);
            };
        },
        [value, delayInMs] // Only re-call effect if value or delay changes
    );

    return { debouncedValue, isDebouncing };
}
