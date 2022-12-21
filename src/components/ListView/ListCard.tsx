import React from "react";
import { Link } from "react-router-dom";
import SpriteCentrePiece from "./../SpriteCenterPiece/SpriteCentrePiece";
import { generatePath } from "react-router";
import { combineClassnames } from "../../utils/stylingUtils";

interface IListCardProps {
    pokemonId: number;
    name: string;
}

function getIndividualCardUrl(id: number) {
    return generatePath("/view/:id", { id: id.toString() });
}

const ListCard: React.FC<IListCardProps> = ({ pokemonId, name }) => {
    const baseClassNames =
        "relative px-8 py-3 bg-gradient-to-b from-red-400 to-gray-100 border border-gray-500 rounded flex flex-col items-center justify-center shadow-lg scale-100";
    const transitionClassNames =
        "transition-transform hover:scale-110 focus:ring-red-300";
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
            <SpriteCentrePiece className="h-40" pokemonId={pokemonId} />
            <p className="z-10 flex items-center justify-start">
                <span className="mr-2 text-sm">{pokemonId}.</span>
                <span className="uppercase text-lg">{name}</span>
            </p>
        </Link>
    );
};

export default ListCard;
