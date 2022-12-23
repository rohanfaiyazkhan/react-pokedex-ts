import { PropsWithChildren, FC } from "react";
import { combineClassnames, StyleableProps } from "../../../utils/stylingUtils";

function getStyleProps<
    P extends StyleableProps = PropsWithChildren<StyleableProps>
>(props: P, additionalClassNames?: string) {
    return {
        className: combineClassnames(additionalClassNames, props.className),
        style: props.style,
    };
}

type GridRowProps = StyleableProps & { rowIndex: number };
type GridColProps = StyleableProps & { colIndex: number };

export const Grid: FC<PropsWithChildren<StyleableProps>> = (props) => (
    <div
        role="grid"
        {...getStyleProps(props, "rounded-lg shadow border border-orange-200")}
    >
        {props.children}
    </div>
);

export const GridRow: FC<PropsWithChildren<GridRowProps>> = (props) => (
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

export const GridColumnHeader: FC<PropsWithChildren<GridColProps>> = (
    props
) => (
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

export const GridCell: FC<PropsWithChildren<GridColProps>> = (props) => (
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
