import React from 'react';
import { Shield, AlertTriangle, CheckCircle } from 'lucide-react';

export const SafetyTips = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex items-center mb-4">
        <Shield className="h-6 w-6 text-pink-600 mr-2" />
        <h2 className="text-xl font-semibold text-gray-800">Safety Tips</h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-pink-50 p-4 rounded-lg">
          <AlertTriangle className="h-5 w-5 text-pink-600 mb-2" />
          <h3 className="font-semibold mb-2">Verify Sellers</h3>
          <p className="text-sm text-gray-600">Always check seller ratings and reviews before making a purchase.</p>
        </div>
        
        <div className="bg-pink-50 p-4 rounded-lg">
          <CheckCircle className="h-5 w-5 text-pink-600 mb-2" />
          <h3 className="font-semibold mb-2">Secure Payments</h3>
          <p className="text-sm text-gray-600">Only use our verified payment methods. Never send money directly to sellers.</p>
        </div>
        
        <div className="bg-pink-50 p-4 rounded-lg">
          <Shield className="h-5 w-5 text-pink-600 mb-2" />
          <h3 className="font-semibold mb-2">Report Scams</h3>
          <p className="text-sm text-gray-600">Contact our support immediately if you encounter suspicious activity.</p>
        </div>
      </div>
    </div>
  );
};