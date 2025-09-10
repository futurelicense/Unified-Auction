import React from 'react';
import { EyeIcon, ClockIcon } from 'lucide-react';
const Watchlist = () => {
  const watchingItems = [{
    id: 1,
    item: 'Vintage Record Player',
    currentBid: '$180.00',
    endTime: '6h 23m',
    bidders: 8,
    image: 'https://images.unsplash.com/photo-1461360228754-6e81c478b882?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 2,
    item: 'Antique Desk',
    currentBid: '$450.00',
    endTime: '1d 12h',
    bidders: 12,
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 3,
    item: 'Rare Book Collection',
    currentBid: '$320.00',
    endTime: '2d 8h',
    bidders: 5,
    image: 'https://images.unsplash.com/photo-1524578271613-d550eacf6090?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 4,
    item: 'Mid-Century Lamp',
    currentBid: '$95.00',
    endTime: '3d 5h',
    bidders: 3,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }];
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Watchlist</h2>
        <div className="text-sm text-gray-500">
          <span className="font-medium">{watchingItems.length}</span> items
          being watched
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {watchingItems.map(item => <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img src={item.image} alt={item.item} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-2">{item.item}</h3>
              <div className="flex justify-between items-center mb-3">
                <div className="text-sm text-gray-500">Current Bid</div>
                <div className="font-medium text-gray-800">
                  {item.currentBid}
                </div>
              </div>
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center text-sm text-gray-500">
                  <ClockIcon className="h-4 w-4 mr-1" />
                  Ends in
                </div>
                <div className="font-medium text-gray-800">{item.endTime}</div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-gray-500">Bidders</div>
                <div className="font-medium text-gray-800">{item.bidders}</div>
              </div>
              <div className="flex space-x-2">
                <button className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Bid Now
                </button>
                <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <EyeIcon className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </div>
          </div>)}
      </div>
    </div>;
};
export default Watchlist;