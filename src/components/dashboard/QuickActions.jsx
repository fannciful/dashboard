import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { quickActionsData } from '../../mockData/QuickActionsData'; 

const QuickActions = () => {
  return (
    <Box sx={{
      bgcolor: '#1a1d23',
      borderRadius: '12px',
      p: 3,
      width: '100%',
    }}>
      <Typography
        variant="h6"
        sx={{
          mb: 3,
          color: '#ffffff',
          fontSize: '18px',
          fontWeight: 500
        }}
      >
        Quick actions
      </Typography>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1
      }}>
        {quickActionsData.map((action) => (
          <Button
            key={action.id}
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#2563eb',
              color: '#ffffff',
              textTransform: 'none',
              borderRadius: '24px',
              padding: '8px 18px',
              fontSize: '14px',
              fontWeight: 500,
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: '#1d4ed8',
                boxShadow: 'none',
              },
            }}
          >
            {action.label}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default QuickActions;