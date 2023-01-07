import React from "react";
import { Link } from "react-router-dom";
import SpriteCentrePiece from "./../SpriteCenterPiece/SpriteCentrePiece";
import { generatePath } from "react-router";
import { combineClassnames } from "../../utils/styles/combineClassnames";
import "./listCard.css";

type ListCardProps = {
    pokemonId: number;
    name: string;
};

function getIndividualCardUrl(id: number) {
    return generatePath("/view/:id", { id: id.toString() });
}

const ListCard: React.FC<ListCardProps> = ({ pokemonId, name }) => {
    const baseClassNames =
        "alternating-background relative px-8 py-3 bg-red-100 xl:bg-gradient-to-b from-red-100 to-red-200 border border-gray-500 rounded lg:rounded-lg flex flex-col items-center justify-center shadow-xl scale-100";
    const transitionClassNames =
        "transition-transform hover:scale-105 focus:ring-red-300";
    const rootClassNames = combineClassnames(
        baseClassNames,
        transitionClassNames
    );

    return (
        <Link
            to={getIndividualCardUrl(pokemonId)}
            className={rootClassNames}
            style={{ minHeight: "16rem" }}
        >
            <SpriteCentrePiece
                style={{ height: "80%", width: "80%" }}
                pokemonId={pokemonId}
                pokemonName={name}
            />
            <p className="z-10 flex items-center justify-start pt-2">
                <span className="mr-2  text-sm xl:text-lg">{pokemonId}.</span>
                <span className="uppercase text-lg">{name}</span>
            </p>
        </Link>
    );
};

export default ListCard;
