import React from 'react';

const NavItem = ({ icon: Icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-4 p-4 mb-2 border-r-4 transition-all duration-300 font-mono text-sm tracking-widest cursor-pointer
      ${active 
        ? 'bg-[#a5fc29]/10 border-[#a5fc29] text-[#a5fc29]' 
        : 'border-transparent text-gray-400 hover:text-white hover:bg-white/5'
      }`}
  >
    <Icon size={20} />
    <span className="uppercase font-bold">{label}</span>
  </button>
);

export default NavItem;