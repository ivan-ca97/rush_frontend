import PaginationParameters from "@/types/pagination";

import getAllPaginated from "./template_generics/generic_services";
import { GetAllGroupsResponse } from "@/types/groups";

import { parseGetAllGroupsResponse } from "@/parsers/group_parsers";

export const getAllGroups = async ({pageNumber, pageSize}: PaginationParameters) => {
    const response = await getAllPaginated<GetAllGroupsResponse>("/groups", {pageNumber, pageSize}, parseGetAllGroupsResponse)

    return response.groups
}