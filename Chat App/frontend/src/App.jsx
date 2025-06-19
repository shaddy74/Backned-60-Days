import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage';
import SignUp from "./pages/SignUp";
import LoginPage from "./pages/LoginPage";
import SettingPage from "./pages/SettingPage";
import ProfilePage from "./pages/ProfilePage";
import { Toaster } from 'react-hot-toast';
import { useAuthStore } from './store/useAuthStore';
import { Loader } from 'lucide-react';
import Navbar from './components/Navbar';
import { useThemeStore } from './store/useThemeStore';


const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();
  const { theme } = useThemeStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth])

  if (isCheckingAuth && !authUser) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <Loader className='size-10banimate-spin' />
      </div>
    )
  }

  return (
    <div data-theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />

        <Route path="/signup" element={!authUser ? <SignUp /> : <Navigate to="/" />} />

        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />

        <Route path="/settings" element={<SettingPage />} />


        <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />

      </Routes>
      <Toaster />
    </div>
  )
}

export default App
