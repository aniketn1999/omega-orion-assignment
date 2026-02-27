import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../Sidebar';
import TopNavbar from '../TopNavbar';

const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const getTitle = () => {
    const path = location.pathname.split('/')[1];
    if (!path || path === '') return 'Home';
    return path
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] w-full relative">
      
      
      <Sidebar 
        isOpen={isSidebarOpen} 
        setIsOpen={setSidebarOpen} 
      />
      
      {/* MAIN CONTENT WRAPPER*/}
      <div className={`
        flex flex-col min-h-screen transition-all duration-300 ease-in-out
        ${isSidebarOpen ? 'lg:pl-[300px]' : 'pl-0'}
      `}>
        
        <TopNavbar 
          title={getTitle()} 
          isSidebarOpen={isSidebarOpen}
        />
        
        <main className="p-4 sm:p-6 lg:p-8 flex-1">
          
          <div className="w-full h-full">
            <Outlet />
          </div>
        </main>
      </div>

      
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Layout;