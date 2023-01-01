import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { useDebouncedSearch } from "./useDebouncedSearch";
import { SearchBarElementIds } from "./SearchBarElementIds";

export const MIN_SEARCH_QUERY_INPUT_LENGTH = 3; // Search will not trigger if input length is less than this

export function useSearchBar() {
    const [isFocused, setIsFocused] = useState(false);
    const [isDropdownOpen, setIsDropDownOpen] = useState(false);
    const [inputQuery, setInputQuery] = useState("");
    const rootContainerRef = useRef<HTMLDivElement>(null);
    const listElementRef = useRef<HTMLUListElement>(null);

    const { results, isDebouncing } = useDebouncedSearch(
        inputQuery,
        MIN_SEARCH_QUERY_INPUT_LENGTH
    );

    const outSideClickListener = (event: MouseEvent) => {
        if (
            !rootContainerRef.current ||
            !rootContainerRef.current.contains(event.target as Node)
        ) {
            setIsDropDownOpen(false);
        }
    };

    useLayoutEffect(() => {
        document.body.addEventListener("click", outSideClickListener);

        return () =>
            document.body.removeEventListener("click", outSideClickListener);
    }, []);

    const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setInputQuery(event.target.value);
    };

    const onInputFocus: React.FocusEventHandler<HTMLInputElement> = (event) => {
        setIsFocused(true);
        setIsDropDownOpen(true);
    };

    const onInputBlur: React.FocusEventHandler<HTMLInputElement> = (event) => {
        setIsFocused(false);

        if (results.length === 0) {
            setIsDropDownOpen(false);
        }
    };

    const onListItemBlur: React.FocusEventHandler = (event) => {
        const target = event.target as HTMLElement;
        if (!target.parentNode?.nextSibling) {
            setIsDropDownOpen(false);
        }
    };

    const onOverlayClick = () => {
        setIsDropDownOpen(false);
    };

    const onItemSelect: React.MouseEventHandler<HTMLAnchorElement> = (
        event
    ) => {
        setInputQuery("");
        setIsDropDownOpen(false);
    };

    const onDropDownKeyPress = (event: KeyboardEvent) => {
        if (["ArrowUp", "ArrowDown"].includes(event.key)) {
            event.preventDefault();

            const activeElement = document.activeElement;

            if (!rootContainerRef.current?.contains(activeElement)) {
                return;
            }

            const firstLink = rootContainerRef.current?.querySelector(
                `#${SearchBarElementIds.ItemLink}`
            );

            const input = rootContainerRef.current?.querySelector(
                `#${SearchBarElementIds.Input}`
            );

            if (activeElement === input) {
                if (event.key === "ArrowDown" && firstLink) {
                    (firstLink as HTMLElement).focus();
                    return;
                }
            }

            if (activeElement === firstLink && input) {
                if (event.key === "ArrowDown") {
                    (input as HTMLElement).focus();
                }
            }

            const parentOfActiveElement =
                activeElement?.parentElement ?? undefined;

            if (
                parentOfActiveElement?.id.startsWith(SearchBarElementIds.Item)
            ) {
                const nextSibling = parentOfActiveElement.nextElementSibling;
                const prevSibling =
                    parentOfActiveElement.previousElementSibling;

                switch (event.key) {
                    case "ArrowDown":
                        if (
                            !nextSibling ||
                            !nextSibling.firstChild ||
                            (nextSibling.firstChild as HTMLElement).id !==
                                SearchBarElementIds.ItemLink
                        ) {
                            return;
                        }

                        const nextElement =
                            nextSibling.firstChild as HTMLElement;
                        nextElement.focus();
                        return;

                    case "ArrowUp":
                        if (
                            !prevSibling ||
                            !prevSibling.firstChild ||
                            (prevSibling.firstChild as HTMLElement).id !==
                                SearchBarElementIds.ItemLink
                        ) {
                            return;
                        }

                        const prevElement =
                            prevSibling.firstChild as HTMLElement;
                        prevElement.focus();
                        return;
                }
            }
        }
    };

    useEffect(() => {
        if (isDropdownOpen) {
            document.addEventListener("keypress", onDropDownKeyPress);
        } else {
            document.removeEventListener("keypress", onDropDownKeyPress);
        }

        return () => {
            document.removeEventListener("keypress", onDropDownKeyPress);
        };
    }, [isDropdownOpen]);

    return {
        rootContainerRef,
        inputQuery,
        isFocused,
        isDropdownOpen,
        listElementRef,
        isDebouncing,
        onChange,
        onInputFocus,
        onInputBlur,
        onListItemBlur,
        onOverlayClick,
        onItemSelect,
        results,
    };
}
