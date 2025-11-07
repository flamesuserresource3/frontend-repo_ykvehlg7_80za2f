import React, { useEffect, useState } from 'react';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';

const ROUTES = {
  LOGIN: 'login',
  REGISTER: 'register',
  HOME: 'home',
  PROFILE: 'profile',
};

export default function App() {
  const [route, setRoute] = useState(ROUTES.LOGIN);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const u = localStorage.getItem('currentUser');
    if (u) {
      setUser(JSON.parse(u));
      setRoute(ROUTES.HOME);
    }
  }, []);

  const handleLogin = (u) => {
    setUser(u);
    setRoute(ROUTES.HOME);
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setUser(null);
    setRoute(ROUTES.LOGIN);
  };

  if (route === ROUTES.LOGIN) {
    return (
      <LoginScreen
        onLogin={handleLogin}
        onGoRegister={() => setRoute(ROUTES.REGISTER)}
      />
    );
  }

  if (route === ROUTES.REGISTER) {
    return (
      <RegisterScreen
        onCreated={() => setRoute(ROUTES.LOGIN)}
        onGoLogin={() => setRoute(ROUTES.LOGIN)}
      />
    );
  }

  if (route === ROUTES.PROFILE) {
    return (
      <ProfileScreen
        user={user}
        onBackHome={() => setRoute(ROUTES.HOME)}
        onLogout={handleLogout}
      />
    );
  }

  return (
    <HomeScreen
      user={user}
      onGoProfile={() => setRoute(ROUTES.PROFILE)}
      onLogout={handleLogout}
    />
  );
}
