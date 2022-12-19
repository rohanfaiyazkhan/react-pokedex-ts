import PropTypes from "prop-types";
import { PokemonType } from "../../data/PokemonTypes/PokemonType";
import { combineClassnames, IStyleableProps } from "../../utils/stylingUtils";

interface ITypeIndicatorsProps extends IStyleableProps {
    types: PokemonType[];
}

const TypeIndicator: React.FC<React.PropsWithChildren> = ({ children }) => (
    <div className="bg-gray-200 border-2 border-red-800 shadow-lg font-lg px-4 py-1 rounded">
        {children}
    </div>
);

const TypeIndicators: React.FC<ITypeIndicatorsProps> = ({
    types,
    className,
}) => {
    return (
        <div className={combineClassnames("flex px-2", className)}>
            <TypeIndicator>{types[0].type.name}</TypeIndicator>
            {types.length > 1 && types[1]?.type?.name && (
                <TypeIndicator>{types[1].type.name}</TypeIndicator>
            )}
        </div>
    );
};

TypeIndicators.propTypes = {
    types: PropTypes.array.isRequired,
    className: PropTypes.string,
};

export default TypeIndicators;
