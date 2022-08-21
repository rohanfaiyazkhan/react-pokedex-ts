import React, { useState } from "react";
import { SwitchIcon } from "../../assets/svg-components";
import { IPokemonType } from "../../data/PokemonTypes";
import { IStyleableProps } from "../../utils/classnamesUtils";
import { getSpriteUrl } from "../../utils/getSpriteUrl";
import { combineClassnames } from "./../../utils/classnamesUtils";
import { TypeAppropriateColorClassNames } from "./TypeAppropriateBackgroundColors";

interface ISpriteCentrePieceProps extends IStyleableProps {
    pokemonId: number;
    types?: IPokemonType[];
    showSwitch?: boolean;
}

const SpriteCentrePiece: React.FC<ISpriteCentrePieceProps> = ({
    pokemonId,
    className,
    style,
    types = [],
    showSwitch = false,
}) => {
    const [spriteFacing, setSpriteFacing] = useState<"front" | "back">("front");
    const spriteUrl = getSpriteUrl(pokemonId, {
        frontOrBack: spriteFacing,
        shiny: false,
    });

    const toggleSprite = () => {
        setSpriteFacing((curr) => (curr === "front" ? "back" : "front"));
    };

    let rootClassName = combineClassnames(
        className,
        "relative rounded-full bg-red-100 border-2 border-red-400 shadow-inner"
    );

    if (types.length > 0) {
        const firstType = types[0].type.name;
        const colorClassNames = TypeAppropriateColorClassNames[firstType];
        rootClassName = combineClassnames(rootClassName, colorClassNames.bg);
    }

    return (
        <div className={rootClassName}>
            <img
                className="w-full h-full object-cover"
                src={spriteUrl.toString()}
                alt="Sprite of pokemon"
            />
            {showSwitch && (
                <button
                    onClick={toggleSprite}
                    className="absolute w-1/12 h-1/12 -right-6 -bottom-6 rounded-full p-4 bg-red-300 border border-red-900"
                >
                    <SwitchIcon className="w-full h-full" />
                </button>
            )}
        </div>
    );
};

export default SpriteCentrePiece;
