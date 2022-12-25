import React from "react";
import { Link } from "react-router-dom";
import { RouteNames } from "../../router/RouteNames";
import { useScrollToTopOnRouteChange } from "../../utils/hooks/useScrollToTopOnRouteChange";

const HeaderBar: React.FC = (props) => {
    useScrollToTopOnRouteChange();

    return (
        <header className="mx-2 pt-4 lg:pt-12 pb-4 flex flex-col lg:grid grid-cols-4 items-center">
            <div className="col-start-2 col-span-2 flex flex-col items-center">
                <Link
                    to={RouteNames.Home}
                    className="hover:text-blue-800 focus:text-blue-900 focus:underline transition-colors text-center text-2xl lg:text-4xl font-bold font-heading"
                >
                    PokéPedia!
                </Link>
                <p className="font-heading text-center text-lg">
                    Find out stats, abilities, movesets and more from all your
                    favourite Pokémon
                </p>
            </div>
        </header>
    );
};

export default HeaderBar;
