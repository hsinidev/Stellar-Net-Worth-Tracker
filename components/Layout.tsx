import React, { useState, useCallback, PropsWithChildren } from 'react';
import { AboutIcon, ContactIcon, DmcaIcon, GuideIcon, PrivacyIcon, TermsIcon } from './Icons';

type ModalType = 'About' | 'Contact' | 'Guide' | 'Privacy Policy' | 'Terms of Service' | 'DMCA' | null;

const Starfield: React.FC = () => (
  <div className="fixed top-0 left-0 w-full h-full -z-50 overflow-hidden bg-space-dark">
    <div id="stars1" className="star-layer"></div>
    <div id="stars2" className="star-layer"></div>
    <div id="stars3" className="star-layer"></div>
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-accent-cyan/10 via-transparent to-accent-magenta/10 opacity-70 animate-pulse-slow"></div>
    <style>{`
      @keyframes move-twinkle-back { from { background-position: 0 0; } to { background-position: -10000px 5000px; } }
      .star-layer {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: transparent;
        background-repeat: repeat;
        background-size: cover;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        animation-name: move-twinkle-back;
      }
      #stars1 {
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><circle fill="white" opacity="0.8" cx="1" cy="1" r="0.5"/><circle fill="white" opacity="0.8" cx="5" cy="8" r="0.3"/><circle fill="white" opacity="0.8" cx="8" cy="3" r="0.4"/></svg>');
        background-size: 250px 250px;
        animation-duration: 200s;
      }
      #stars2 {
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><circle fill="white" opacity="0.8" cx="3" cy="7" r="0.6"/><circle fill="white" opacity="0.8" cx="9" cy="2" r="0.2"/><circle fill="white" opacity="0.8" cx="6" cy="4" r="0.5"/></svg>');
        background-size: 500px 500px;
        animation-duration: 150s;
      }
      #stars3 {
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><circle fill="white" opacity="0.8" cx="2" cy="2" r="0.8"/><circle fill="white" opacity="0.8" cx="7" cy="9" r="0.4"/></svg>');
        background-size: 1000px 1000px;
        animation-duration: 100s;
      }
    `}</style>
  </div>
);


const Header: React.FC<{ onModalOpen: (type: ModalType) => void }> = ({ onModalOpen }) => {
    const navItems = [
        { name: 'About', icon: <AboutIcon />, type: 'About' as ModalType },
        { name: 'Contact', icon: <ContactIcon />, type: 'Contact' as ModalType },
        { name: 'Guide', icon: <GuideIcon />, type: 'Guide' as ModalType },
        { name: 'Privacy Policy', icon: <PrivacyIcon />, type: 'Privacy Policy' as ModalType },
        { name: 'Terms of Service', icon: <TermsIcon />, type: 'Terms of Service' as ModalType },
        { name: 'DMCA', icon: <DmcaIcon />, type: 'DMCA' as ModalType },
    ];
    return (
        <header className="bg-space-light/50 backdrop-blur-sm sticky top-0 z-40 shadow-lg shadow-black/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <span className="font-bold text-xl text-accent-cyan">StellarNetWorth</span>
                    </div>
                    <nav className="hidden md:flex md:space-x-4">
                        {navItems.map(item => (
                            <button key={item.name} onClick={() => onModalOpen(item.type)} className="text-gray-300 hover:bg-space-light hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                {item.name}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
             <nav className="md:hidden flex flex-wrap justify-center p-2 gap-2 bg-space-light">
                {navItems.map(item => (
                    <button key={item.name} onClick={() => onModalOpen(item.type)} className="text-gray-300 hover:bg-space-dark hover:text-white px-3 py-2 rounded-md text-xs font-medium transition-colors flex flex-col items-center">
                       {item.icon}
                       <span className="mt-1">{item.name}</span>
                    </button>
                ))}
            </nav>
        </header>
    );
};

const Footer: React.FC = () => (
    <footer className="bg-space-light/50 backdrop-blur-sm mt-auto py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
            <p>
                Powered by <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="text-gold font-bold hover:underline">HSINI MOHAMED</a>
            </p>
            <p className="text-sm">Contact: <a href="http://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan">doodax.com</a> | <a href="mailto:hsini.web@gmail.com" className="hover:text-accent-magenta">hsini.web@gmail.com</a></p>
        </div>
    </footer>
);

const Modal: React.FC<{ title: string; onClose: () => void; children: React.ReactNode }> = ({ title, onClose, children }) => (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4 animate-fade-in" onClick={onClose}>
        <div className="bg-space-light border border-accent-cyan/50 rounded-lg shadow-2xl shadow-accent-cyan/20 w-full max-w-2xl max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center p-4 border-b border-gray-700 sticky top-0 bg-space-light z-10">
                <h3 className="text-lg font-bold text-accent-cyan">{title}</h3>
                <button onClick={onClose} className="text-gray-400 hover:text-white">&times;</button>
            </div>
            <div className="p-6 text-gray-300">
                {children}
            </div>
        </div>
    </div>
);


const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const [activeModal, setActiveModal] = useState<ModalType>(null);

    const handleModalOpen = useCallback((type: ModalType) => {
        setActiveModal(type);
    }, []);

    const handleModalClose = useCallback(() => {
        setActiveModal(null);
    }, []);
    
    const getModalContent = (type: ModalType) => {
        switch (type) {
            case 'About': return <p>This Net Worth Tracker is a tool designed to help you securely monitor your financial health. Built with React, Tailwind CSS, and a simulated Firebase backend.</p>;
            case 'Contact': return <p>For inquiries, please reach out to hsini.web@gmail.com or visit doodax.com.</p>;
            case 'Guide': return <p>To use the tracker, add your assets (e.g., savings, investments) and liabilities (e.g., loans, debts). Your net worth is calculated automatically. Data is private and segmented by user ID.</p>;
            case 'Privacy Policy': return <p>Your data privacy is paramount. All data is stored securely and associated only with an anonymous user ID. We do not collect or share personal information.</p>;
            case 'Terms of Service': return <p>This service is provided as-is. By using this tool, you agree to take full responsibility for the financial data you enter and the decisions you make.</p>;
            case 'DMCA': return <p>If you believe any content infringes upon your copyright, please contact us with the necessary details for its removal.</p>;
            default: return null;
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-space-dark font-sans relative">
            <Starfield />
            <Header onModalOpen={handleModalOpen} />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
            {activeModal && (
                <Modal title={activeModal} onClose={handleModalClose}>
                    {getModalContent(activeModal)}
                </Modal>
            )}
        </div>
    );
};

export default Layout;