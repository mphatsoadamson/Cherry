import React from 'react';

const Cart = ({ cartItems = [] }) => {

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Quantity</th>
              <th className="border px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.quantity}</td>
                <td className="border px-4 py-2">MWK {item.price}</td>
              </tr>
            ))}
            <tr>
              <td className="border px-4 py-2 font-bold">Total</td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2 font-bold">MWK {total}</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
