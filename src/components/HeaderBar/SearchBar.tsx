import React, { useRef } from "react";
import { useState } from "react";
import { Link, LinkProps } from "react-router-dom";
import { SearchIcon } from "../../assets/svg-components";
import { PokemonSearchResult } from "../../data/pokemonSearchList";
import { getRoute } from "../../router/getRoute";
import { RouteNames } from "../../router/RouteNames";
import { combineClassnames } from "../../utils/styles/combineClassnames";
import { useIsMounted } from "./../../utils/hooks/useIsMounted";
import "./overlayFade.css";
import { useSearch } from "./useSearch";

type SearchBarProps = {};

const ScreenOverlay: React.FC<{ visible: boolean }> = ({ visible }) => {
    const isMounted = useIsMounted();

    return (
        <div
            className={combineClassnames(
                "fixed top-0 left-0 w-screen h-screen bg-gray-900",
                {
                    "-z-10 opacity-0": !isMounted,
                    "animation-overlay-fade-in": isMounted && visible,
                    "animation-overlay-fade-out": isMounted && !visible,
                }
            )}
        ></div>
    );
};

const SearchResultText: React.FC<{ result: PokemonSearchResult }> = (props) => {
    const { name, match } = props.result;

    const firstPart = name.slice(0, match.start);
    const matchedPart = name.slice(match.start, match.end);
    const lastPart = name.slice(match.end);

    return (
        <>
            <span className="text-gray-700">{firstPart}</span>
            <span className="text-black">{matchedPart}</span>
            <span className="text-gray-700">{lastPart}</span>
        </>
    );
};

const ListItemOption = (props: LinkProps) => {
    return (
        <li className="w-full">
            <Link
                className="block w-full py-0.5 px-3 hover:bg-blue-200 focus:bg-blue-100 transition-colors"
                {...props}
            >
                {props.children}
            </Link>
        </li>
    );
};

const MIN_LENGTH = 3;

const SearchBar: React.FC<SearchBarProps> = (props) => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputQuery, setInputQuery] = useState("");
    const rootRef = useRef<HTMLDivElement>(null);

    const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setInputQuery(event.target.value);
    };

    const onFocus: React.FocusEventHandler<HTMLInputElement> = (event) => {
        setIsFocused(true);
    };

    const onBlur: React.FocusEventHandler<HTMLInputElement> = (event) => {
        setIsFocused(false);
    };

    const isActive = rootRef.current
        ? rootRef.current.contains(document.activeElement)
        : false;

    const { results, isDebouncing } = useSearch(inputQuery, MIN_LENGTH);

    return (
        <>
            <ScreenOverlay visible={isActive} />
            <div
                ref={rootRef}
                onSubmit={(e) => e.preventDefault()}
                className="relative mt-4 mb-2"
                style={{ zIndex: 100 }}
            >
                <div
                    role="combobox"
                    aria-controls="autocomplete-results"
                    aria-expanded="false"
                    className={combineClassnames(
                        "flex items-center rounded w-full border border-gray-600 px-2 py-1 bg-gray-100",
                        {
                            "ring ring-blue-900": isFocused,
                        }
                    )}
                >
                    <SearchIcon className="w-4 h-4 mr-2 text-gray-700" />
                    <input
                        className="flex-grow text-lg focus:outline-none"
                        placeholder="Search for a Pokémon"
                        value={inputQuery}
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                    />
                </div>
                <ul
                    className={combineClassnames(
                        "bg-gray-100 absolute left-0 w-full overflow-y-auto shadow-md rounded border border-gray-400",
                        { invisible: !isActive }
                    )}
                    style={{
                        zIndex: isActive ? 100 : -10,
                        top: "calc(100% + 0.15rem)",
                        maxHeight: "min(60vh, 36rem)",
                    }}
                    role="listbox"
                    id="autocomplete-results"
                >
                    {inputQuery.length > MIN_LENGTH && isDebouncing ? (
                        <li className="block w-full py-0.5 px-3">Loading...</li>
                    ) : (
                        results.map((result) => (
                            <ListItemOption
                                key={"search-result-" + result.name}
                                to={getRoute(RouteNames.View, {
                                    id: result.id.toString(),
                                })}
                            >
                                <SearchResultText result={result} />
                            </ListItemOption>
                        ))
                    )}
                </ul>
            </div>
        </>
    );
};

export default SearchBar;
