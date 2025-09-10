import React from 'react';
import { BarChartIcon, DollarSignIcon, TrendingUpIcon, UsersIcon } from 'lucide-react';
import MetricsCard from '../components/MetricsCard';
const Analytics = () => {
  const categoryPerformance = [{
    category: 'Electronics',
    items: 12,
    revenue: '$2,450',
    avgBid: '$204',
    growth: '+15%'
  }, {
    category: 'Furniture',
    items: 8,
    revenue: '$3,200',
    avgBid: '$400',
    growth: '+8%'
  }, {
    category: 'Collectibles',
    items: 15,
    revenue: '$1,875',
    avgBid: '$125',
    growth: '+23%'
  }, {
    category: 'Art',
    items: 6,
    revenue: '$2,100',
    avgBid: '$350',
    growth: '+5%'
  }, {
    category: 'Jewelry',
    items: 10,
    revenue: '$4,200',
    avgBid: '$420',
    growth: '+18%'
  }, {
    category: 'Books',
    items: 14,
    revenue: '$1,400',
    avgBid: '$100',
    growth: '+12%'
  }];
  const monthlyData = [{
    month: 'Jan',
    revenue: 5200,
    auctions: 18
  }, {
    month: 'Feb',
    revenue: 6100,
    auctions: 22
  }, {
    month: 'Mar',
    revenue: 7800,
    auctions: 25
  }, {
    month: 'Apr',
    revenue: 8900,
    auctions: 30
  }, {
    month: 'May',
    revenue: 9625,
    auctions: 28
  }];
  return <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Analytics & Reports</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricsCard title="Total Revenue" value="$9,625" icon={<DollarSignIcon className="h-5 w-5" />} trend="up" trendValue="12% increase" color="green" />
        <MetricsCard title="Active Auctions" value="18" icon={<BarChartIcon className="h-5 w-5" />} trend="up" trendValue="3 more than last week" color="blue" />
        <MetricsCard title="Total Bidders" value="126" icon={<UsersIcon className="h-5 w-5" />} trend="up" trendValue="24 more than last month" color="purple" />
        <MetricsCard title="Average Sale Price" value="$325" icon={<TrendingUpIcon className="h-5 w-5" />} trend="up" trendValue="$25 increase" color="amber" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center">
            <BarChartIcon className="h-5 w-5 text-green-600 mr-2" />
            <h3 className="font-semibold text-gray-800">Monthly Revenue</h3>
          </div>
          <div className="p-6 h-80 flex items-center justify-center">
            <div className="w-full h-full flex items-end justify-between space-x-2 px-4">
              {monthlyData.map(data => <div key={data.month} className="flex flex-col items-center">
                  <div className="bg-green-500 w-12 rounded-t-md" style={{
                height: `${data.revenue / 10000 * 100}%`,
                maxHeight: '90%',
                minHeight: '20%'
              }}></div>
                  <div className="mt-2 text-xs font-medium text-gray-600">
                    {data.month}
                  </div>
                  <div className="text-xs text-gray-500">
                    ${(data.revenue / 1000).toFixed(1)}k
                  </div>
                </div>)}
            </div>
          </div>
        </div>
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
                      <span className="ml-2 text-xs text-green-500">
                        {category.growth}
                      </span>
                    </p>
                    <p className="text-sm text-gray-500">
                      Avg: {category.avgBid}
                    </p>
                  </div>
                </div>)}
            </div>
            <button className="mt-6 w-full py-2 text-sm text-green-600 font-medium hover:text-green-700">
              Download Full Report
            </button>
          </div>
        </div>
      </div>
    </div>;
};
export default Analytics;