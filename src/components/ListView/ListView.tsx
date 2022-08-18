import React from "react";
import { useListPaginationState } from "../../utils/hooks/usePaginationState";

interface IListViewProps {}

const ListView: React.FC<IListViewProps> = (props) => {
    const { page } = useListPaginationState();

    return <div></div>;
};

export default ListView;
