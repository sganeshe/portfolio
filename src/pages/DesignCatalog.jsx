import React from 'react';
import { Image as ImageIcon, PenTool, Palette, MoveUpRight } from 'lucide-react';
import TechBorder from '../components/TechBorder';
import SectionTitle from '../components/SectionTitle';
import { DATA } from '../data/data';

const DesignCatalog = ({ openModal }) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
    <SectionTitle title="Visual DB" sub="DESIGN_CATALOG" />
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       {DATA.designCatalog.map((item, i) => (
          <TechBorder key={i} className="flex flex-col p-0 hover:bg-[#a5fc29]/5 transition-colors group cursor-pointer h-64" onClick={() => openModal({ type: 'DESIGN', data: item })}>
             <div className="flex-1 relative overflow-hidden bg-black/20 flex items-center justify-center border-b border-[#a5fc29]/10">
                 
                 {/* LOGIC: Show Image if it exists, otherwise show Icon/Gradient */}
                 {item.img ? (
                    <>
                      <div className="absolute inset-0 bg-[#a5fc29]/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 grayscale group-hover:grayscale-0"
                      />
                    </>
                 ) : (
                    <>
                      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, #a5fc29 10px, #a5fc29 11px)` }}></div>
                      <div className="relative z-10 text-[#a5fc29] opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                          {item.type === 'COVER ART' && <ImageIcon size={48} />}
                          {item.type === 'IDENTITY' && <PenTool size={48} />}
                          {['SOCIALS', 'PRINT', 'APPAREL', 'LARGE FORMAT'].includes(item.type) && <Palette size={48} />}
                      </div>
                    </>
                 )}

                 <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    <MoveUpRight className="text-[#a5fc29] drop-shadow-md" />
                 </div>
             </div>
             
             {/* Text Details */}
             <div className="p-4 bg-[#370139]/90 backdrop-blur border-t border-[#a5fc29]/20">
                <div className="flex justify-between items-start mb-1">
                   <h4 className="text-white font-bold uppercase truncate group-hover:text-[#a5fc29] transition-colors">{item.title}</h4>
                   <span className="text-[10px] font-mono text-gray-500">{item.year}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                   <span className="text-[#a5fc29] font-mono">{item.client}</span>
                   <span className="text-gray-500 border border-gray-700 px-1">{item.type}</span>
                </div>
             </div>
          </TechBorder>
       ))}
    </div>
  </div>
);

export default DesignCatalog;