import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Screen from './Screen';
import { InputField, PrimaryButton } from './UI';

export default function LoginScreen({ onLogin, onGoRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => setError(''), [username, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const found = users.find(
      (u) => u.username.toLowerCase() === username.toLowerCase() && u.password === password
    );
    if (found) {
      localStorage.setItem('currentUser', JSON.stringify(found));
      onLogin(found);
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <Screen title="Hello" subtitle="Sign in to your account" showSpline>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-6 rounded-2xl bg-white/80 p-6 shadow-xl ring-1 ring-white/60">
        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="space-y-4">
            <InputField label="Username" value={username} onChange={setUsername} placeholder="yourname" />
            <InputField label="Password" type="password" value={password} onChange={setPassword} placeholder="••••••••" />
          </motion.div>

          <div className="text-right">
            <button type="button" className="text-sm font-medium text-pink-600 hover:text-pink-700">Forgot your password?</button>
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <PrimaryButton type="submit">
            Sign in <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </PrimaryButton>
        </form>

        <div className="text-center text-sm text-gray-600">
          Don’t have an account?{' '}
          <button onClick={onGoRegister} className="font-semibold text-pink-600 hover:text-pink-700">Create</button>
        </div>
      </motion.div>
    </Screen>
  );
}
