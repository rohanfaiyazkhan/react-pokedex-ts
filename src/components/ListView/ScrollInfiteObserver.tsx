import React, { useCallback, useEffect, useRef } from "react";
import {
    FetchNextPageOptions,
    InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import { PokemonListInferredType } from "../../requests/pokemonList/data";
import ArrowRightIcon from "../../assets/svg-components/ArrowRightIcon";
import LoadingSpinner from "../StatusIndicators/LoadingSpinner";

type FetchNextPage = (
    options?: FetchNextPageOptions | undefined
) => Promise<InfiniteQueryObserverResult<PokemonListInferredType>>;

type ScrollInfiteObserverProps = {
    fetchNextPage: FetchNextPage;
    isFetching: boolean;
    isFetchingNextPage: boolean;
};

const LoadingView = () => (
    <div
        style={{
            minWidth: 150,
            minHeight: 40,
        }}
        className="flex items-center justify-center bg-red-900 text-red-100 px-4 py-1 rounded-lg shadow"
    >
        <LoadingSpinner className="mr-2 w-6 h-6" />
        Loading
    </div>
);

const ScrollInfiteObserver: React.FC<ScrollInfiteObserverProps> = ({
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
}) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    const infiniteObserverCallback = useCallback<IntersectionObserverCallback>(
        (entries) => {
            const [entry] = entries;
            console.debug("Intersection detected", {
                isIntersecting: entry.isIntersecting,
                isFetching,
            });
            if (entry.isIntersecting && !isFetching) {
                fetchNextPage();
            }
        },
        [fetchNextPage, isFetching]
    );

    useEffect(() => {
        const intersectionObserverOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0,
        };

        const observer = new IntersectionObserver(
            infiniteObserverCallback,
            intersectionObserverOptions
        );

        const button = buttonRef.current;

        if (button) observer.observe(button);

        return () => {
            if (button) observer.unobserve(button);
        };
    }, [fetchNextPage, infiniteObserverCallback]);

    return (
        <div className="w-full flex items-center justify-center pt-8">
            {isFetchingNextPage ? (
                <LoadingView />
            ) : (
                <button
                    disabled={isFetching}
                    ref={buttonRef}
                    style={{
                        minWidth: 150,
                        minHeight: 40,
                    }}
                    className="flex items-center justify-center disabled:cursor-not-allowed bg-red-900 text-red-100 hover:bg-red-700 focus:bg-red-800 transition-colors px-4 py-1 rounded-lg shadow"
                >
                    <span className="mr-1 w-6 h-6">
                        <ArrowRightIcon className="rotate-90 w-full h-full" />
                    </span>
                    <span className="font-bold text-lg">Load more</span>
                </button>
            )}
        </div>
    );
};

export default ScrollInfiteObserver;
