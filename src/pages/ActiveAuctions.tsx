import React from 'react';
import { GavelIcon } from 'lucide-react';
const ActiveAuctions = () => {
  const auctions = [{
    id: 1,
    item: 'Vintage Record Player',
    currentBid: '$180.00',
    endTime: '6h 23m',
    bidders: 8,
    status: 'selling'
  }, {
    id: 2,
    item: 'Antique Desk',
    currentBid: '$450.00',
    endTime: '1d 12h',
    bidders: 12,
    status: 'selling'
  }, {
    id: 3,
    item: 'Vintage Camera',
    currentBid: '$120.00',
    endTime: '2h 45m',
    bidders: 5,
    status: 'bidding'
  }, {
    id: 4,
    item: 'Art Deco Lamp',
    currentBid: '$75.00',
    endTime: '5h 30m',
    bidders: 3,
    status: 'bidding'
  }, {
    id: 5,
    item: 'Rare Book Collection',
    currentBid: '$320.00',
    endTime: '2d 8h',
    bidders: 5,
    status: 'selling'
  }, {
    id: 6,
    item: 'Vintage Typewriter',
    currentBid: '$150.00',
    endTime: '3d 4h',
    bidders: 7,
    status: 'bidding'
  }];
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Active Auctions</h2>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
          Create New Auction
        </button>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center">
          <GavelIcon className="h-5 w-5 text-green-600 mr-2" />
          <h3 className="font-semibold text-gray-800">All Active Auctions</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Item
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Current Bid
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time Left
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Bidders
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {auctions.map(auction => <tr key={auction.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-800">
                      {auction.item}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-800">{auction.currentBid}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-800">{auction.endTime}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-800">{auction.bidders}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${auction.status === 'selling' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                      {auction.status === 'selling' ? 'Selling' : 'Bidding'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                      {auction.status === 'selling' ? 'Manage' : 'Bid'}
                    </button>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};
export default ActiveAuctions;