import React from "react";
import { useMatch } from "react-router";
import { Link } from "react-router-dom";
import ArrowRightIcon from "../../assets/svg-components/ArrowRightIcon";
import { RouteNames } from "../../router/RouteNames";
import { useScrollToTopOnRouteChange } from "../../utils/hooks/useScrollToTopOnRouteChange";

const BackToListView: React.FC = () => {
    return (
        <div className="flex items-center justify-start">
            <Link
                to={RouteNames.Home}
                className="bg-red-900 rounded-lg transition-colors hover:bg-brown-900 px-2 lg:px-4 py-2 mb-2 lg:ml-4 flex items-center h-full text-lg text-red-100"
            >
                <ArrowRightIcon className="rotate-180 w-6 h-6 mt-1 mr-2" />
                <span className="text-sm lg:text-base">Back</span>
            </Link>
        </div>
    );
};

const HeaderBar: React.FC = (props) => {
    useScrollToTopOnRouteChange();
    const isIndividualView = useMatch("/view/:id");

    return (
        <header className="mx-2 pt-4 lg:pt-12 pb-4 flex flex-col lg:grid grid-cols-4 items-center">
            {isIndividualView && <BackToListView />}
            <div className="col-start-2 col-span-2">
                <h1 className=" text-center text-2xl lg:text-4xl font-bold font-heading">
                    PokéPedia!
                </h1>
                <p className="font-heading text-center text-lg">
                    Find out stats, abilities, movesets and more from all your
                    favourite Pokémon
                </p>
            </div>
        </header>
    );
};

export default HeaderBar;
