import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from '../router/AppRouter';
import { LoadingProvider } from '../contexts/LoadingContext';

const MainLayout: React.FC = () => {
  return (
    <LoadingProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <AppRouter />
          </main>
          <Footer />
        </div>
      </Router>
    </LoadingProvider>
  );
};

export default MainLayout;