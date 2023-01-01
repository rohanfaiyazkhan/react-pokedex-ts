import React from "react";
import { Link, LinkProps } from "react-router-dom";
import { SearchIcon } from "../../assets/svg-components";
import { PokemonSearchResult } from "../../data/pokemonSearchList";
import { getRoute } from "../../router/getRoute";
import { RouteNames } from "../../router/RouteNames";
import { combineClassnames } from "../../utils/styles/combineClassnames";
import ScreenOverlay from "./ScreenOverlay";
import { SearchBarElementIds } from "./SearchBarElementIds";
import { MIN_SEARCH_QUERY_INPUT_LENGTH, useSearchBar } from "./useSearchBar";

type SearchBarProps = {};

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

const ListItemOption: React.FC<{ idx: number } & LinkProps> = ({
    idx,
    children,
    ...linkProps
}) => {
    return (
        <li className="w-full" id={SearchBarElementIds.ItemWithId(idx)}>
            <Link
                id={SearchBarElementIds.ItemLink}
                className="block w-full py-0.5 px-3 hover:bg-blue-200 focus:bg-blue-100"
                {...linkProps}
            >
                {children}
            </Link>
        </li>
    );
};

const SearchBar: React.FC<SearchBarProps> = (props) => {
    const {
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
    } = useSearchBar();

    return (
        <>
            <ScreenOverlay visible={isDropdownOpen} onClick={onOverlayClick} />
            <div
                ref={rootContainerRef}
                onSubmit={(e) => e.preventDefault()}
                className="relative mt-4 mb-2"
                style={{ zIndex: 100 }}
            >
                <div
                    role="combobox"
                    aria-controls="autocomplete-results"
                    aria-expanded="false"
                    className={combineClassnames(
                        "flex items-center rounded w-full border border-gray-600 px-2 py-1 bg-white ",
                        {
                            "ring-2 ring-blue-900": isFocused,
                        }
                    )}
                >
                    <SearchIcon className="w-4 h-4 mr-2 text-gray-700" />
                    <input
                        id={SearchBarElementIds.Input}
                        className="flex-grow text-lg focus:outline-none"
                        placeholder="Search for a Pokémon"
                        value={inputQuery}
                        onChange={onChange}
                        onFocus={onInputFocus}
                        onBlur={onInputBlur}
                    />
                </div>
                <ul
                    className={combineClassnames(
                        "bg-gray-100 absolute left-0 w-full overflow-y-auto shadow-md rounded border border-gray-400",
                        { invisible: !isDropdownOpen }
                    )}
                    style={{
                        zIndex: isDropdownOpen ? 100 : -10,
                        top: "calc(100% + 0.15rem)",
                        maxHeight: "min(60vh, 36rem)",
                    }}
                    role="listbox"
                    id={SearchBarElementIds.Results}
                    ref={listElementRef}
                >
                    {inputQuery.length > MIN_SEARCH_QUERY_INPUT_LENGTH &&
                    isDebouncing ? (
                        <li className="block w-full py-0.5 px-3">Loading...</li>
                    ) : (
                        results.length > 0 &&
                        results.map((result, idx) => (
                            <ListItemOption
                                key={"search-result-" + result.name}
                                onClick={onItemSelect}
                                onBlur={onListItemBlur}
                                to={getRoute(RouteNames.View, {
                                    id: result.id.toString(),
                                })}
                                idx={idx + 1}
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
