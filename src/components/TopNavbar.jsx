import React, { useState, useEffect } from "react";
import { Clock, FileEdit, Inbox } from "lucide-react";

const TopNavbar = ({ title }) => {
  const [time, setTime] = useState(new Date());

//  Time
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <header className="w-full bg-white border-b border-gray-100 px-25 py-4 flex items-center justify-between rounded-2xl">
      <h2 className="text-md font-bold text-[#332f2b]">{title}</h2>

      <div className="flex items-center gap-4">
        <div className="hidden md:block px-4 py-2 border border-gray-200 rounded-full text-[10px] font-black">
          MST
        </div>

        <div className="flex items-center gap-3 pl-4 pr-1 py-1 border border-gray-200 rounded-full bg-white">
          <Clock size={18} className="text-gray-400" />
          <span className="text-sm font-bold tabular-nums">
            {time.toLocaleTimeString("en-GB")}
          </span>
          <button className="p-2 bg-gray-50 rounded-full">
            <FileEdit size={14} />
          </button>
        </div>

        <button className="relative p-2.5 border border-gray-200 rounded-full">
          <Inbox size={20} />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#ff5c00] rounded-full border-2 border-white"></span>
        </button>

        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
          className="w-10 h-10 rounded-full border-2 border-gray-100 shadow-sm"
          alt="User"
        />
      </div>
    </header>
  );
};

export default TopNavbar;
