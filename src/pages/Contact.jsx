import React from 'react';
import { UserCircle, Mail, Linkedin, Github } from 'lucide-react';
import TechBorder from '../components/TechBorder';
import { DATA } from '../data/data';

const Contact = () => (
  <div className="h-full flex items-center justify-center animate-in zoom-in-95 duration-500">
     <TechBorder className="w-full max-w-2xl p-12 text-center">
        <UserCircle size={64} className="mx-auto text-[#a5fc29] mb-6" />
        <h2 className="text-5xl font-black text-white mb-2 uppercase">Connect</h2>
        <p className="text-gray-400 mb-12 font-mono">ESTABLISH_UPLINK</p>
        
        <div className="grid gap-6">
           <a href={`mailto:${DATA.contact.email}`} className="flex items-center justify-between bg-white/5 border border-white/10 p-6 hover:bg-[#a5fc29] hover:text-[#370139] group transition-all cursor-pointer">
              <span className="flex items-center gap-4 text-xl font-bold"><Mail/> EMAIL</span>
              <span className="font-mono text-sm opacity-50 group-hover:opacity-100">{DATA.contact.email}</span>
           </a>
           
           <div className="grid grid-cols-2 gap-6">
              <a href={DATA.contact.linkedin} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 bg-white/5 border border-white/10 p-6 hover:border-[#0077b5] hover:text-[#0077b5] transition-all cursor-pointer">
                 <Linkedin size={32} />
                 <span className="font-bold">LINKEDIN</span>
              </a>
              <a href={DATA.contact.github} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 bg-white/5 border border-white/10 p-6 hover:border-white hover:text-white transition-all cursor-pointer">
                 <Github size={32} />
                 <span className="font-bold">GITHUB</span>
              </a>
           </div>
        </div>
     </TechBorder>
  </div>
);

export default Contact;