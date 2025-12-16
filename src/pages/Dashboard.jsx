import React from 'react';
import { Globe, MoveUpRight, Cpu, Terminal, Layers } from 'lucide-react';
import TechBorder from '../components/TechBorder';
import { DATA } from '../data/data';

const Dashboard = ({ navigate, openModal }) => (
  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <TechBorder className="h-full flex flex-col justify-between min-h-[300px]">
          <div>
            <div className="flex items-center gap-2 text-[#a5fc29] font-mono text-xs mb-4">
              <span className="animate-pulse">●</span> SYSTEM_ONLINE
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-2 tracking-tight">
              SAUMYA<br/>GANESHE
            </h1>
            <p className="text-xl text-gray-300 max-w-lg font-light border-l-4 border-[#a5fc29] pl-4 mt-6">
              CS Engineer & Visual Designer. Bridging the gap between raw code and brutal aesthetics.
            </p>
          </div>
          <div className="mt-8 flex gap-4">
             <div className="px-3 py-1 border border-[#a5fc29] text-[#a5fc29] font-bold text-xs font-mono">LOC: {DATA.location}</div>
          </div>
        </TechBorder>
      </div>

      <div className="space-y-6">
        <TechBorder className="cursor-pointer hover:bg-[#a5fc29]/10 transition-colors" onClick={() => navigate('projects')}>
           <div className="flex justify-between items-start">
             <Globe className="text-[#a5fc29] mb-4" />
             <MoveUpRight size={16} className="text-[#a5fc29]"/>
           </div>
           <div className="text-3xl font-bold text-white">WEB + GD</div>
           <div className="text-xs text-gray-400 font-mono mt-1">DUAL SPECIALIZATION</div>
        </TechBorder>
        <TechBorder className="cursor-pointer hover:bg-[#a5fc29]/10 transition-colors" onClick={() => navigate('profile')}>
           <div className="flex justify-between items-start">
              <Cpu className="text-[#a5fc29] mb-4" />
              <MoveUpRight size={16} className="text-[#a5fc29]"/>
           </div>
           <div className="text-3xl font-bold text-white">PYTHON</div>
           <div className="text-xs text-gray-400 font-mono mt-1">CORE COMPETENCY</div>
        </TechBorder>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       <TechBorder onClick={() => openModal({ type: 'PROJECT', data: DATA.projects[0] })}>
          <div className="flex justify-between items-center mb-6">
             <h3 className="text-xl font-bold text-white uppercase group-hover:text-[#a5fc29] transition-colors">Latest Project</h3>
             <Terminal size={16} className="text-[#a5fc29]"/>
          </div>
          <div className="bg-black/30 p-4 border-l-2 border-[#a5fc29]">
             <div className="text-[#a5fc29] font-bold text-lg mb-1">{DATA.projects[0].name}</div>
             <div className="text-gray-400 text-sm mb-4 line-clamp-1">{DATA.projects[0].tech}</div>
             <p className="text-white text-sm leading-relaxed line-clamp-2">{DATA.projects[0].desc}</p>
             <div className="mt-2 text-xs font-mono text-gray-500">[CLICK FOR DETAILS]</div>
          </div>
       </TechBorder>

       <TechBorder onClick={() => navigate('work')}>
          <div className="flex justify-between items-center mb-6">
             <h3 className="text-xl font-bold text-white uppercase group-hover:text-[#a5fc29] transition-colors">Experience</h3>
             <Layers size={16} className="text-[#a5fc29]"/>
          </div>
          <div className="space-y-4">
             {DATA.experience.slice(0, 1).map((exp, i) => (
                <div key={i} className="flex justify-between items-center border-b border-white/10 pb-2">
                   <div>
                      <div className="text-white font-bold">{exp.role}</div>
                      <div className="text-gray-500 text-xs uppercase">{exp.org}</div>
                   </div>
                   <div className="text-[#a5fc29] text-xs font-mono">{exp.time}</div>
                </div>
             ))}
             <div className="text-xs font-mono text-center pt-2 text-gray-500 group-hover:text-[#a5fc29] transition-colors">VIEW FULL LOGS {">>"}</div>
          </div>
       </TechBorder>
    </div>
  </div>
);

export default Dashboard;