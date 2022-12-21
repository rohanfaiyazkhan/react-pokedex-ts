import React, { Fragment } from "react";
import PokeballIcon from "../../assets/svg-components/PokeballIcon";
import LoadingSpinner from "../StatusIndicators/LoadingSpinner";
import ListCard from "./ListCard";
import { useListPokemonQuery } from "./../../requests/pokemonList/hook";
import { useListPaginationState } from "../../utils/hooks/usePaginationState";

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
    const { page, limit } = useListPaginationState();
    // const page = 3;
    // const limit = 50;

    const listQueryResult = useListPokemonQuery({
        limit,
        offset: page * limit,
    });

    const startIndex = page * limit + 1;
    const data = listQueryResult.data;

    const isError = listQueryResult.isError;
    const isEmpty = listQueryResult.isFetched && data === undefined;
    const isLoading = listQueryResult.isLoading;

    if (isLoading) {
        return <LoadingView />;
    }

    if (isError || isEmpty) {
        return <EmptyView />;
    }

    return (
        <Fragment>
            <div className="flex flex-col space-y-2 md:space-y-0 md:grid md:grid-cols-4 md:gap-2 lg:gap-4">
                {data?.results?.map((data, idx) => {
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
