'use client';

import React, { useState } from 'react';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({ name: '', email: '', password: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Logging in with:', formData);
    } else {
      console.log('Signing up with:', formData);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f5dc] via-[#f9f4e5] to-[#fffaf0] transition-all duration-1000 flex items-center justify-center">
      <div className="bg-white/30 backdrop-blur-lg shadow-2xl rounded-2xl p-8 w-full max-w-md transition-transform duration-500 transform hover:scale-105">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          {isLogin ? 'Welcome Back 👋' : 'Create an Account ✨'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <div className="relative">
              <FaUser className="absolute top-3 left-3 text-gray-500" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/60 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-beige-300"
                required
              />
            </div>
          )}
          <div className="relative">
            <FaEnvelope className="absolute top-3 left-3 text-gray-500" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/60 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-beige-300"
              required
            />
          </div>
          <div className="relative">
            <FaLock className="absolute top-3 left-3 text-gray-500" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/60 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-beige-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-beige-100 text-gray-700 font-semibold py-2 rounded-lg hover:bg-yellow-100 transition duration-300"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <p className="text-center text-gray-700 mt-6">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            type="button"
            onClick={toggleMode}
            className="text-yellow-600 underline hover:text-yellow-500 transition"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
