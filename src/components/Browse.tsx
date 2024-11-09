import React, { useState } from 'react';
import { Search, Star, MapPin, DollarSign } from 'lucide-react';
import { SafetyTips } from './SafetyTips';

export const Browse = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const items = [
    {
      id: 1,
      name: "Pamela's Restaurant",
      type: "Restaurant",
      rating: 4.5,
      price: "K150 - K300",
      location: "Cairo Road, Lusaka",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=60"
    },
    {
      id: 2,
      name: "Shoprite Manda Hill",
      type: "Supermarket",
      rating: 4.2,
      price: "Varies",
      location: "Manda Hill Mall, Lusaka",
      image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=800&auto=format&fit=crop&q=60"
    },
    {
      id: 3,
      name: "East Park Mall",
      type: "Shopping Mall",
      rating: 4.7,
      price: "Various Stores",
      location: "Great East Road, Lusaka",
      image: "https://images.unsplash.com/photo-1567449303078-57ad995bd17f?w=800&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="relative mb-8">
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for goods and services..."
            className="w-full pl-12 p-3 rounded-lg border border-pink-200 focus:outline-none focus:border-pink-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <SafetyTips />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-sm">{item.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-2">{item.type}</p>
                <div className="flex items-center text-gray-600 text-sm mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  {item.location}
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <DollarSign className="h-4 w-4 mr-1" />
                  {item.price}
                </div>
                <button className="mt-4 w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};