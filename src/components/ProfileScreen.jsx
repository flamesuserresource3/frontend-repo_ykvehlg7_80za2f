import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Edit, LogOut } from 'lucide-react';
import Screen from './Screen';

const InfoRow = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white/70 p-4 shadow-sm">
    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 text-white">
      <Icon className="h-5 w-5" />
    </div>
    <div className="flex-1">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="font-medium text-gray-900">{value}</div>
    </div>
  </div>
);

export default function ProfileScreen({ user, onBackHome, onLogout }) {
  const u = user || { username: 'Guest', email: 'guest@example.com', mobile: '—' };

  return (
    <Screen title="Profile" subtitle="Your dashboard">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <div className="mb-6 flex justify-end">
          <button onClick={onBackHome} className="rounded-full px-4 py-2 text-sm font-semibold text-pink-600 hover:bg-pink-50">Home</button>
        </div>

        <div className="mb-8 flex flex-col items-center">
          <div className="grid h-24 w-24 place-items-center rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 p-1 shadow-lg">
            <div className="grid h-full w-full place-items-center rounded-full bg-white">
              <User className="h-10 w-10 text-pink-600" />
            </div>
          </div>
          <div className="mt-4 text-xl font-bold text-gray-900">{u.username}</div>
        </div>

        <div className="space-y-4">
          <InfoRow icon={User} label="Username" value={u.username} />
          <InfoRow icon={Mail} label="Email" value={u.email || '—'} />
          <InfoRow icon={Phone} label="Mobile" value={u.mobile || '—'} />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <motion.button whileTap={{ scale: 0.95 }} onClick={() => alert('Edit placeholder')} className="inline-flex items-center justify-center gap-2 rounded-xl border border-pink-200 bg-pink-50 px-4 py-3 font-semibold text-pink-700 transition hover:bg-pink-100">
            <Edit className="h-5 w-5" />
            Edit
          </motion.button>
          <motion.button whileTap={{ scale: 0.95 }} onClick={onLogout} className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-3 font-semibold text-white shadow-lg shadow-pink-500/20">
            <LogOut className="h-5 w-5" />
            Logout
          </motion.button>
        </div>
      </motion.div>
    </Screen>
  );
}
