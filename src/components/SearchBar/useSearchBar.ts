import { useState, useRef, useLayoutEffect } from "react";
import { useDebouncedSearch } from "./useDebouncedSearch";

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
