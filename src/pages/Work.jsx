import React from 'react';
import { Briefcase } from 'lucide-react';
import TechBorder from '../components/TechBorder';
import SectionTitle from '../components/SectionTitle';
import { DATA } from '../data/data';

const Work = () => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-500">
    <SectionTitle title="Work Logs" sub="PROFESSIONAL_HISTORY" />
    <div className="relative border-l-2 border-[#a5fc29]/30 ml-4 md:ml-8 space-y-12">
       {DATA.experience.map((exp, i) => (
          <div key={i} className="relative pl-8 md:pl-12">
             <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#370139] border-2 border-[#a5fc29] rounded-full group-hover:scale-125 transition-transform" />
             <TechBorder className="hover:bg-[#a5fc29]/5 transition-colors">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                   <div>
                      <h3 className="text-2xl font-black text-white uppercase">{exp.role}</h3>
                      <div className="text-[#a5fc29] font-mono text-sm uppercase mt-1 flex items-center gap-2"><Briefcase size={14}/> {exp.org}</div>
                   </div>
                   <div className="mt-2 md:mt-0 px-3 py-1 bg-[#a5fc29]/10 border border-[#a5fc29] text-[#a5fc29] text-xs font-mono font-bold">{exp.time}</div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed max-w-3xl">{exp.desc}</p>
                <div className="flex flex-wrap gap-2">
                   {exp.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold border border-white/20 text-gray-400 px-2 py-1 uppercase tracking-wider">{tag}</span>
                   ))}
                </div>
             </TechBorder>
          </div>
       ))}
    </div>
  </div>
);

export default Work;