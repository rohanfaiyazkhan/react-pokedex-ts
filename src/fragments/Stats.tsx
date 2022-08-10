import { IStat } from "../data/Stats";
import { IStyleableProps } from "../utils/classnamesUtils";
import { StatNames } from "./InfoTextArea/StatNames";
import { combineClassnames } from "./../utils/classnamesUtils";

interface IStatsProps extends IStyleableProps {
    stats: IStat[];
}

const Stats: React.FC<IStatsProps> = ({ stats, className, style }) => {
    if (stats === undefined) {
        console.error("[Stats]: stats is undefined");

        return null;
    }

    return (
        <ul
            className={combineClassnames(
                "grid grid-cols-2 grid-rows-3 gap-x-2",
                className
            )}
        >
            {stats.map((stat) => (
                <li className="mx-2 flex justify-between" key={stat.stat.name}>
                    <span className="stat-name">
                        {StatNames[stat.stat.name]}:
                    </span>
                    <span className="stat-val">{stat.base_stat}</span>
                </li>
            ))}
        </ul>
    );
};

export default Stats;
