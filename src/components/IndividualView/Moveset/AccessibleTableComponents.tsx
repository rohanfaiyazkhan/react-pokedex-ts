import { PropsWithChildren, FC } from "react";

export const Grid: FC<PropsWithChildren> = (props) => (
    <div role="grid" className="grid grid-col-6">
        {props.children}
    </div>
);

export const GridRow: FC<PropsWithChildren<{ rowIndex: number }>> = (props) => (
    <div role="row" className="" aria-rowindex={props.rowIndex}>
        {props.children}
    </div>
);

export const GridColumnHeader: FC<PropsWithChildren<{ colIndex: number }>> = (
    props
) => (
    <div
        role="columnheader"
        className="bg-red-100"
        aria-colindex={props.colIndex}
    >
        {props.children}
    </div>
);

export const GridCell: FC<PropsWithChildren<{ colIndex: number }>> = (
    props
) => (
    <div role="gridcell" aria-colindex={props.colIndex} className="capitalize">
        {props.children}
    </div>
);
