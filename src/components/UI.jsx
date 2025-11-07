import React from 'react';
import { motion } from 'framer-motion';

export const InputField = ({ label, type = 'text', value, onChange, placeholder }) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 shadow-sm outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-200"
    />
  </div>
);

export const PrimaryButton = ({ children, className = '', ...props }) => (
  <motion.button
    whileTap={{ scale: 0.95 }}
    className={`group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-3 font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-pink-300 ${className}`}
    {...props}
  >
    {children}
  </motion.button>
);
