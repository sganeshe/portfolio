import React from 'react';

const TechBorder = ({ children, className = "", onClick }) => (
  <div 
    onClick={onClick}
    className={`relative bg-[#370139]/50 border border-[#a5fc29]/30 backdrop-blur-sm p-6 ${className} group overflow-hidden ${onClick ? 'cursor-pointer hover:border-[#a5fc29]/80' : ''}`}
  >
    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#a5fc29]"/>
    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#a5fc29]"/>
    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#a5fc29]"/>
    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#a5fc29]"/>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#a5fc29]/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out pointer-events-none"/>
    {children}
  </div>
);

export default TechBorder;