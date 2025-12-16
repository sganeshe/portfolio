import React from 'react';

const SectionTitle = ({ title, sub }) => (
  <div className="mb-8 flex items-end gap-4 border-b border-[#a5fc29]/30 pb-4">
    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
      {title}
    </h2>
    <span className="text-[#a5fc29] font-mono text-sm mb-2 opacity-80">// {sub}</span>
  </div>
);

export default SectionTitle;