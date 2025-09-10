import React from 'react';
import { TagIcon } from 'lucide-react';
const MyBids = () => {
  const bids = [{
    id: 1,
    item: 'Vintage Camera',
    amount: '$120.00',
    currentBid: '$120.00',
    endTime: '2h 45m',
    time: '2 hours ago',
    status: 'leading'
  }, {
    id: 2,
    item: 'Antique Watch',
    amount: '$350.00',
    currentBid: '$380.00',
    endTime: '5h 15m',
    time: '5 hours ago',
    status: 'outbid'
  }, {
    id: 3,
    item: 'Art Deco Lamp',
    amount: '$75.00',
    currentBid: '$75.00',
    endTime: '5h 30m',
    time: '1 day ago',
    status: 'leading'
  }, {
    id: 4,
    item: 'Vintage Typewriter',
    amount: '$150.00',
    currentBid: '$160.00',
    endTime: '3d 4h',
    time: '6 hours ago',
    status: 'outbid'
  }];
  return <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">My Bids</h2>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center">
          <TagIcon className="h-5 w-5 text-green-600 mr-2" />
          <h3 className="font-semibold text-gray-800">Active Bids</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Item
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Your Bid
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Current Bid
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time Left
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Bid Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {bids.map(bid => <tr key={bid.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-800">{bid.item}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-800">{bid.amount}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-800">{bid.currentBid}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-800">{bid.endTime}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-500">{bid.time}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${bid.status === 'leading' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {bid.status === 'leading' ? 'Leading' : 'Outbid'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                      {bid.status === 'leading' ? 'View' : 'Increase Bid'}
                    </button>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};
export default MyBids;