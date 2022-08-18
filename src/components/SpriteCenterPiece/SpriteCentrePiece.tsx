import React, { useState } from "react";
import { SwitchIcon } from "../../assets/components";
import { getSpriteUrl } from "../../utils/getSpriteUrl";

interface ISpriteCentrePieceProps {
    pokemonId: number;
}

const SpriteCentrePiece: React.FC<ISpriteCentrePieceProps> = ({
    pokemonId,
}) => {
    const [spriteFacing, setSpriteFacing] = useState<"front" | "back">("front");
    const spriteUrl = getSpriteUrl(pokemonId, {
        frontOrBack: spriteFacing,
        shiny: false,
    });

    const toggleSprite = () => {
        setSpriteFacing((curr) => (curr === "front" ? "back" : "front"));
    };

    return (
        <div className="relative rounded-full h-64 w-64 bg-red-100 border-2 border-red-400 shadow-inner">
            <img src={spriteUrl.toString()} alt="Sprite of pokemon" />
            <button
                onClick={toggleSprite}
                className="absolute -right-4 -bottom-4 rounded-full p-4 bg-red-300 border border-red-500"
            >
                <SwitchIcon />
            </button>
        </div>
    );
};

export default SpriteCentrePiece;
