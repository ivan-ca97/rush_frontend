
interface Group {
    id: string;
    name: string;
    description: string;
    created_at: Date;
    updated_at: Date;
    deleted_at?: Date | null;
}

export default Group