import React from "react";
import { Link } from "react-router-dom";
import ArrowRightIcon from "../../assets/svg-components/ArrowRightIcon";
import { TotalListLength } from "../../requests/NetworkConfig";
import { getRoute } from "../../router/getRoute";
import { RouteNames } from "../../router/RouteNames";

type NextAndPreviousProps = {
    currentIndex: number;
};

const buttonWidth = "3rem";

const NextAndPrevious: React.FC<NextAndPreviousProps> = ({ currentIndex }) => {
    const hasPrev = currentIndex > 1;
    const hasNext = currentIndex < TotalListLength.Items;
    return (
        <>
            {hasPrev && (
                <Link
                    to={getRoute(RouteNames.View, {
                        id: (currentIndex - 1).toString(),
                    })}
                    className="fixed left-0 flex items-center justify-center rounded-r-lg bg-red-300 border-r-2 border-red-900 opacity-75"
                    title="View Next Pokemon"
                    style={{
                        top: `calc(50% - ${buttonWidth}/2)`,
                        width: buttonWidth,
                        height: buttonWidth,
                    }}
                >
                    <ArrowRightIcon className="w-6 h-6 rotate-180" />
                </Link>
            )}
            {hasNext && (
                <Link
                    to={getRoute(RouteNames.View, {
                        id: (currentIndex + 1).toString(),
                    })}
                    className="fixed right-0 flex items-center justify-center rounded-l-lg bg-red-300 border-l-2 border-red-900 opacity-75"
                    title="View Previous Pokemon"
                    style={{
                        top: `calc(50% - ${buttonWidth})`,
                        width: buttonWidth,
                        height: buttonWidth,
                    }}
                >
                    <ArrowRightIcon className="w-6 h-6" />
                </Link>
            )}
        </>
    );
};

export default NextAndPrevious;