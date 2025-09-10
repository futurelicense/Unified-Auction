import React from 'react';
import { ArchiveIcon } from 'lucide-react';
const CompletedAuctions = () => {
  const completedAuctions = [{
    id: 1,
    item: 'Vintage Camera',
    finalBid: '$320.00',
    endDate: 'May 15, 2023',
    bidders: 12,
    winner: 'JaneD',
    status: 'sold'
  }, {
    id: 2,
    item: 'Antique Clock',
    finalBid: '$275.00',
    endDate: 'May 10, 2023',
    bidders: 8,
    winner: 'CollectorX',
    status: 'sold'
  }, {
    id: 3,
    item: 'Mid-Century Chair',
    finalBid: '$0.00',
    endDate: 'May 8, 2023',
    bidders: 0,
    winner: '-',
    status: 'expired'
  }, {
    id: 4,
    item: 'Rare Vinyl Records',
    finalBid: '$190.00',
    endDate: 'May 1, 2023',
    bidders: 5,
    winner: 'MusicLover',
    status: 'sold'
  }, {
    id: 5,
    item: 'Antique Vase',
    finalBid: '$0.00',
    endDate: 'April 25, 2023',
    bidders: 2,
    winner: '-',
    status: 'reserve not met'
  }];
  return <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Completed Auctions</h2>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center">
          <ArchiveIcon className="h-5 w-5 text-green-600 mr-2" />
          <h3 className="font-semibold text-gray-800">Past Auctions</h3>
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
                  End Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Bidders
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Winner
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
              {completedAuctions.map(auction => <tr key={auction.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-800">
                      {auction.item}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-800">
                      {auction.finalBid === '$0.00' ? '-' : auction.finalBid}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-800">{auction.endDate}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-800">{auction.bidders}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-800">{auction.winner}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${auction.status === 'sold' ? 'bg-green-100 text-green-800' : auction.status === 'expired' ? 'bg-gray-100 text-gray-800' : 'bg-red-100 text-red-800'}`}>
                      {auction.status === 'sold' ? 'Sold' : auction.status === 'expired' ? 'Expired' : 'Reserve Not Met'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                      View Details
                    </button>
                    {auction.status !== 'sold' && <button className="ml-3 text-blue-600 hover:text-blue-700 font-medium text-sm">
                        Relist
                      </button>}
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};
export default CompletedAuctions;