import React from 'react';
import { ShoppingBagIcon, TruckIcon } from 'lucide-react';
const Orders = () => {
  const orders = [{
    id: 'ORD-2023-001',
    item: 'Vintage Camera Set',
    amount: '$320.00',
    date: 'May 10, 2023',
    buyer: 'John Smith',
    status: 'Processing',
    shipping: 'Pending'
  }, {
    id: 'ORD-2023-002',
    item: 'Antique Pocket Watch',
    amount: '$175.00',
    date: 'May 5, 2023',
    buyer: 'Emma Johnson',
    status: 'Shipped',
    shipping: 'In Transit'
  }, {
    id: 'ORD-2023-003',
    item: 'First Edition Book',
    amount: '$450.00',
    date: 'April 28, 2023',
    buyer: 'Michael Brown',
    status: 'Delivered',
    shipping: 'Delivered'
  }, {
    id: 'ORD-2023-004',
    item: 'Collectible Coins',
    amount: '$220.00',
    date: 'May 15, 2023',
    buyer: 'Sarah Wilson',
    status: 'Awaiting Payment',
    shipping: 'Not Started'
  }];
  return <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Orders & Shipping</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 text-sm font-medium">Total Orders</h3>
            <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
              <ShoppingBagIcon className="h-5 w-5" />
            </div>
          </div>
          <p className="text-2xl font-semibold text-gray-800">24</p>
          <p className="text-sm text-gray-500 mt-2">Last 30 days</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 text-sm font-medium">
              Pending Shipments
            </h3>
            <div className="p-2 rounded-lg bg-yellow-50 text-yellow-600">
              <TruckIcon className="h-5 w-5" />
            </div>
          </div>
          <p className="text-2xl font-semibold text-gray-800">5</p>
          <p className="text-sm text-gray-500 mt-2">Needs attention</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 text-sm font-medium">
              Completed Orders
            </h3>
            <div className="p-2 rounded-lg bg-green-50 text-green-600">
              <ShoppingBagIcon className="h-5 w-5" />
            </div>
          </div>
          <p className="text-2xl font-semibold text-gray-800">19</p>
          <p className="text-sm text-gray-500 mt-2">Last 30 days</p>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center">
          <ShoppingBagIcon className="h-5 w-5 text-green-600 mr-2" />
          <h3 className="font-semibold text-gray-800">Recent Orders</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Item
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Buyer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Shipping
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {orders.map(order => <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-800">{order.id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-800">{order.item}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-800">{order.amount}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-800">{order.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-800">{order.buyer}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' : order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${order.shipping === 'Delivered' ? 'bg-green-100 text-green-800' : order.shipping === 'In Transit' ? 'bg-blue-100 text-blue-800' : order.shipping === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'}`}>
                      {order.shipping}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                      View
                    </button>
                    {order.status !== 'Delivered' && <button className="ml-3 text-blue-600 hover:text-blue-700 font-medium text-sm">
                        Update
                      </button>}
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};
export default Orders;