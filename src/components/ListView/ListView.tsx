import React from "react";
import PokeballIcon from "../../assets/svg-components/PokeballIcon";
import { useInfiniteListQuery } from "./../../requests/pokemonList/hook";
import ListCardPage from "./ListCardPage";
import { NumberOfItemsPerPage } from "./../../requests/NetworkConfig";
import ScrollInfiteObserver from "./ScrollInfiteObserver";

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

const ListView: React.FC = (props) => {
    const listQueryResult = useInfiniteListQuery();
    const data = listQueryResult.data;
    const pages = data?.pages;

    const isError = listQueryResult.isError;
    const isEmpty = listQueryResult.isFetched && data === undefined;
    const isFetchingNextPage = listQueryResult.isFetchingNextPage;
    const isFetching = listQueryResult.isFetching;
    const hasNextPage = listQueryResult.hasNextPage;

    if (isError || isEmpty) {
        return <EmptyView />;
    }

    return (
        <div className="w-full">
            {pages?.map((page, idx) => (
                <ListCardPage
                    key={`page-` + idx}
                    page={page}
                    startIndex={idx * NumberOfItemsPerPage.DEFAULT + 1}
                />
            ))}
            {hasNextPage && (
                <ScrollInfiteObserver
                    isFetching={isFetching}
                    isFetchingNextPage={isFetchingNextPage}
                    fetchNextPage={listQueryResult.fetchNextPage}
                />
            )}
        </div>
    );
};

export default ListView;
