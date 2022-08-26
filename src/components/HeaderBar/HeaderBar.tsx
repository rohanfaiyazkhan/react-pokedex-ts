import React from "react";
import { useMatch } from "react-router";

interface IHeaderBarProps {}

const HeaderBar: React.FC<IHeaderBarProps> = (props) => {
    const isIndividualView = useMatch("/view/:id");

    return (
        <header className="pt-4 lg:pt-12">
            <h1 className="text-center text-2xl lg:text-4xl font-bold">
                PokeDex App!
            </h1>
            {!isIndividualView && (
                <p className="text-lg text-center mb-4">
                    View every single Pokemon!
                </p>
            )}
        </header>
    );
};

export default HeaderBar;
