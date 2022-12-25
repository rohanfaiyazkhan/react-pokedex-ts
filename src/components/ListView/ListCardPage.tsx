import React from "react";
import { PokemonListInferredType } from "../../requests/pokemonList/data";
import ListCard from "./ListCard";

type ListCardPageProps = {
    page: PokemonListInferredType;
    startIndex: number;
};

const ListCardPage: React.FC<ListCardPageProps> = ({ page, startIndex }) => {
    return (
        <div className="flex flex-col space-y-2 md:space-y-0 md:grid md:grid-cols-4 md:gap-2 lg:gap-4 mb-2 lg:mb-4">
            {page.results.map((data, idx) => {
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
    );
};

export default ListCardPage;
