import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, Mail } from 'lucide-react';

export const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/browse');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 to-pink-200 p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-3 text-pink-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Username"
                className="w-full pl-10 p-3 border border-pink-200 rounded-lg focus:outline-none focus:border-pink-500"
                required
              />
            </div>

            {!isLogin && (
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-pink-400 h-5 w-5" />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full pl-10 p-3 border border-pink-200 rounded-lg focus:outline-none focus:border-pink-500"
                  required
                />
              </div>
            )}

            <div className="relative">
              <Lock className="absolute left-3 top-3 text-pink-400 h-5 w-5" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-10 p-3 border border-pink-200 rounded-lg focus:outline-none focus:border-pink-500"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition duration-300"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-pink-600 hover:text-pink-700 text-sm"
          >
            {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Login'}
          </button>
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>For inquiries, contact:</p>
          <p className="font-semibold">Lushomo Simunyama</p>
          <p>Phone: 0970732836</p>
          <p>Email: simunyamalushomo@gmail.com</p>
        </div>
      </div>
    </div>
  );
};