"use client"

interface SidebarProps {
    isOpen: boolean;
}

export const Sidebar = ( { isOpen }: SidebarProps) => {
    if(!isOpen) {
        return
    }

    return (
        <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
            Sidebar
        </aside>
    );
};

export default Sidebar;
