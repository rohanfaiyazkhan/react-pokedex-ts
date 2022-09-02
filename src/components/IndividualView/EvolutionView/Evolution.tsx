import { Link } from "react-router-dom";
import ArrowRightIcon from "../../../assets/svg-components/ArrowRightIcon";
import { IEvolutionChain } from "../../../data/IEvolutionChain";
import { getRoute } from "../../../router/getRoute";
import { RouteNames } from "../../../router/RouteNames";
import { getSpriteUrl } from "../../../utils/getSpriteUrl";

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

interface IEvolutionProps {
    evolution: IEvolutionChain;
}

const Evolution: React.FC<IEvolutionProps> = ({ evolution }) => {
    return (
        <div className="flex flex-col md:flex-row">
            <Sprite
                name={evolution.species.name}
                speciesUrl={evolution.species.url}
            />
            {evolution.evolves_to.length > 0 &&
                evolution.evolves_to.map((evo) => (
                    <div
                        className="flex flex-col md:flex-row  items-center"
                        key={evo.species.name}
                    >
                        <div className="flex flex-col justify-center items-center mx-4">
                            {evo.evolution_details?.[0]?.min_level && (
                                <p className="text-sm ">
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
                                        evo.evolution_details?.[0]?.known_move
                                            ?.name
                                    }
                                </p>
                            )}
                            {evo.evolution_details?.[0]?.min_happiness && (
                                <p className="text-sm capitalize">
                                    Happiness{" "}
                                    {evo.evolution_details?.[0]?.min_happiness}
                                </p>
                            )}
                            {evo.evolution_details?.[0]?.min_affection && (
                                <p className="text-sm capitalize">
                                    Affection{" "}
                                    {evo.evolution_details?.[0]?.min_affection}
                                </p>
                            )}
                            <ArrowRightIcon className="w-8 h-8 rotate-90 md:rotate-0" />
                        </div>
                        <Evolution evolution={evo} />
                    </div>
                ))}
        </div>
    );
};

export default Evolution;
