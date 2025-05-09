import React from 'react';
import {
  AppBar,
  Box,
  Typography,
  InputBase,
  Avatar,
  styled
} from '@mui/material';

const backgroundColor = '#121418';

const StyledAppBar = styled(AppBar)({
  backgroundColor: backgroundColor,
  boxShadow: 'none',
  position: 'static',
});

const SearchBar = styled('div')({
  position: 'relative',
  borderRadius: '24px',
  backgroundColor: 'rgba(255, 255, 255, 0.08)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
  },
  width: '350px',
});

const StyledInputBase = styled(InputBase)({
  color: '#9ca3af',
  fontSize: '14px',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: '8px 8px 8px 0',
    paddingLeft: '16px',
    width: '100%',
    '&::placeholder': {
      color: '#9ca3af',
      opacity: 1,
    }
  },
});

const Navbar = () => {
  return (
    <StyledAppBar>
      <Box
        sx={{
          minHeight: '64px',
          py: 1.5,
          px: 6, 
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: backgroundColor,
        }}
      >
        {/* Welcome Message */}
        <Typography
          sx={{
            color: '#ffffff',
            fontSize: '24px',
            fontWeight: 400,
            lineHeight: 1.5,
          }}
        >
          Hi Arthur, welcome! You have 12 open tasks.
        </Typography>
        
        {/* Search and Avatar Section */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        }}>
          {/* Search Bar */}
          <SearchBar>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
            />
          </SearchBar>
          
          {/* Avatar */}
          <Avatar
            sx={{
              width: '38px',
              height: '38px',
              backgroundColor: '#3b82f6',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              borderRadius: '24px',
            }}
          >
            AR
          </Avatar>
        </Box>
      </Box>
    </StyledAppBar>
  );
};

export default Navbar;