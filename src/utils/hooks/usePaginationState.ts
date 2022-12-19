import { useSearchParams } from "react-router-dom";
import { NumberOfItemsPerPage } from "../../requests/NetworkConfig";

const PAGE_SIZE = NumberOfItemsPerPage.DEFAULT; // Not letting this be customizable for now

export function useListPaginationState() {
    const [searchParams] = useSearchParams();

    const pageSearchParam = searchParams.get("page");
    let page = Number(pageSearchParam);

    if (Number.isNaN(page) || page < 1) {
        page = 1;
    }

    const offset = (page - 1) * PAGE_SIZE;
    const limit = PAGE_SIZE;

    return { page, offset, limit };
}
