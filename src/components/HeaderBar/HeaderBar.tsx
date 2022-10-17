import React from "react";
import { useMatch, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import ArrowRightIcon from "../../assets/svg-components/ArrowRightIcon";
import { RouteNames } from "../../router/RouteNames";
import { useScrollToTopOnRouteChange } from "../../utils/hooks/useScrollToTopOnRouteChange";

interface IHeaderBarProps {}

const BackToListView: React.FC = () => {
    return (
        <Link to={RouteNames.Home}>
            <p className="px-2 md:px-8 flex items-center h-full">
                <ArrowRightIcon className="rotate-180 w-6 h-6 mt-1 mr-2" />
                <span className="hidden md:inline text-sm">
                    Go back to full list
                </span>
            </p>
        </Link>
    );
};

const HeaderBar: React.FC<IHeaderBarProps> = (props) => {
    useScrollToTopOnRouteChange();
    const isIndividualView = useMatch("/view/:id");

    return (
        <header className="pt-4 lg:pt-12 pb-4 grid grid-cols-4">
            {isIndividualView && <BackToListView />}
            <h1 className="col-start-2 text-center text-2xl lg:text-4xl font-bold place-items-center col-span-2">
                PokeDex App!
            </h1>
        </header>
    );
};

export default HeaderBar;
