import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import Dashboard from './components/Dashboard';
import UnifiedDashboard from './components/UnifiedDashboard';
import ActiveAuctions from './pages/ActiveAuctions';
import MyBids from './pages/MyBids';
import Watchlist from './pages/Watchlist';
import WonAuctions from './pages/WonAuctions';
import CompletedAuctions from './pages/CompletedAuctions';
import Orders from './pages/Orders';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
export function AppRouter() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<UnifiedDashboard />} />
          <Route path="active-auctions" element={<ActiveAuctions />} />
          <Route path="my-bids" element={<MyBids />} />
          <Route path="watchlist" element={<Watchlist />} />
          <Route path="won-auctions" element={<WonAuctions />} />
          <Route path="completed-auctions" element={<CompletedAuctions />} />
          <Route path="orders" element={<Orders />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>;
}