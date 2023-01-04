import React from "react";
import { StyleableProps } from "../../utils/styles/StyleableProps";
import { getSpriteUrl } from "../../utils/getSpriteUrl";
import { combineClassnames } from "../../utils/styles/combineClassnames";

type SpriteCentrePieceProps = StyleableProps & {
    pokemonId: number;
    pokemonName?: string;
};

const SpriteCentrePiece: React.FC<SpriteCentrePieceProps> = ({
    pokemonId,
    className,
    style,
    pokemonName,
}) => {
    const spriteUrl = getSpriteUrl(pokemonId, {
        facing: "front",
        shiny: false,
    });

    const mobileImageClassnames = combineClassnames(
        className,
        "xl:hidden w-full h-full object-contain"
    );

    const roundedContainerClassnames = combineClassnames(
        className,
        "hidden xl:block relative xl:rounded-full bg-red-50 border border-red-400 shadow-inner"
    );

    return (
        <>
            <img
                className={mobileImageClassnames}
                style={{
                    minWidth: 80,
                    minHeight: 80,
                }}
                src={spriteUrl.toString()}
                alt={"Sprite of pokemon " + (pokemonName ?? pokemonId)}
            />
            <div className={roundedContainerClassnames} style={style}>
                <img
                    className="w-full h-full object-cover"
                    style={{
                        minWidth: 80,
                        minHeight: 80,
                    }}
                    src={spriteUrl.toString()}
                    alt={"Sprite of pokemon " + (pokemonName ?? pokemonId)}
                />
            </div>
        </>
    );
};

export default SpriteCentrePiece;
