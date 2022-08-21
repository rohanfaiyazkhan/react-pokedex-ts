import React from "react";
import SpriteCentrePiece from "./../SpriteCenterPiece/SpriteCentrePiece";

interface IListCardProps {
    pokemonId: number;
    name: string;
}

const ListCard: React.FC<IListCardProps> = ({ pokemonId, name }) => {
    return (
        <div className="relative px-8 py-12 bg-red-500 border border-gray-500 shadow-md rounded-lg flex flex-col items-center">
            <div
                aria-hidden
                style={{ content: " " }}
                className="h-1/2 w-full bottom-0 left-0 bg-red-100"
            />
            <SpriteCentrePiece pokemonId={pokemonId} />
            <p>
                {pokemonId}. {name}
            </p>
        </div>
    );
};

export default ListCard;
