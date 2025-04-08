'use client';

import { useState } from 'react';
import Header from './header';
import Sidebar from './sidebar';

interface LayoutWrapperProps {
    children: React.ReactNode;
}

export const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      <div className="main-content">
        <Sidebar isOpen={sidebarOpen} />
        <main className="contenido">{children}</main>
      </div>
    </>
  );
}

export default LayoutWrapper;