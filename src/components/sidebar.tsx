"use client"

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import Button from './button';

interface SidebarProps {
    isOpen: boolean;
}

export const Sidebar = ( { isOpen }: SidebarProps) => {
    if(!isOpen) {
        return
    }

    return (
        <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
            <Button>
                <Link href="/groups">
                    <FontAwesomeIcon icon={faPeopleGroup} /> Grupos
                </Link>
            </Button>
        </aside>
    );
};

export default Sidebar;
