import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Screen({ children, title, subtitle, showSpline = false, maxWidth = 'max-w-xl' }) {
  return (
    <div className="relative min-h-screen w-full bg-white px-6 py-10">
      {showSpline && (
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-10 h-80 w-80 rounded-full bg-gradient-to-br from-fuchsia-500 via-pink-500 to-amber-400 opacity-30 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-400 opacity-20 blur-3xl" />
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className={`relative z-10 mx-auto ${maxWidth}`}>
        {(title || subtitle) && (
          <div className="mb-8">
            {title && <h1 className="text-3xl font-extrabold text-gray-900">{title}</h1>}
            {subtitle && <p className="mt-1 text-gray-600">{subtitle}</p>}
          </div>
        )}
        {children}
      </motion.div>
    </div>
  );
}
