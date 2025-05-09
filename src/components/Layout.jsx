import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navigation from './dashboard/Navigation';
import Navbar from './Navbar';

const backgroundColor = '#121418';

const Layout = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: backgroundColor,
    }}>
      {/* Combined Navigation Container */}
      <Box sx={{
        backgroundColor: backgroundColor,
        borderBottom: '1px solid #2a2e35',
      }}>
        {/* Main Navigation Bar */}
        <Navbar />
        {/* Dashboard Navigation */}
        <Navigation />
      </Box>
      {/* Main Content */}
      <Box sx={{
        flex: 1,
        padding: '24px',
        backgroundColor: backgroundColor,
      }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;