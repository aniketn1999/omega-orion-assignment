import React, { useState } from "react";
import {
  Search,
  Download,
  Filter,
  Plus,
  LayoutGrid,
  List,
  Share2,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const People = () => {
  const initialEmployees = [
    {
      id: 101,
      name: "Ethan Lee",
      role: "IT Specialist",
      img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80",
      active: true,
    },
    {
      id: 102,
      name: "Emily Baker",
      role: "Marketing Manager",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      active: true,
    },
    {
      id: 103,
      name: "Micheal Shaun",
      role: "Sales Director",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      active: true,
    },
    {
      id: 104,
      name: "Liam Carter",
      role: "Product Designer",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      active: true,
    },
    {
      id: 105,
      name: "Grace Kim",
      role: "Customer Lead",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      active: true,
    },
    {
      id: 106,
      name: "Noah Williams",
      role: "Finance Head",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      active: true,
    },
    {
      id: 107,
      name: "Isabella Rossi",
      role: "Operations Manager",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
      active: true,
    },
    {
      id: 108,
      name: "Ava Thompson",
      role: "HR Executive",
      img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=150&q=80",
      active: true,
    },
  ];

  const allEmployees = [
    ...initialEmployees,
    ...initialEmployees.map((e) => ({ ...e, id: e.id + 100 })),
  ];

  const [searchTerm, setSearchTerm] = useState("");

  /* ---------------- FILTER LOGIC ---------------- */
  const filteredEmployees = allEmployees.filter((emp) =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative w-full md:max-w-md">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search by Employee Name or Number"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-100 rounded-full text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8b7355]/20 transition-all"
          />
        </div>

        {/* Actions */}
        <div className="flex flex-wrap md:flex-nowrap items-center gap-2 overflow-x-auto pb-2 md:pb-0">
          <button className="p-3 bg-white border border-gray-100 rounded-xl text-gray-600 hover:bg-gray-50 shadow-sm">
            <Download size={20} />
          </button>
          <button className="p-3 bg-white border border-gray-100 rounded-xl text-gray-600 hover:bg-gray-50 shadow-sm">
            <Filter size={20} />
          </button>
          <button className="p-3 bg-[#332f2b] text-white rounded-xl hover:bg-black transition-colors shadow-md active:scale-95">
            <Plus size={20} />
          </button>

          <div className="hidden sm:block h-8 w-[1px] bg-gray-200 mx-2"></div>

          <div className="flex items-center bg-white border border-gray-100 rounded-xl p-1 shadow-sm">
            <button className="p-2 bg-gray-100 rounded-lg text-gray-800">
              <LayoutGrid size={18} />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <List size={18} />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <Share2 size={18} />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <MoreHorizontal size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* --- EMPLOYEE GRID --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((emp) => (
            <EmployeeCard key={emp.id} employee={emp} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-400 font-medium">
            No employee found
          </p>
        )}
      </div>

      {/* --- PAGINATION FOOTER --- */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 px-4 py-4 border-t border-gray-100 w-full">
        <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
          Rows per page:
          <select className="bg-transparent font-bold text-gray-800 outline-none cursor-pointer">
            <option>100</option>
          </select>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-sm font-medium text-gray-500">
            {filteredEmployees.length} results
          </span>
          <div className="flex gap-4 items-center">
            <button className="text-gray-400 hover:text-gray-800 transition-colors p-1">
              <ChevronLeft size={20} strokeWidth={3} />
            </button>
            <button className="text-gray-800 hover:scale-125 transition-all p-1">
              <ChevronRight size={20} strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- EMPLOYEE CARD ---------------- */
const EmployeeCard = ({ employee }) => {
  return (
    <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group">
      <div className="relative mb-5">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white ring-1 ring-white">
          <img
            src={employee.img}
            alt={employee.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        
        

        <div className="absolute bottom-0 right-0 bg-[#332f2b] p-2 rounded-xl border-4 border-white shadow-lg">
          <LayoutGrid size={12} className="text-white" />
        </div>
      </div>

      <h3 className="font-bold text-[#332f2b] text-lg">{employee.name}</h3>
      <p className="text-xs font-semibold text-[#8b7355] mt-1.5 uppercase tracking-widest">
        {employee.role}
      </p>

      <div className="flex gap-1.5 mt-5">
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-orange-400"></span>
      </div>
    </div>
  );
};

export default People;
