import React, { Fragment } from "react";
import ArrowRightIcon from "../../assets/svg-components/ArrowRightIcon";
import { IEvolutionChain } from "../../data/IEvolutionChain";
import { LoadingStates } from "../../data/LoadingStates";
import { getSpriteUrl } from "../../utils/getSpriteUrl";
import { useEvolutionChainApi } from "../../utils/requests/useAPI";
import { IStyleableProps } from "../../utils/stylingUtils";
import LoadingSpinner from "./../StatusIndicators/LoadingSpinner";

interface IEvolutionChainProps extends IStyleableProps {
    evolutionChainUrl: string;
}

function getEvolutionIdFromUrl(url: string) {
    const parts = url.split("/");
    const id = Number(parts[-1]);

    return id;
}

const Sprite: React.FC<{ name: string; speciesUrl: string }> = ({
    name,
    speciesUrl,
}) => {
    const parts = speciesUrl.split("/");
    const speciesId = Number(parts[parts.length - 2]);
    const spriteUrl = getSpriteUrl(speciesId);

    return (
        <div className="flex flex-col justify-center">
            <img
                src={spriteUrl.toString()}
                alt={"Front sprite of pokemon " + name}
            />
            <p className="capitalize text-center">{name}</p>
        </div>
    );
};

const SingleEvolution: React.FC<{ evolution: IEvolutionChain }> = ({
    evolution,
}) => {
    return (
        <Fragment>
            <Sprite
                name={evolution.species.name}
                speciesUrl={evolution.species.url}
            />
            {evolution.evolves_to.length > 0 && (
                <div className="flex flex-col">
                    {evolution.evolves_to.map((evo) => (
                        <div
                            className="flex items-center"
                            key={evo.species.name}
                        >
                            <div className="flex flex-col justify-center items-center mx-4">
                                <ArrowRightIcon className="w-8 h-8" />
                                {evo.evolution_details?.[0]?.min_level && (
                                    <p className="text-sm">
                                        Level{" "}
                                        {evo.evolution_details?.[0]?.min_level}
                                    </p>
                                )}
                                {evo.evolution_details?.[0]?.item && (
                                    <p className="text-sm capitalize">
                                        After using{" "}
                                        {evo.evolution_details?.[0]?.item?.name}
                                    </p>
                                )}
                                {evo.evolution_details?.[0]?.held_item && (
                                    <p className="text-sm capitalize">
                                        While holding{" "}
                                        {evo.evolution_details?.[0]?.item?.name}
                                    </p>
                                )}
                                {evo.evolution_details?.[0]?.known_move && (
                                    <p className="text-sm capitalize">
                                        Knows Move{" "}
                                        {
                                            evo.evolution_details?.[0]
                                                ?.known_move?.name
                                        }
                                    </p>
                                )}
                                {evo.evolution_details?.[0]?.min_happiness && (
                                    <p className="text-sm capitalize">
                                        Happiness{" "}
                                        {
                                            evo.evolution_details?.[0]
                                                ?.min_happiness
                                        }
                                    </p>
                                )}
                                {evo.evolution_details?.[0]?.min_affection && (
                                    <p className="text-sm capitalize">
                                        Happiness{" "}
                                        {
                                            evo.evolution_details?.[0]
                                                ?.min_affection
                                        }
                                    </p>
                                )}
                            </div>
                            <SingleEvolution evolution={evo} />
                        </div>
                    ))}
                </div>
            )}
        </Fragment>
    );
};

const EvolutionChain: React.FC<IEvolutionChainProps> = ({
    evolutionChainUrl,
    className,
    style,
}) => {
    const id = getEvolutionIdFromUrl(evolutionChainUrl);

    const [evolutionChain] = useEvolutionChainApi(id);

    const isLoading = evolutionChain?.loadingState === LoadingStates.Loading;

    if (!isLoading && evolutionChain?.data === undefined) {
        return null;
    }

    return (
        <div className={className} style={style}>
            <p className="text-lg mb-2 mt-4">Evolutions</p>
            {isLoading ? (
                <p className="flex">
                    <LoadingSpinner className="w-4 mr-2" />
                    Loading
                </p>
            ) : (
                <div className="border-2 border-gray-400 rounded shadow-inner flex justify-center py-4">
                    <SingleEvolution evolution={evolutionChain!.data!.chain} />
                </div>
            )}
        </div>
    );
};

export default EvolutionChain;
