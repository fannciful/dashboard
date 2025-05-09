import React from 'react';
import { Box } from '@mui/material';
import AccountView from '../components/account/AccountView';
import PerformanceMetrics from '../components/account/Metrics';
import Policies from '../components/account/Policies';
import AccountStatus from '../components/account/AccountStatus';
import WinnabilityComponent from '../components/account/Winnability';
import Communication from '../components/account/Communication';
import PoliciesTwo from '../components/account/PoliciesTwo'

const backgroundColor = '#121418';

const AccountDashboard = () => {
  return (
    <Box sx={{
      backgroundColor: backgroundColor,
      minHeight: 'calc(100vh - 130px)',
      padding: '16px',
      maxWidth: '100%',
    }}>
      {/* component AccountView */}
      <AccountView />
      
      {/* component PerformanceMetrics */}
      <Box sx={{ mt: 1.5 }}>
        <PerformanceMetrics />
      </Box>
      
      {/* component Policies */}
      <Box sx={{ mt: 1.5 }}>
        <PoliciesTwo />
      </Box>
      
      {/* component AccountStatus */}
      <Box sx={{ mt: 1.5 }}>
        <AccountStatus />
      </Box>

      {/* component WinnabilityComponent */}
      <Box sx={{ mt: 1.5 }}>
        <WinnabilityComponent />
      </Box>

      {/* component Communication */}
      <Box sx={{ mt: 1.5 }}>
        <Communication />
      </Box>

      {/* component Policies */}
      <Box sx={{ mt: 1.5 }}>
        <Policies />
      </Box>
    </Box>
  );
};

export default AccountDashboard;