import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from './components/Login';
import { Browse } from './components/Browse';
import { Payment } from './components/Payment';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-pink-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;