import PropTypes from "prop-types";
import { IPokemonType } from "../../data/PokemonTypes";
import {
    combineClassnames,
    IStyleableProps,
} from "../../utils/classnamesUtils";

interface ITypeIndicatorsProps extends IStyleableProps {
    types: IPokemonType[];
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
