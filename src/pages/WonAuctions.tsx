import React from 'react';
import { TrophyIcon, ShoppingBagIcon } from 'lucide-react';
const WonAuctions = () => {
  const wonItems = [{
    id: 1,
    item: 'Collectible Coins',
    finalBid: '$220.00',
    wonDate: 'May 15, 2023',
    status: 'Payment Pending'
  }, {
    id: 2,
    item: 'Vintage Camera Set',
    finalBid: '$320.00',
    wonDate: 'May 10, 2023',
    status: 'Paid, Shipping Soon'
  }, {
    id: 3,
    item: 'Antique Pocket Watch',
    finalBid: '$175.00',
    wonDate: 'May 5, 2023',
    status: 'Shipped'
  }, {
    id: 4,
    item: 'First Edition Book',
    finalBid: '$450.00',
    wonDate: 'April 28, 2023',
    status: 'Delivered'
  }];
  return <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Won Auctions</h2>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center">
          <TrophyIcon className="h-5 w-5 text-green-600 mr-2" />
          <h3 className="font-semibold text-gray-800">Your Won Items</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Item
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Final Bid
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Won Date
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
              {wonItems.map(item => <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-800">{item.item}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-800">{item.finalBid}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-800">{item.wonDate}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${item.status.includes('Payment Pending') ? 'bg-yellow-100 text-yellow-800' : item.status.includes('Paid') ? 'bg-blue-100 text-blue-800' : item.status.includes('Shipped') ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-green-600 hover:text-green-700 font-medium text-sm mr-3">
                      {item.status.includes('Payment Pending') ? 'Pay Now' : 'View Details'}
                    </button>
                    {!item.status.includes('Payment Pending') && <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                        <ShoppingBagIcon className="h-4 w-4 inline mr-1" />
                        Track
                      </button>}
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};
export default WonAuctions;