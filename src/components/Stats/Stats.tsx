import { IStat } from "../../data/IStats";
import { IStyleableProps } from "../../utils/classnamesUtils";
import { MaxStatValues } from "./MaxStatValues";
import { StatNames, StatReadableTexts } from "./StatNames";
import "./slide.css";

function calculateTotalStats(stats: IStat[]) {
    let total = 0;

    for (const stat of stats) {
        total += stat.base_stat;
    }

    return total;
}

interface IStatsProps extends IStyleableProps {
    stats?: IStat[];
}

const StatBar: React.FC<{ baseStat: number; statName: string }> = ({
    baseStat,
    statName,
}) => {
    if (!Object.values(StatNames).includes(statName as StatNames)) {
        console.error("Unexpected stat name " + statName);
        return null;
    }

    const maxStatValue = MaxStatValues[statName as StatNames];
    const width = `${(baseStat / maxStatValue) * 100}%`;

    return (
        <div
            className="bg-gray-300 flex-grow h-2 relative"
            style={{ content: " " }}
        >
            <div
                className="absolute left-0 top-0 h-2 rouded-sm bg-gray-400 animation-slide-from-left origin-left"
                style={{ width, content: " " }}
            />
        </div>
    );
};

const Stats: React.FC<IStatsProps> = ({ stats, className, style }) => {
    if (stats === undefined) {
        return null;
    }

    const totalStats = calculateTotalStats(stats);

    return (
        <div className={className} style={style}>
            <p>Base Stats</p>
            <ul className="flex flex-col" style={style}>
                {stats.map((stat) => (
                    <li className="flex items-center" key={stat.stat.name}>
                        <span className="mr-2 text-sm w-16">
                            {StatReadableTexts[stat.stat.name as StatNames]}
                        </span>
                        <span className="mr-2 w-8">{stat.base_stat}</span>
                        <StatBar
                            statName={stat.stat.name}
                            baseStat={stat.base_stat}
                        />
                    </li>
                ))}
                <li className="flex items-center">
                    <span className="mr-2 text-sm w-16">
                        {StatReadableTexts[StatNames.Overall]}
                    </span>
                    <span className="mr-2 w-8">{totalStats}</span>
                    <StatBar
                        statName={StatNames.Overall}
                        baseStat={totalStats}
                    />
                </li>
            </ul>
        </div>
    );
};

export default Stats;
