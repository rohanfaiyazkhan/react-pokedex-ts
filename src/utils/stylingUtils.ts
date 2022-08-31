import { CSSProperties } from "react";

export function combineClassnames(
    ...inputs: Array<string | Record<string, boolean> | undefined>
) {
    let output = [];

    for (const input of inputs) {
        if (typeof input === "string") {
            output.push(input);
        } else if (typeof input === "object") {
            for (const [name, cond] of Object.entries(input)) {
                if (cond === true) {
                    output.push(name);
                }
            }
        }
    }

    return output.join(" ");
}

export interface IStyleableProps {
    className?: string;
    style?: CSSProperties;
}
