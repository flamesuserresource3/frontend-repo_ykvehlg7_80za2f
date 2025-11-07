import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Screen from './Screen';
import { InputField, PrimaryButton } from './UI';

const SocialIcon = ({ children }) => (
  <button
    type="button"
    className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white/70 text-gray-700 shadow-sm transition hover:shadow">
    {children}
  </button>
);

export default function RegisterScreen({ onCreated, onGoLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');

  useEffect(() => setError(''), [username, password, email, mobile]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password || !email || !mobile) {
      setError('Please fill in all fields');
      return;
    }
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.some((u) => u.username.toLowerCase() === username.toLowerCase())) {
      setError('Username already exists');
      return;
    }
    const newUser = { username, password, email, mobile };
    const updated = [...users, newUser];
    localStorage.setItem('users', JSON.stringify(updated));
    onCreated();
  };

  return (
    <Screen title="Create account" subtitle="Sign up to get started">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-6 rounded-2xl bg-white/80 p-6 shadow-xl ring-1 ring-white/60">
        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="grid grid-cols-1 gap-4">
            <InputField label="Username" value={username} onChange={setUsername} placeholder="yourname" />
            <InputField label="Password" type="password" value={password} onChange={setPassword} placeholder="••••••••" />
            <InputField label="Email" type="email" value={email} onChange={setEmail} placeholder="you@example.com" />
            <InputField label="Mobile" type="tel" value={mobile} onChange={setMobile} placeholder="(123) 456-7890" />
          </motion.div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <PrimaryButton type="submit">
            Create <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </PrimaryButton>
        </form>

        <div className="mt-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-xs uppercase tracking-widest text-gray-400">or continue with</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>
        <div className="mt-4 flex items-center justify-center gap-3">
          <SocialIcon>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#0866FF" xmlns="http://www.w3.org/2000/svg"><path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5.02 3.66 9.19 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34v7.03C18.34 21.26 22 17.09 22 12.07Z"/></svg>
          </SocialIcon>
          <SocialIcon>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#1DA1F2" xmlns="http://www.w3.org/2000/svg"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.35 8.54 8.54 0 0 1-2.7 1.03 4.26 4.26 0 0 0-7.3 3.88A12.08 12.08 0 0 1 3.15 4.6a4.26 4.26 0 0 0 1.32 5.68 4.22 4.22 0 0 1-1.93-.53v.05a4.26 4.26 0 0 0 3.42 4.18 4.3 4.3 0 0 1-1.92.07 4.26 4.26 0 0 0 3.98 2.96A8.55 8.55 0 0 1 2 19.54a12.07 12.07 0 0 0 6.54 1.92c7.85 0 12.14-6.5 12.14-12.14 0-.18 0-.37-.01-.55A8.67 8.67 0 0 0 22.46 6Z"/></svg>
          </SocialIcon>
          <SocialIcon>
            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#EA4335" d="M12 10.2v3.84h5.33c-.23 1.25-.95 2.31-2.03 3.02l3.28 2.54c1.91-1.76 3.01-4.35 3.01-7.3 0-.7-.06-1.38-.18-2.04H12Z"/><path fill="#34A853" d="M6.64 14.32 5.8 14.96l-2.62 2.02C4.68 19.84 8.06 22 12 22c2.43 0 4.47-.8 5.96-2.18l-3.28-2.54c-.91.62-2.07.99-2.68 1.05-2.25.21-4.15-1.01-5.36-3.11Z"/><path fill="#4A90E2" d="M18.35 19.82C19.98 18.31 21 16.25 21 14.06c0-.91-.15-1.82-.45-2.67H12v3.84h5.33c-.4 1.86-1.6 3.42-2.98 4.36l3.99 3.23Z"/><path fill="#FBBC05" d="M3.18 7.16A9.99 9.99 0 0 0 2 12c0 1.64.39 3.19 1.09 4.55 0 0 3.55-2.77 3.55-2.77A5.98 5.98 0 0 1 6 12c0-.7.12-1.38.34-2.02L3.18 7.16Z"/><path fill="#EA4335" d="M12 2c-2.42 0-4.63.86-6.36 2.3L8.7 7.99A5.98 5.98 0 0 1 12 6c1.6 0 3.06.61 4.16 1.6l3.9-3.9C18.6 2.82 15.46 2 12 2Z"/></svg>
          </SocialIcon>
        </div>

        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <button onClick={onGoLogin} className="font-semibold text-pink-600 hover:text-pink-700">Sign in</button>
        </div>
      </motion.div>
    </Screen>
  );
}
