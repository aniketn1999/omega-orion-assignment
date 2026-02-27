import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  User, 
  Users, 
  Users2, 
  FileText, 
  UserPlus, 
  PieChart, 
  Settings, 
  ChevronsLeft, 
  Menu 
} from 'lucide-react';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const menuItems = [
    { name: 'Home', icon: Home, path: '/home' },
    { name: 'My Info', icon: User, path: '/myinfo', hasSub: true },
    { name: 'People', icon: Users, path: '/people' },
    { name: 'Team Management', icon: Users2, path: '/team-management', hasSub: true },
    { name: 'Project Setup', icon: FileText, path: '/project-setup', hasSub: true },
    { name: 'Hiring', icon: UserPlus, path: '/hiring' },
    { name: 'Report', icon: PieChart, path: '/report' },
  ];

  return (
    <>
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="fixed top-6 left-6 z-50 p-3 bg-[#332f2b] text-white rounded-2xl shadow-xl hover:scale-105 transition-transform"
        >
          <Menu size={24} />
        </button>
      )}

      {/* FIXED SIDEBAR */}
      <aside className={`
        fixed top-3 left-3 z-40 h-[calc(100vh-1.5rem)]
        bg-[#332f2b] transition-all duration-300 ease-in-out flex flex-col
        rounded-[35px] shadow-2xl
        ${isOpen ? 'w-72 p-6 opacity-100' : 'w-0 p-0 opacity-0 overflow-hidden'}
      `}>
        
        {/* Header */}
        <div className="flex items-center justify-between mb-10 min-w-[240px]">
          <h1 className="text-white text-4xl font-black tracking-tighter">CORE</h1>
          <button 
            onClick={() => setIsOpen(false)} 
            className="text-[#a19e9b] hover:text-white transition-colors p-1"
          >
            <ChevronsLeft size={28} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-grow space-y-1 min-w-[240px]">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => `
                w-full flex items-center justify-between px-4 py-3 transition-all duration-200 rounded-xl
                ${isActive 
                  ? 'bg-white text-[#8b7355] font-bold shadow-md scale-[1.02]' 
                  : 'text-[#a19e9b] hover:text-white hover:bg-white/5'
                }
              `}
            >
              <div className="flex items-center gap-4">
                <item.icon size={20} strokeWidth={2.5} />
                <span className="text-sm font-medium">{item.name}</span>
              </div>
            </NavLink>
          ))}
        </nav>

        {/* Settings */}
        <div className="mt-auto min-w-[240px]">
          <button className="w-full flex items-center gap-4 px-4 py-4 text-white border border-[#4a4744] rounded-[22px] hover:bg-white/10 transition-all group">
            <Settings size={20} className="group-hover:rotate-45 transition-transform duration-500" />
            <span className="text-sm font-medium">Settings</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;