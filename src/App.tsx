import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
export function App() {
  return <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>;
}