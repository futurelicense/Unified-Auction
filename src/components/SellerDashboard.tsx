import React from 'react';
import MetricsCard from './MetricsCard';
import { DollarSignIcon, TagIcon, UsersIcon, PercentIcon, BarChartIcon, ShoppingBagIcon } from 'lucide-react';
const SellerDashboard = () => {
  const activeAuctions = [{
    id: 1,
    item: 'Vintage Record Player',
    currentBid: '$180.00',
    endTime: '6h 23m',
    bidders: 8
  }, {
    id: 2,
    item: 'Antique Desk',
    currentBid: '$450.00',
    endTime: '1d 12h',
    bidders: 12
  }, {
    id: 3,
    item: 'Rare Book Collection',
    currentBid: '$320.00',
    endTime: '2d 8h',
    bidders: 5
  }, {
    id: 4,
    item: 'Mid-Century Lamp',
    currentBid: '$95.00',
    endTime: '3d 5h',
    bidders: 3
  }];
  const categoryPerformance = [{
    category: 'Electronics',
    items: 12,
    revenue: '$2,450',
    avgBid: '$204'
  }, {
    category: 'Furniture',
    items: 8,
    revenue: '$3,200',
    avgBid: '$400'
  }, {
    category: 'Collectibles',
    items: 15,
    revenue: '$1,875',
    avgBid: '$125'
  }, {
    category: 'Art',
    items: 6,
    revenue: '$2,100',
    avgBid: '$350'
  }];
  return <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Seller Dashboard</h2>
      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricsCard title="Total Revenue" value="$9,625" icon={<DollarSignIcon className="h-5 w-5" />} trend="up" trendValue="12% increase" color="green" />
        <MetricsCard title="Active Auctions" value="18" icon={<TagIcon className="h-5 w-5" />} trend="up" trendValue="3 more than last week" color="blue" />
        <MetricsCard title="Total Bidders" value="126" icon={<UsersIcon className="h-5 w-5" />} trend="up" trendValue="24 more than last month" color="purple" />
        <MetricsCard title="Success Rate" value="92%" icon={<PercentIcon className="h-5 w-5" />} trend="up" trendValue="5% increase" color="amber" />
      </div>
      {/* Active Auctions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
          <h3 className="font-semibold text-gray-800">Active Auctions</h3>
          <button className="text-sm text-green-600 font-medium hover:text-green-700">
            View All
          </button>
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
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {activeAuctions.map(auction => <tr key={auction.id}>
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
                    <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                      Manage
                    </button>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
      {/* Analytics and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Category Performance */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="px-6 py-4 border-b border-gray-100">
            <h3 className="font-semibold text-gray-800">
              Category Performance
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {categoryPerformance.map((category, index) => <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded-lg mr-4">
                      <BarChartIcon className="h-5 w-5 text-gray-500" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">
                        {category.category}
                      </p>
                      <p className="text-sm text-gray-500">
                        {category.items} items
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-800">
                      {category.revenue}
                    </p>
                    <p className="text-sm text-gray-500">
                      Avg: {category.avgBid}
                    </p>
                  </div>
                </div>)}
            </div>
            <button className="mt-6 w-full py-2 text-sm text-green-600 font-medium hover:text-green-700">
              View Full Analytics
            </button>
          </div>
        </div>
        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="px-6 py-4 border-b border-gray-100">
            <h3 className="font-semibold text-gray-800">Recent Activity</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-lg mr-4">
                  <DollarSignIcon className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Auction Completed</p>
                  <p className="text-sm text-gray-500">
                    Vintage Camera sold for $320
                  </p>
                  <p className="text-xs text-gray-400">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <UsersIcon className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">New Bid Received</p>
                  <p className="text-sm text-gray-500">$450 on Antique Desk</p>
                  <p className="text-xs text-gray-400">4 hours ago</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-purple-100 p-2 rounded-lg mr-4">
                  <TagIcon className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">
                    New Auction Created
                  </p>
                  <p className="text-sm text-gray-500">
                    Mid-Century Lamp listed at $75
                  </p>
                  <p className="text-xs text-gray-400">1 day ago</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-amber-100 p-2 rounded-lg mr-4">
                  <ShoppingBagIcon className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Item Shipped</p>
                  <p className="text-sm text-gray-500">
                    Collectible Coins to John D.
                  </p>
                  <p className="text-xs text-gray-400">2 days ago</p>
                </div>
              </div>
            </div>
            <button className="mt-6 w-full py-2 text-sm text-green-600 font-medium hover:text-green-700">
              View All Activity
            </button>
          </div>
        </div>
      </div>
    </div>;
};
export default SellerDashboard;