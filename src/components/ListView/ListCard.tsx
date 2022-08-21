import React from "react";
import SpriteCentrePiece from "./../SpriteCenterPiece/SpriteCentrePiece";

interface IListCardProps {
    pokemonId: number;
    name: string;
}

const ListCard: React.FC<IListCardProps> = ({ pokemonId, name }) => {
    return (
        <div className="relative px-8 py-3 bg-red-100 border border-gray-500 rounded flex flex-col items-center shadow-lg">
            <div
                aria-hidden
                style={{ content: " " }}
                className="absolute z-0 h-1/2 w-full top-0 left-0 bg-red-800 opacity-60 rounded-t"
            />
            <SpriteCentrePiece pokemonId={pokemonId} />
            <p className="z-10 flex items-center justify-start">
                <span className="mr-2 text-sm">{pokemonId}.</span>
                <span className="uppercase text-lg">{name}</span>
            </p>
        </div>
    );
};

export default ListCard;
