import React from 'react';
import TechBorder from '../components/TechBorder';
import SectionTitle from '../components/SectionTitle';
import { DATA } from '../data/data';

const Profile = () => (
  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-500">
    <SectionTitle title="Operator" sub="BIO_METRICS" />
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
       <div className="md:col-span-7 space-y-6">
          <TechBorder>
             <h3 className="text-xl font-bold text-[#a5fc29] mb-4 uppercase">Background Protocol</h3>
             <p className="text-white leading-relaxed text-lg mb-6">Currently pursuing B.Tech in Computer Science at RGIPT. My workflow is a hybrid of logical systems engineering and expressive visual design.</p>
             <p className="text-gray-400 leading-relaxed">I specialize in Python-based tool development and Brand Identity design for the entertainment industry. This duality allows me to build functional applications that look exceptional.</p>
          </TechBorder>
          <TechBorder>
             <h3 className="text-xl font-bold text-[#a5fc29] mb-4 uppercase">Education Log</h3>
             <div className="space-y-6">
                <div className="relative pl-6 border-l border-[#a5fc29]">
                   <div className="absolute -left-[5px] top-0 w-2 h-2 bg-[#a5fc29] rounded-full"></div>
                   <div className="text-white font-bold text-lg">RGIPT, Jais</div>
                   <div className="text-gray-400 text-sm">B.Tech CSE</div>
                   <div className="text-[#a5fc29] text-xs font-mono mt-1">2024 - 2028</div>
                </div>
                <div className="relative pl-6 border-l border-[#a5fc29]">
                   <div className="absolute -left-[5px] top-0 w-2 h-2 bg-gray-600 rounded-full"></div>
                   <div className="text-white font-bold text-lg">Navkar Public School</div>
                   <div className="text-gray-400 text-sm">Higher Secondary (GSEB)</div>
                   <div className="text-[#a5fc29] text-xs font-mono mt-1">2024</div>
                </div>
             </div>
          </TechBorder>
       </div>
       <div className="md:col-span-5 space-y-6">
          <TechBorder className="h-full">
             <h3 className="text-xl font-bold text-[#a5fc29] mb-6 uppercase">Arsenal</h3>
             <div className="grid grid-cols-2 gap-3">
                {DATA.skills.map(skill => (
                   <div key={skill} className="bg-white/5 border border-white/10 p-3 text-center text-white hover:border-[#a5fc29] hover:text-[#a5fc29] transition-colors cursor-crosshair">{skill}</div>
                ))}
             </div>
             <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="text-sm font-bold text-white mb-4 uppercase">Soft Skills</h4>
                <div className="flex flex-wrap gap-2">
                   {['Communication', 'Strategy', 'Leadership'].map(s => (
                      <span key={s} className="text-xs font-mono text-gray-400 px-2 py-1 bg-black rounded">{s}</span>
                   ))}
                </div>
             </div>
          </TechBorder>
       </div>
    </div>
  </div>
);

export default Profile;