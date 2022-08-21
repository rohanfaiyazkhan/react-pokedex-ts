import React from "react";
import PokeballIcon from "../../assets/svg-components/PokeballIcon";
import { LoadingStates } from "../../data/LoadingStates";
import { useListPaginationState } from "../../utils/hooks/usePaginationState";
import { makeRangeIterator } from "../../utils/Range";

import { useListPokemonAPI } from "../../utils/requests/useAPI";
import LoadingSpinner from "../StatusIndicators/LoadingSpinner";
import ListCard from "./ListCard";

interface IListViewProps {}

const LoadingView = () => (
    <div className="flex items-center justify-center">
        <p>
            <LoadingSpinner className="mr-2" />
            Loading Pokemon
        </p>
    </div>
);

const EmptyView = () => (
    <div className="flex items-center justify-center">
        <p>
            <span className="mr-2">
                <PokeballIcon className="w-4 h-4" />
            </span>
            Unable to load list of Pokemon
        </p>
    </div>
);

const ListView: React.FC<IListViewProps> = (props) => {
    const { page, limit } = useListPaginationState();

    const [listResource] = useListPokemonAPI({
        limit,
        offset: page * limit,
    });

    const start = (page - 1) * limit;
    const end = page * limit;

    const rangeIter = makeRangeIterator(start, end);

    const isEmpty = !listResource?.data;
    const isLoading = listResource?.loadingState === LoadingStates.Loading;

    if (isLoading) {
        return <LoadingView />;
    }

    if (isEmpty) {
        return <EmptyView />;
    }

    return (
        <div className="flex flex-col md:grid md:grid-cols">
            {listResource.data?.results?.map((data) => {
                const pokemonId = rangeIter.next().value;

                return (
                    <ListCard
                        pokemonId={pokemonId}
                        name={data.name}
                        key={"pokemon-list-view-" + pokemonId}
                    />
                );
            })}
        </div>
    );
};

export default ListView;
