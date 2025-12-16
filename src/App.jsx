import React, { useState } from 'react';
import { LayoutDashboard, FolderGit2, UserCircle, Mail, Briefcase, Palette } from 'lucide-react';

import CustomCursor from './components/CustomCursor';
import NavItem from './components/NavItem';
import DetailModal from './components/DetailModal';

import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Work from './pages/Work';
import DesignCatalog from './pages/DesignCatalog';
import Profile from './pages/Profile';
import Contact from './pages/Contact';

const App = () => {
  const [view, setView] = useState('dashboard');
  const [modal, setModal] = useState({ isOpen: false, data: null, type: null });

  const openModal = ({ type, data }) => {
    setModal({ isOpen: true, data, type });
  };

  const closeModal = () => {
    setModal({ ...modal, isOpen: false });
  };

  return (
    <div className="min-h-screen bg-[#370139] text-white font-sans selection:bg-[#a5fc29] selection:text-[#370139] overflow-x-hidden cursor-none">
      <CustomCursor />
      
      <DetailModal isOpen={modal.isOpen} onClose={closeModal} data={modal.data} type={modal.type} />

      <div className="fixed inset-0 pointer-events-none opacity-20" style={{ backgroundImage: `linear-gradient(#a5fc29 1px, transparent 1px), linear-gradient(to right, #a5fc29 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      
      <div className="md:hidden fixed top-0 w-full bg-[#370139]/90 backdrop-blur border-b border-[#a5fc29]/30 z-50 p-4 flex justify-between items-center cursor-default">
         <div className="font-black text-[#a5fc29] tracking-widest">SG.SYSTEM</div>
         <div className="text-xs font-mono text-[#a5fc29] animate-pulse">ONLINE</div>
      </div>

      <div className="flex min-h-screen pt-16 md:pt-0">
        <nav className="fixed left-0 top-0 h-screen w-64 bg-[#2a012b] border-r border-[#a5fc29]/20 hidden md:flex flex-col z-40">
           <div className="p-8 border-b border-[#a5fc29]/20 cursor-default">
              <h1 className="text-3xl font-black italic tracking-tighter text-white">SG<span className="text-[#a5fc29]">.</span>EXE</h1>
              <div className="text-[10px] font-mono text-gray-500 mt-2 tracking-widest">PORTFOLIO_V2.0</div>
           </div>

           <div className="flex-1 py-8 px-4 overflow-y-auto">
              <div className="text-xs font-bold text-gray-600 mb-4 px-4 uppercase tracking-widest">Main Menu</div>
              <NavItem icon={LayoutDashboard} label="Dashboard" active={view === 'dashboard'} onClick={() => setView('dashboard')} />
              <NavItem icon={FolderGit2} label="Projects" active={view === 'projects'} onClick={() => setView('projects')} />
              <NavItem icon={Palette} label="Design DB" active={view === 'design'} onClick={() => setView('design')} />
              <NavItem icon={Briefcase} label="Work Logs" active={view === 'work'} onClick={() => setView('work')} />
              <NavItem icon={UserCircle} label="Profile" active={view === 'profile'} onClick={() => setView('profile')} />
              <NavItem icon={Mail} label="Contact" active={view === 'contact'} onClick={() => setView('contact')} />
           </div>

           <div className="p-6 border-t border-[#a5fc29]/20 cursor-default">
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 bg-[#a5fc29] rounded-full animate-ping"></div>
                 <span className="text-xs font-mono text-[#a5fc29]">SERVER_ACTIVE</span>
              </div>
           </div>
        </nav>

        <nav className="fixed bottom-0 w-full bg-[#2a012b] border-t border-[#a5fc29]/30 flex md:hidden z-50 justify-around p-2">
           <button onClick={() => setView('dashboard')} className={`p-3 cursor-pointer ${view === 'dashboard' ? 'text-[#a5fc29]' : 'text-gray-500'}`}><LayoutDashboard/></button>
           <button onClick={() => setView('projects')} className={`p-3 cursor-pointer ${view === 'projects' ? 'text-[#a5fc29]' : 'text-gray-500'}`}><FolderGit2/></button>
           <button onClick={() => setView('design')} className={`p-3 cursor-pointer ${view === 'design' ? 'text-[#a5fc29]' : 'text-gray-500'}`}><Palette/></button>
           <button onClick={() => setView('work')} className={`p-3 cursor-pointer ${view === 'work' ? 'text-[#a5fc29]' : 'text-gray-500'}`}><Briefcase/></button>
           <button onClick={() => setView('contact')} className={`p-3 cursor-pointer ${view === 'contact' ? 'text-[#a5fc29]' : 'text-gray-500'}`}><Mail/></button>
        </nav>

        <main className="flex-1 md:ml-64 p-4 md:p-12 relative z-10 pb-20 md:pb-12">
           <div className="max-w-6xl mx-auto h-full">
              {view === 'dashboard' && <Dashboard navigate={setView} openModal={openModal} />}
              {view === 'projects' && <Projects openModal={openModal} />}
              {view === 'work' && <Work />}
              {view === 'design' && <DesignCatalog openModal={openModal} />}
              {view === 'profile' && <Profile />}
              {view === 'contact' && <Contact />}
           </div>
        </main>
      </div>
    </div>
  );
};

export default App;