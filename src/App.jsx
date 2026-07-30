import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Profile from './pages/Profile';
import Instructions from './pages/Instructions';
import Support from './pages/Support';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home navigateTo={setCurrentPage} />;
      case 'pricing':
        return <Pricing />;
      case 'profile':
        return <Profile navigateTo={setCurrentPage} />;
      case 'instructions':
        return <Instructions />;
      case 'support':
        return <Support />;
      default:
        return <Home navigateTo={setCurrentPage} />;
    }
  };

  return (
    <div className="app-container">
      {renderPage()}
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}
