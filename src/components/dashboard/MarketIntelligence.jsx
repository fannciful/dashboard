import React from 'react';
import { Box, Typography } from '@mui/material';
import { marketInsightsData } from '../../mockData/MarketIntelligenceData';

const MarketIntelligence = () => {
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
        Market intelligence
      </Typography>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }}>
        {marketInsightsData.map((insight) => (
          <Box
            key={insight.id}
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 1.5
            }}
          >
            <Box
              sx={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: insight.color,
                mt: 0.7,
                flexShrink: 0
              }}
            />
            <Typography
              sx={{
                color: '#ffffff',
                fontSize: '14px',
                lineHeight: 1.5,
                flex: 1
              }}
            >
              {insight.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MarketIntelligence;