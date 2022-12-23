import React from "react";
import PokeballIcon from "../../assets/svg-components/PokeballIcon";
import { StyleableProps } from "../../utils/styles/StyleableProps";

interface ILoadingSpinnerProps extends StyleableProps {}

const LoadingSpinner: React.FC<ILoadingSpinnerProps> = ({
    className,
    style,
}) => {
    return (
        <span className={className} style={style}>
            <PokeballIcon className="w-full h-full animate-spin" />
        </span>
    );
};

export default LoadingSpinner;
