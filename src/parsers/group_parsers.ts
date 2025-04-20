import { applyFieldTransforms, FieldTransformMap } from "@/utils/transformations";

import Group from "@/models/group";
import { GetAllGroupsResponse } from "@/types/groups";

export const groupParser: FieldTransformMap<Group> = {
    created_at: (v) => new Date(v),
    updated_at: (v) => new Date(v),
    deleted_at: (v) => v ? new Date(v) : null,
};

export const parseGroup = (raw: any): Group => {
  return applyFieldTransforms<Group>(raw, groupParser);
}

export const parseGetAllGroupsResponse = (raw: any): GetAllGroupsResponse => {

  const groups = raw.groups.map(parseGroup)

  const response: GetAllGroupsResponse = {
    groups: groups,
  };

  return response
}