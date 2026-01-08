import React from 'react';
import { X, Zap, Code, ExternalLink, Image as ImageIcon } from 'lucide-react';

const DetailModal = ({ isOpen, onClose, data, type }) => {
  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
       <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
       
       <div className="relative w-full max-w-2xl bg-[#2a012b] border border-[#a5fc29] shadow-[0_0_50px_rgba(165,252,41,0.2)] animate-in zoom-in-95 duration-200 p-1 flex flex-col max-h-[90vh]">
          {/* Header */}
          <div className="bg-[#a5fc29] p-2 flex justify-between items-center mb-1 flex-shrink-0">
             <div className="text-[#370139] font-black uppercase text-sm tracking-widest flex items-center gap-2">
               <Zap size={16} fill="currentColor" /> SYSTEM_MSG: {type}_DETAILS
             </div>
             <button onClick={onClose} className="text-[#370139] hover:bg-black/10 p-1 cursor-pointer">
               <X size={20} />
             </button>
          </div>

          <div className="p-6 md:p-8 overflow-y-auto">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-2 uppercase leading-none">{data.title || data.name}</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                 {data.tech && data.tech.split(' / ').map((t, i) => (
                    <span key={i} className="bg-[#370139] border border-[#a5fc29] text-[#a5fc29] px-2 py-1 text-xs font-mono">{t.trim()}</span>
                 ))}
                 {data.client && <span className="bg-[#370139] border border-[#a5fc29] text-[#a5fc29] px-2 py-1 text-xs font-mono">CLIENT: {data.client}</span>}
                 {data.year && <span className="bg-[#370139] border border-[#a5fc29] text-[#a5fc29] px-2 py-1 text-xs font-mono">YEAR: {data.year}</span>}
              </div>

              {/* IMAGE DISPLAY LOGIC */}
              {type === 'DESIGN' && (
                data.img ? (
                  <div className="w-full flex justify-center mb-6">
                     <img 
                        src={data.img} 
                        alt={data.title} 
                        className="max-w-full max-h-[50vh] border-4 border-[#a5fc29] shadow-[0_0_20px_rgba(165,252,41,0.3)] object-contain bg-black" 
                      />
                  </div>
                ) : (
                  <div className="w-full bg-black/40 border border-[#a5fc29]/20 mb-6 flex items-center justify-center relative overflow-hidden group min-h-[200px]">
                      <div className="h-48 w-full flex items-center justify-center relative">
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `repeating-linear-gradient(45deg, #a5fc29 0, #a5fc29 1px, transparent 0, transparent 50%)`, backgroundSize: '10px 10px' }} />
                        <ImageIcon size={64} className="text-[#a5fc29] opacity-50" />
                      </div>
                  </div>
                )
              )}

              <p className="text-gray-300 leading-relaxed font-light text-lg mb-6">
                {data.details || data.desc}
              </p>

              <div className="flex flex-col md:flex-row justify-end pt-4 border-t border-[#a5fc29]/20 gap-4 mt-auto">
                 {/* Project Link */}
                 {type === 'PROJECT' && data.srcLink && (
                   <a 
                     href={data.srcLink} 
                     target="_blank" 
                     rel="noreferrer"
                     className="px-6 py-2 border border-[#a5fc29] text-[#a5fc29] font-bold hover:bg-[#a5fc29]/10 transition-colors cursor-pointer flex items-center justify-center gap-2"
                   >
                      <Code size={16} /> VIEW PROJECT
                   </a>
                 )}
                 
                 {/* Spotify Link */}
                 {type === 'DESIGN' && data.spotifyLink && (
                   <a 
                     href={data.spotifyLink} 
                     target="_blank" 
                     rel="noreferrer"
                     className="px-6 py-2 border border-[#a5fc29] text-[#a5fc29] font-bold hover:bg-[#a5fc29]/10 transition-colors cursor-pointer flex items-center justify-center gap-2"
                   >
                      <ExternalLink size={16} /> OPEN IN SPOTIFY
                   </a>
                 )}
                 
                 <button onClick={onClose} className="px-6 py-2 bg-[#a5fc29] text-[#370139] font-bold hover:bg-white transition-colors cursor-pointer">
                    CLOSE_TERMINAL
                 </button>
              </div>
          </div>
       </div>
    </div>
  );
};

export default DetailModal;