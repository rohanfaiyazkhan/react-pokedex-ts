import React, { Fragment } from "react";
import PokeballIcon from "../../assets/svg-components/PokeballIcon";
import { LoadingStates } from "../../data/LoadingStates";
import { useListPaginationState } from "../../utils/hooks/usePaginationState";
import { makeRangeIterator } from "../../utils/Range";

import { useListPokemonAPI } from "../../utils/requests/useAPI";
import LoadingSpinner from "../StatusIndicators/LoadingSpinner";
import ListCard from "./ListCard";

interface IListViewProps {}

const LoadingView = () => (
    <div className="h-full w-full flex items-center justify-center">
        <p className="flex items-center justify-center">
            <LoadingSpinner className="mr-2 w-6 h-6" />
            Loading Pokemon
        </p>
    </div>
);

const EmptyView = () => (
    <div className="h-full w-full flex items-center justify-center">
        <p className="flex items-center justify-center">
            <span className="mr-2">
                <PokeballIcon className="w-6 h-6" />
            </span>
            Unable to load list of Pokemon
        </p>
    </div>
);

const ListView: React.FC<IListViewProps> = (props) => {
    // const { page, limit } = useListPaginationState();
    const page = 3;
    const limit = 50;

    const [listResource] = useListPokemonAPI({
        limit,
        offset: page * limit,
    });

    const startIndex = page * limit + 1;

    const isEmpty = !listResource?.data;
    const isLoading = listResource?.loadingState === LoadingStates.Loading;

    if (isLoading) {
        return <LoadingView />;
    }

    if (isEmpty) {
        return <EmptyView />;
    }

    return (
        <Fragment>
            <div className="flex flex-col md:grid md:grid-cols-4 md:gap-2 lg:gap-4">
                {listResource.data?.results?.map((data, idx) => {
                    const pokemonId = startIndex + idx;

                    return (
                        <ListCard
                            pokemonId={pokemonId}
                            name={data.name}
                            key={"pokemon-list-view-" + pokemonId}
                        />
                    );
                })}
            </div>
        </Fragment>
    );
};

const ListViewWrapper: React.FC = () => {
    return <ListView />;
};

export default ListViewWrapper;
