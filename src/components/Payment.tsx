import React from 'react';
import { CreditCard, Phone } from 'lucide-react';

export const Payment = () => {
  return (
    <div className="min-h-screen bg-pink-50 p-4">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-8">Payment Methods</h1>

          <div className="space-y-6">
            <div className="border border-pink-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Phone className="h-6 w-6 text-pink-600 mr-2" />
                <h2 className="text-xl font-semibold">Mobile Money</h2>
              </div>
              
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-4 border border-pink-200 rounded-lg hover:bg-pink-50 transition duration-300">
                  <span>MTN Money</span>
                  <span className="text-sm text-gray-600">Send to: 0970732836</span>
                </button>

                <button className="w-full flex items-center justify-between p-4 border border-pink-200 rounded-lg hover:bg-pink-50 transition duration-300">
                  <span>Airtel Money</span>
                  <span className="text-sm text-gray-600">Send to: 0970732836</span>
                </button>

                <button className="w-full flex items-center justify-between p-4 border border-pink-200 rounded-lg hover:bg-pink-50 transition duration-300">
                  <span>Zamtel Money</span>
                  <span className="text-sm text-gray-600">Send to: 0970732836</span>
                </button>
              </div>
            </div>

            <div className="border border-pink-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CreditCard className="h-6 w-6 text-pink-600 mr-2" />
                <h2 className="text-xl font-semibold">Order Summary</h2>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>K0.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Service Fee</span>
                  <span>K0.00</span>
                </div>
                <div className="border-t border-pink-200 pt-2 mt-2">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>K0.00</span>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition duration-300">
              Confirm Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};