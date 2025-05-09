import React from 'react';
import { Box } from '@mui/material';
import WorkQueue from '../components/dashboard/WorkQueue'
import MyAccounts from '../components/dashboard/MyAccounts';
import PortfolioGoals from '../components/dashboard/PortfolioGoals';
import QuickActions from '../components/dashboard/QuickActions';
import MarketIntelligence from '../components/dashboard/MarketIntelligence';

const Dashboard = ({ showSideNavigation = false }) => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      width: '100%',
      margin: '0 auto',
      pl: 3, 
      pr: 6, 
      py: 3,
      alignItems: 'stretch', 
    }}>
      {/* Upper section of the dashboard */}
      <Box sx={{
        display: 'flex',
        gap: 3,
        width: '100%',
      }}>
        {/* Work Queue component */}
        <Box sx={{
          flex: '4', 
          minWidth: '750px', 
        }}>
          <WorkQueue />
        </Box>

        {/* Portfolio Goals component */}
        <Box sx={{
          flex: '0.9', 
          minWidth: '280px', 
        }}>
          <PortfolioGoals />
        </Box>

        {/* Right Column */}
        <Box sx={{
          flex: '0.6', 
          minWidth: '220px', 
          height: '500px',
        }}>
          <Box sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}>
            <Box sx={{ flex: '1.2' }}>
              <QuickActions />
            </Box>
            <Box sx={{ flex: '0.8' }}>
              <MarketIntelligence />
            </Box>
          </Box>
        </Box>
      </Box>
      
      {/* Table MyAccount */}
      <Box sx={{
        width: '100%',
        minHeight: '400px',
      }}>
        <MyAccounts />
      </Box>
    </Box>
  );
};

export default Dashboard;