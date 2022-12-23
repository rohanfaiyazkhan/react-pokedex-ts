import React from "react";
import { GridRow, GridColumnHeader } from "./AccessibleTableComponents";
import { getColumnIterator } from "./columnIterator";

interface IGridHeaderRowProps {
    hideLearnLevel?: boolean;
}

const GridHeaderRow: React.FC<IGridHeaderRowProps> = ({ hideLearnLevel }) => {
    const columnIterator = getColumnIterator(1);

    return (
        <GridRow rowIndex={1}>
            {!hideLearnLevel && (
                <GridColumnHeader colIndex={columnIterator.next()}>
                    Level
                    <br />
                    Learned
                </GridColumnHeader>
            )}
            <GridColumnHeader
                colIndex={columnIterator.next()}
                className="col-span-2"
            >
                Name
            </GridColumnHeader>
            <GridColumnHeader
                colIndex={columnIterator.next()}
                className={hideLearnLevel ? "col-span-6" : "col-span-5"}
            >
                Description
            </GridColumnHeader>

            <GridColumnHeader colIndex={columnIterator.next()}>
                Power
            </GridColumnHeader>
            <GridColumnHeader colIndex={columnIterator.next()}>
                Damage Class
            </GridColumnHeader>
            <GridColumnHeader colIndex={columnIterator.next()}>
                Accuracy
            </GridColumnHeader>
            <GridColumnHeader colIndex={columnIterator.next()}>
                PP
            </GridColumnHeader>
        </GridRow>
    );
};

export default GridHeaderRow;
