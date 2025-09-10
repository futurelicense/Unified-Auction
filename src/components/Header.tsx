import React from 'react';
import { BellIcon, UserIcon, SearchIcon } from 'lucide-react';
const Header = () => {
  return <header className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="text-xl font-semibold text-gray-800">
          AuctionHub Dashboard
        </h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input type="text" placeholder="Search..." className="py-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
          <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <BellIcon className="h-6 w-6 text-gray-600" />
        </button>
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
            <UserIcon className="h-6 w-6 text-white" />
          </div>
          <span className="hidden md:inline text-sm font-medium">John Doe</span>
        </div>
      </div>
    </header>;
};
export default Header;