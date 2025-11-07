import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Settings, LogOut, ArrowRight } from 'lucide-react';
import Screen from './Screen';

const MenuCard = ({ icon: Icon, title, subtitle, onClick }) => (
  <motion.button whileTap={{ scale: 0.96 }} onClick={onClick} className="group flex w-full items-center gap-4 rounded-2xl border border-gray-200 bg-white/70 p-4 text-left shadow-sm transition hover:shadow-md">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 text-white shadow-md">
      <Icon className="h-6 w-6" />
    </div>
    <div className="flex-1">
      <div className="font-semibold text-gray-900">{title}</div>
      <div className="text-sm text-gray-500">{subtitle}</div>
    </div>
    <ArrowRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1" />
  </motion.button>
);

export default function HomeScreen({ user, onGoProfile, onLogout }) {
  const name = user?.username || 'Guest';

  return (
    <Screen title="Beranda" subtitle={`Welcome, ${name} 👋`}>
      <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="mb-6 text-gray-600">
        Here are some quick actions to get you started.
      </motion.p>
      <div className="grid grid-cols-1 gap-4">
        <MenuCard icon={User} title="Go to Profile" subtitle="View your dashboard" onClick={onGoProfile} />
        <MenuCard icon={Settings} title="Settings" subtitle="Adjust your preferences" onClick={() => alert('Settings placeholder')} />
        <MenuCard icon={LogOut} title="Logout" subtitle="Sign out of your account" onClick={onLogout} />
      </div>
    </Screen>
  );
}
