import React, { Fragment } from "react";
import { IEvolutionChain } from "../../data/IEvolutionChain";
import { LoadingStates } from "../../data/LoadingStates";
import { useEvolutionChainApi } from "../../utils/requests/useAPI";
import { IStyleableProps } from "../../utils/stylingUtils";
import LoadingSpinner from "./../StatusIndicators/LoadingSpinner";

interface IEvolutionChainProps extends IStyleableProps {
    evolutionChainUrl: string;
}

function getEvolutionChainIdFromUrl(url: string) {
    const parts = url.split("/");
    const id = Number(parts[-1]);

    return id;
}

const SingleEvolution: React.FC<{ evolution: IEvolutionChain }> = ({
    evolution,
}) => {
    return (
        <Fragment>
            <span>{evolution.species.name}</span>
            {evolution.evolves_to.length > 0 && (
                <Fragment>
                    {"-> "}
                    {evolution.evolves_to.map((evo) => (
                        <SingleEvolution
                            key={evo.species.name}
                            evolution={evo}
                        />
                    ))}
                </Fragment>
            )}
        </Fragment>
    );
};

const EvolutionChain: React.FC<IEvolutionChainProps> = ({
    evolutionChainUrl,
    className,
    style,
}) => {
    const id = getEvolutionChainIdFromUrl(evolutionChainUrl);

    const [evolutionChain] = useEvolutionChainApi(id);

    const isLoading = evolutionChain?.loadingState === LoadingStates.Loading;

    return (
        <div className={className} style={style}>
            <p className="text-lg mb-2">Evolutions</p>
            {isLoading ? (
                <p className="flex">
                    <LoadingSpinner className="w-4 mr-2" />
                    Loading
                </p>
            ) : evolutionChain?.data ? (
                <div>
                    <SingleEvolution evolution={evolutionChain.data.chain} />
                </div>
            ) : (
                <p>Not found</p>
            )}
        </div>
    );
};

export default EvolutionChain;
