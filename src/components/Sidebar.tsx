import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { GavelIcon, EyeIcon, PackageIcon, TrophyIcon, ShoppingBagIcon, TagIcon, ArchiveIcon, BarChartIcon, SettingsIcon, HomeIcon, UserIcon } from 'lucide-react';
const Sidebar = () => {
  const location = useLocation();
  const navigationLinks = [{
    id: 'dashboard',
    name: 'Dashboard',
    path: '/dashboard',
    icon: <HomeIcon className="h-5 w-5" />
  }, {
    id: 'active-auctions',
    name: 'Active Auctions',
    path: '/active-auctions',
    icon: <GavelIcon className="h-5 w-5" />
  }, {
    id: 'my-bids',
    name: 'My Bids',
    path: '/my-bids',
    icon: <TagIcon className="h-5 w-5" />
  }, {
    id: 'watchlist',
    name: 'Watchlist',
    path: '/watchlist',
    icon: <EyeIcon className="h-5 w-5" />
  }, {
    id: 'won-auctions',
    name: 'Won Auctions',
    path: '/won-auctions',
    icon: <TrophyIcon className="h-5 w-5" />
  }, {
    id: 'completed-auctions',
    name: 'Completed Auctions',
    path: '/completed-auctions',
    icon: <ArchiveIcon className="h-5 w-5" />
  }, {
    id: 'orders',
    name: 'Orders & Shipping',
    path: '/orders',
    icon: <ShoppingBagIcon className="h-5 w-5" />
  }, {
    id: 'analytics',
    name: 'Analytics',
    path: '/analytics',
    icon: <BarChartIcon className="h-5 w-5" />
  }, {
    id: 'settings',
    name: 'Settings',
    path: '/settings',
    icon: <SettingsIcon className="h-5 w-5" />
  }];
  return <div className="w-64 bg-white border-r border-gray-200 h-full flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-green-600">AuctionHub</h1>
      </div>
      {/* Navigation Links */}
      <div className="px-4 py-2 flex-1 overflow-y-auto">
        <nav className="space-y-1">
          {navigationLinks.map(link => <NavLink key={link.id} to={link.path} className={({
          isActive
        }) => `flex items-center w-full px-4 py-3 rounded-lg text-left ${isActive ? 'bg-green-50 text-green-600' : 'text-gray-600 hover:bg-gray-100'}`}>
              {link.icon}
              <span className="ml-3 font-medium">{link.name}</span>
            </NavLink>)}
        </nav>
      </div>
      <div className="mt-auto p-4 border-t border-gray-200">
        <div className="flex items-center px-4 py-3">
          <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
            <UserIcon className="h-6 w-6 text-white" />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-800">John Doe</p>
            <p className="text-xs text-gray-500">john.doe@example.com</p>
          </div>
        </div>
      </div>
    </div>;
};
export default Sidebar;