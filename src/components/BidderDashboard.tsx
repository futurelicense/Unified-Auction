import React from 'react';
import MetricsCard from './MetricsCard';
import { GavelIcon, EyeIcon, TrophyIcon, PercentIcon, ClockIcon, DollarSignIcon } from 'lucide-react';
const BidderDashboard = () => {
  const recentBids = [{
    id: 1,
    item: 'Vintage Camera',
    amount: '$120.00',
    time: '2 hours ago',
    status: 'leading'
  }, {
    id: 2,
    item: 'Antique Watch',
    amount: '$350.00',
    time: '5 hours ago',
    status: 'outbid'
  }, {
    id: 3,
    item: 'Art Deco Lamp',
    amount: '$75.00',
    time: '1 day ago',
    status: 'leading'
  }, {
    id: 4,
    item: 'Collectible Coins',
    amount: '$220.00',
    time: '2 days ago',
    status: 'won'
  }];
  const watchingItems = [{
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
  }];
  return <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Bidder Dashboard</h2>
      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricsCard title="Active Bids" value="12" icon={<GavelIcon className="h-5 w-5" />} trend="up" trendValue="3 more than last week" color="green" />
        <MetricsCard title="Watching" value="24" icon={<EyeIcon className="h-5 w-5" />} trend="up" trendValue="5 more than last week" color="blue" />
        <MetricsCard title="Won Auctions" value="8" icon={<TrophyIcon className="h-5 w-5" />} trend="up" trendValue="2 more than last month" color="purple" />
        <MetricsCard title="Success Rate" value="67%" icon={<PercentIcon className="h-5 w-5" />} trend="up" trendValue="5% increase" color="amber" />
      </div>
      {/* Recent Activity and Watching */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Bids */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="px-6 py-4 border-b border-gray-100">
            <h3 className="font-semibold text-gray-800">Recent Bids</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentBids.map(bid => <div key={bid.id} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded-lg mr-4">
                      <GavelIcon className="h-5 w-5 text-gray-500" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{bid.item}</p>
                      <p className="text-sm text-gray-500">{bid.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-800">{bid.amount}</p>
                    <p className={`text-sm ${bid.status === 'leading' ? 'text-green-500' : bid.status === 'outbid' ? 'text-red-500' : 'text-blue-500'}`}>
                      {bid.status === 'leading' ? 'Leading' : bid.status === 'outbid' ? 'Outbid' : 'Won'}
                    </p>
                  </div>
                </div>)}
            </div>
            <button className="mt-6 w-full py-2 text-sm text-green-600 font-medium hover:text-green-700">
              View All Bids
            </button>
          </div>
        </div>
        {/* Watching */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="px-6 py-4 border-b border-gray-100">
            <h3 className="font-semibold text-gray-800">Watching</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {watchingItems.map(item => <div key={item.id} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded-lg mr-4">
                      <ClockIcon className="h-5 w-5 text-gray-500" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{item.item}</p>
                      <p className="text-sm text-gray-500">
                        Ends in: {item.endTime}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-800">
                      {item.currentBid}
                    </p>
                    <p className="text-sm text-gray-500">
                      {item.bidders} bidders
                    </p>
                  </div>
                </div>)}
            </div>
            <button className="mt-6 w-full py-2 text-sm text-green-600 font-medium hover:text-green-700">
              View Watchlist
            </button>
          </div>
        </div>
      </div>
    </div>;
};
export default BidderDashboard;