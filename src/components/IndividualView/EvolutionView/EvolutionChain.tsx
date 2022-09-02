import React from "react";
import { LoadingStates } from "../../../data/LoadingStates";
import { useEvolutionChainApi } from "../../../utils/requests/useAPI";
import { IStyleableProps } from "../../../utils/stylingUtils";
import LoadingSpinner from "../../StatusIndicators/LoadingSpinner";
import { combineClassnames } from "../../../utils/stylingUtils";
import Evolution from "./Evolution";

interface IEvolutionChainProps extends IStyleableProps {
    evolutionChainUrl: string;
    containerClassName?: string;
}

function getEvolutionIdFromUrl(url: string) {
    const parts = url.split("/");
    const id = Number(parts[-1]);

    return id;
}

const EvolutionChain: React.FC<IEvolutionChainProps> = ({
    evolutionChainUrl,
    className,
    style,
    containerClassName,
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
                <div
                    className={combineClassnames(
                        "border-2 border-gray-400 rounded shadow-inner flex justify-center py-4",
                        containerClassName
                    )}
                >
                    <Evolution evolution={evolutionChain!.data!.chain} />
                </div>
            )}
        </div>
    );
};

export default EvolutionChain;
