import React from 'react';
import { Maximize2 } from 'lucide-react';
import TechBorder from '../components/TechBorder';
import SectionTitle from '../components/SectionTitle';
import { DATA } from '../data/data';

const Projects = ({ openModal }) => (
  <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
    <SectionTitle title="Modules" sub="PROJECT_INDEX" />
    <div className="grid grid-cols-1 gap-6">
      {DATA.projects.map((proj, i) => (
        <TechBorder key={i} className="hover:bg-[#a5fc29]/5 transition-colors" onClick={() => openModal({ type: 'PROJECT', data: proj })}>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1 flex flex-col justify-center border-r border-[#a5fc29]/20 pr-6">
                 <div className="text-4xl font-black text-[#a5fc29] opacity-50">0{i+1}</div>
                 <div className="font-mono text-xs text-gray-400 mt-2">BUILD_VER_1.0</div>
              </div>
              <div className="md:col-span-3">
                 <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-[#a5fc29] transition-colors">{proj.name}</h3>
                 <div className="flex flex-wrap gap-2 mb-4">
                    {proj.tech.split(' / ').map(t => (
                       <span key={t} className="bg-[#a5fc29] text-[#370139] px-2 py-0.5 text-xs font-bold rounded-sm">{t.trim()}</span>
                    ))}
                 </div>
                 <p className="text-gray-300 mb-6 max-w-2xl">{proj.desc}</p>
                 <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                    <div className="text-xs font-mono text-[#a5fc29] flex items-center gap-2">
                       <Maximize2 size={12}/> {proj.stat}
                    </div>
                 </div>
              </div>
           </div>
        </TechBorder>
      ))}
    </div>
  </div>
);

export default Projects;