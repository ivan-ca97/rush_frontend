import { get } from "@/utils/api"

import PaginationParameters from "@/types/pagination";


export const getAllPaginated = async <T>(endpoint: string, {pageNumber, pageSize}: PaginationParameters) => {
    const parameters = new URLSearchParams({
        page_number: pageNumber.toString(),
        page_size: pageSize.toString()
    });

    const response = await get<T[]>(endpoint, parameters);
    return response
}

export default getAllPaginated