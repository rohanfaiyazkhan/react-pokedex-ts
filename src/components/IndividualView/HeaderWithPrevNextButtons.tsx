import React from "react";
import { Link } from "react-router-dom";
import ArrowRightIcon from "../../assets/svg-components/ArrowRightIcon";
import { TotalListLength } from "../../requests/NetworkConfig";
import { padToThreeDigits } from "../../utils/padToThreeDigits";
import { getRoute } from "./../../router/getRoute";
import { RouteNames } from "./../../router/RouteNames";

type HeaderWithPrevNextButtonsProps = {
    currentIndex: number;
    name?: string;
};

const HeaderWithPrevNextButtons: React.FC<HeaderWithPrevNextButtonsProps> = ({
    currentIndex,
    name,
}) => {
    const hasPrev = currentIndex > 1;
    const hasNext = currentIndex < TotalListLength.Items;
    return (
        <>
            <div className="flex space-x-2 justify-center">
                {hasPrev && (
                    <Link
                        className="bg-red-200  focus:bg-red-300 transition-colors flex items-center py-1 px-2 rounded"
                        to={getRoute(RouteNames.View, {
                            id: (currentIndex - 1).toString(),
                        })}
                    >
                        <ArrowRightIcon className="w-6 h-6 mr-1 mt-0.5 rotate-180" />
                        Previous
                    </Link>
                )}
                {hasNext && (
                    <Link
                        className="bg-red-200  focus:bg-red-300 transition-colors flex items-center py-1 px-2 rounded"
                        to={getRoute(RouteNames.View, {
                            id: (currentIndex + 1).toString(),
                        })}
                    >
                        Next
                        <ArrowRightIcon className="w-6 h-6 ml-1 mt-0.5" />
                    </Link>
                )}
            </div>
            <h1 className="text-lg mb-4 font-heading text-center">
                {padToThreeDigits(currentIndex)}.{" "}
                <span className="capitalize font-bold text-xl">{name}</span>
            </h1>
        </>
    );
};

export default HeaderWithPrevNextButtons;
