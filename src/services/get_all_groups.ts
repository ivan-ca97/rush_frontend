import Group from "@/models/group";
import PaginationParameters from "@/types/pagination";

import getAllPaginated from "./template_generics/generic_services";


export const getAllGroups = async ({pageNumber, pageSize}: PaginationParameters) => {
    return getAllPaginated<Group>("/groups", {pageNumber, pageSize})
}