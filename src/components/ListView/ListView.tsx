import React from "react";
import { useListPaginationState } from "../../utils/hooks/usePaginationState";

interface IListViewProps {}

const ListView: React.FC<IListViewProps> = (props) => {
    const { page, limit } = useListPaginationState();

    return <div className="flex flex-col md:grid md:grid-cols"></div>;
};

export default ListView;
