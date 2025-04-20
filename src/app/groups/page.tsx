import { getAllGroups } from "@/services/get_all_groups";
import Group from "@/models/group";
import Table from "@/components/table";

import { Column } from "@/components/table";

export const GroupsPage = async () => {
    const groups = await getAllGroups({ pageNumber: 1, pageSize: 10 });

    const columns: Column<Group>[]  = [
        { key: 'id', header: 'ID' },
        { key: 'name', header: 'Nombre' },
        { key: 'description', header: 'Descripción' },
        { key: 'created_at', header: 'Creado', render: (group: Group) => group.created_at.toLocaleDateString() },
        { key: 'updated_at', header: 'Actualizado', render: (group: Group) => group.updated_at.toLocaleDateString() },
    ];

    return <Table<Group> data={groups} columns={columns} />;
}

export default GroupsPage;