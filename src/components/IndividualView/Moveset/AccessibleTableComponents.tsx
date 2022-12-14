import { PropsWithChildren, FC } from "react";
import { StyleableProps } from "../../../utils/styles/StyleableProps";
import { combineClassnames } from "../../../utils/styles/combineClassnames";

function getStyleProps<
    P extends StyleableProps = PropsWithChildren<StyleableProps>
>(props: P, additionalClassNames?: string) {
    return {
        className: combineClassnames(additionalClassNames, props.className),
        style: props.style,
    };
}

type GrdRowProps = StyleableProps & { rowIndex: number };
type GrdColProps = StyleableProps & { colIndex: number };

export const Grid: FC<PropsWithChildren<StyleableProps>> = (props) => (
    <div
        role="grid"
        {...getStyleProps(props, "rounded-lg shadow border border-orange-200")}
    >
        {props.children}
    </div>
);

export const GridRow: FC<PropsWithChildren<GrdRowProps>> = (props) => (
    <div
        role="row"
        aria-rowindex={props.rowIndex}
        {...getStyleProps(
            props,
            "grid grid-cols-12 odd:bg-yellow-50 even:bg-orange-50 items-stretch"
        )}
    >
        {props.children}
    </div>
);

export const GridColumnHeader: FC<PropsWithChildren<GrdColProps>> = (props) => (
    <div
        role="columnheader"
        aria-colindex={props.colIndex}
        {...getStyleProps(
            props,
            "bg-orange-100 px-2 py-2 border-r border-orange-50 last:border-none flex items-center"
        )}
    >
        {props.children}
    </div>
);

export const GridCell: FC<PropsWithChildren<GrdColProps>> = (props) => (
    <div
        role="gridcell"
        aria-colindex={props.colIndex}
        {...getStyleProps(
            props,
            "capitalize px-2 py-2 border-r border-orange-200 last:border-none flex items-center"
        )}
    >
        {props.children}
    </div>
);
