import { Link } from "react-router-dom";
import ArrowRightIcon from "../../../assets/svg-components/ArrowRightIcon";
import { EvolutionChain } from "../../../requests/evolutionChain/data";
import { getRoute } from "../../../router/getRoute";
import { RouteNames } from "../../../router/RouteNames";
import { getSpriteUrl } from "../../../utils/getSpriteUrl";
import { capitalizeFirstLetter } from "./../../../utils/capitalizeFirstLetter";

const Sprite: React.FC<{ name: string; speciesUrl: string }> = ({
    name,
    speciesUrl,
}) => {
    const parts = speciesUrl.split("/");
    const speciesId = Number(parts[parts.length - 2]);
    const spriteUrl = getSpriteUrl(speciesId);

    return (
        <Link
            className="flex flex-col justify-center"
            to={getRoute(RouteNames.View, { id: speciesId.toString() })}
        >
            <img
                src={spriteUrl.toString()}
                style={{
                    minWidth: 160,
                    minHeight: 160,
                }}
                alt={"Front sprite of pokemon " + name}
            />
            <p className="capitalize text-center">{name}</p>
        </Link>
    );
};

type EvolutionProps = {
    evolution: EvolutionChain;
};

function formatText(input: string) {
    return input.split("-").map(capitalizeFirstLetter).join(" ");
}

const EvolutionView: React.FC<EvolutionProps> = ({ evolution }) => {
    return (
        <div className="flex flex-col md:flex-row">
            <Sprite
                name={evolution.species.name}
                speciesUrl={evolution.species.url}
            />
            <div className="flex flex-col items-center">
                {evolution.evolves_to.length > 0 &&
                    evolution.evolves_to.map((evo) => (
                        <div
                            className="flex flex-col md:flex-row  items-center"
                            key={evo.species.name}
                        >
                            <div className="flex flex-col justify-center items-center mx-4">
                                {evo.evolution_details?.[0]?.trigger?.name && (
                                    <p className="text-sm capitalize">
                                        {formatText(
                                            evo.evolution_details?.[0]?.trigger
                                                ?.name
                                        )}
                                    </p>
                                )}
                                {evo.evolution_details?.[0]?.min_level && (
                                    <p className="text-sm ">
                                        Level{" "}
                                        {evo.evolution_details?.[0]?.min_level}
                                    </p>
                                )}
                                {evo.evolution_details?.[0]?.item && (
                                    <p className="text-sm capitalize">
                                        {formatText(
                                            evo.evolution_details?.[0]?.item
                                                ?.name
                                        )}
                                    </p>
                                )}
                                {evo.evolution_details?.[0]?.held_item && (
                                    <p className="text-sm capitalize">
                                        Holding{" "}
                                        {formatText(
                                            evo.evolution_details?.[0]
                                                ?.held_item?.name
                                        )}
                                    </p>
                                )}
                                {evo.evolution_details?.[0]?.known_move && (
                                    <p className="text-sm capitalize">
                                        Knows Move{" "}
                                        {formatText(
                                            evo.evolution_details?.[0]
                                                ?.known_move?.name
                                        )}
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
                                        Affection{" "}
                                        {
                                            evo.evolution_details?.[0]
                                                ?.min_affection
                                        }
                                    </p>
                                )}
                                <ArrowRightIcon className="w-8 h-8 rotate-90 md:rotate-0" />
                            </div>
                            <EvolutionView evolution={evo} />
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default EvolutionView;
