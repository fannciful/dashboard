import React from "react";
import { Box, Typography } from "@mui/material";
import { portfolioGoalsData } from "../../mockData/portfolioGoalsData";

const PortfolioGoals = () => {
  return (
    <Box sx={{
      bgcolor: '#1a1d23',
      borderRadius: '12px',
      p: 3,
      width: '100%',
      minHeight: '610px',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Typography 
        variant="h6" 
        sx={{ 
          mb: 4, 
          color: '#ffffff',
          fontSize: '18px',
          fontWeight: 500
        }}
      >
        Portfolio goals
      </Typography>
      
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 4,
      }}>
        {portfolioGoalsData.map((goal) => (
          <Box key={goal.id}>
            <Typography
              sx={{
                color: '#9ca3af',
                fontSize: '11px',
                fontWeight: 500,
                mb: 1,
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
            >
              {goal.title}
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Typography
                sx={{
                  color: '#ffffff',
                  fontSize: '24px',
                  fontWeight: 600,
                  mr: 1
                }}
              >
                {goal.value}
              </Typography>
              {goal.status && (
                <Typography
                  sx={{
                    color: goal.statusColor,
                    fontSize: '12px',
                    fontWeight: 500,
                    backgroundColor: `${goal.statusColor}15`,
                    px: 1,
                    py: 0.25,
                    borderRadius: '4px'
                  }}
                >
                  {goal.status}
                </Typography>
              )}
              {goal.percentage && (
                <Typography
                  sx={{
                    color: '#9ca3af',
                    fontSize: '11px',
                    fontWeight: 500,
                    ml: 'auto'
                  }}
                >
                  {goal.percentage}
                </Typography>
              )}
            </Box>
            
            <Box sx={{ 
              width: '100%', 
              height: '8px', 
              borderRadius: '4px',
              background: goal.gradient,
              position: 'relative'
            }} />
            
            {goal.target && (
              <Typography
                sx={{
                  color: '#6b7280',
                  fontSize: '12px',
                  mt: 0.5
                }}
              >
                Target: {goal.target}
              </Typography>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PortfolioGoals;