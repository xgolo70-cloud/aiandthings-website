'use client';

import React, { type ReactNode } from 'react';
import Navbar from '../Navbar';
import Footer from './Footer';
import CreativeBackground from '../ui/CreativeBackground';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-white selection:bg-violet-500/30 selection:text-violet-200">
      <CreativeBackground />
      <Navbar />

      <main className="grow">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
