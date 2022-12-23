import React from "react";
import { IStyleableProps } from "../../../utils/stylingUtils";
import LoadingSpinner from "../../StatusIndicators/LoadingSpinner";
import { combineClassnames } from "../../../utils/stylingUtils";
import EvolutionChainView from "./EvolutionChainView";
import { useEvolutionChainQuery } from "../../../requests/evolutionChain/hook";

interface IEvolutionChainProps extends IStyleableProps {
    evolutionChainId: number;
    containerClassName?: string;
}

const EvolutionChainsView: React.FC<IEvolutionChainProps> = ({
    evolutionChainId,
    className,
    style,
    containerClassName,
}) => {
    const evolutionChainQueryResults = useEvolutionChainQuery(evolutionChainId);
    const data = evolutionChainQueryResults.data;

    const isLoading = evolutionChainQueryResults.isLoading;
    const isEmpty = !isLoading && data === undefined;

    if (isEmpty) {
        return null;
    }

    return (
        <div className={className} style={style}>
            <p className="text-lg mb-2 mt-4 font-bold font-heading">
                Evolutions
            </p>
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
                    <EvolutionChainView evolution={data!.chain} />
                </div>
            )}
        </div>
    );
};

export default EvolutionChainsView;
