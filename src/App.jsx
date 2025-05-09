import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import AccountDashboard from './pages/AccountDashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* use Routes for navigation */}
        <Route index element={<Dashboard />} />
        <Route path="account-dashboard" element={<AccountDashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;