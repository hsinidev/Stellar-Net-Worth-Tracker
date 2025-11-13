import React, { useState } from 'react';
import Layout from './components/Layout';
import TrackerDashboard from './components/TrackerDashboard';
import SeoArticle from './components/SeoArticle';
import { ChevronDownIcon } from './components/Icons';

const App: React.FC = () => {
  const [isArticleOpen, setIsArticleOpen] = useState(false);

  return (
    <Layout>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-white">
        
        <TrackerDashboard />
        
        <div className="mt-12 bg-space-light/50 backdrop-blur-sm rounded-lg shadow-2xl shadow-accent-magenta/10">
          <button
            onClick={() => setIsArticleOpen(!isArticleOpen)}
            className="w-full flex justify-between items-center p-4 sm:p-6 text-left transition-colors hover:bg-space-light/50"
            aria-expanded={isArticleOpen}
            aria-controls="financial-guide-content"
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-accent-magenta">Financial Health Guide</h2>
              {!isArticleOpen && <p className="text-gray-400 mt-1 max-w-4xl">A deep dive into personal financial health, goal setting, and secure data tracking. Click to read more...</p>}
            </div>
            <ChevronDownIcon className={`w-6 h-6 transform transition-transform duration-300 ${isArticleOpen ? 'rotate-180' : ''}`} />
          </button>
          <div 
            id="financial-guide-content"
            className={`transition-all duration-700 ease-in-out overflow-hidden ${isArticleOpen ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <div className="border-t border-accent-magenta/20">
              <SeoArticle />
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default App;
