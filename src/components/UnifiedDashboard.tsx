import React from 'react';
import MetricsCard from './MetricsCard';
import { DollarSignIcon, TagIcon, UsersIcon, PercentIcon, BarChartIcon, ShoppingBagIcon, GavelIcon, EyeIcon, TrophyIcon, ClockIcon } from 'lucide-react';
const UnifiedDashboard = () => {
  // Combined auction data
  const auctions = [{
    id: 1,
    item: 'Vintage Record Player',
    currentBid: '$180.00',
    endTime: '6h 23m',
    bidders: 8,
    status: 'selling' // selling or bidding
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
  }];
  // Recent activity from both roles
  const recentActivity = [{
    id: 1,
    type: 'bid',
    title: 'Placed Bid',
    description: '$120.00 on Vintage Camera',
    time: '2 hours ago',
    icon: <GavelIcon className="h-5 w-5 text-blue-600" />,
    bgColor: 'bg-blue-100'
  }, {
    id: 2,
    type: 'sale',
    title: 'Auction Completed',
    description: 'Vintage Camera sold for $320',
    time: '3 hours ago',
    icon: <DollarSignIcon className="h-5 w-5 text-green-600" />,
    bgColor: 'bg-green-100'
  }, {
    id: 3,
    type: 'watch',
    title: 'Added to Watchlist',
    description: 'Antique Desk at $450',
    time: '5 hours ago',
    icon: <EyeIcon className="h-5 w-5 text-purple-600" />,
    bgColor: 'bg-purple-100'
  }, {
    id: 4,
    type: 'listing',
    title: 'New Auction Created',
    description: 'Mid-Century Lamp listed at $75',
    time: '1 day ago',
    icon: <TagIcon className="h-5 w-5 text-amber-600" />,
    bgColor: 'bg-amber-100'
  }];
  // Category performance data
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
      <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricsCard title="Active Auctions" value="18" icon={<TagIcon className="h-5 w-5" />} trend="up" trendValue="3 more than last week" color="green" />
        <MetricsCard title="Total Revenue" value="$9,625" icon={<DollarSignIcon className="h-5 w-5" />} trend="up" trendValue="12% increase" color="blue" />
        <MetricsCard title="Won Auctions" value="8" icon={<TrophyIcon className="h-5 w-5" />} trend="up" trendValue="2 more than last month" color="purple" />
        <MetricsCard title="Success Rate" value="78%" icon={<PercentIcon className="h-5 w-5" />} trend="up" trendValue="5% increase" color="amber" />
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
      {/* Analytics and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="px-6 py-4 border-b border-gray-100">
            <h3 className="font-semibold text-gray-800">Recent Activity</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentActivity.map(activity => <div key={activity.id} className="flex items-center">
                  <div className={`${activity.bgColor} p-2 rounded-lg mr-4`}>
                    {activity.icon}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      {activity.title}
                    </p>
                    <p className="text-sm text-gray-500">
                      {activity.description}
                    </p>
                    <p className="text-xs text-gray-400">{activity.time}</p>
                  </div>
                </div>)}
            </div>
            <button className="mt-6 w-full py-2 text-sm text-green-600 font-medium hover:text-green-700">
              View All Activity
            </button>
          </div>
        </div>
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
      </div>
    </div>;
};
export default UnifiedDashboard;