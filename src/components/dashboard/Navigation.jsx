import React, { useState, useRef, useEffect } from 'react';
import { Box, Button, IconButton, styled } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import GroupsIcon from '@mui/icons-material/Groups';
import DescriptionIcon from '@mui/icons-material/Description';
import BusinessIcon from '@mui/icons-material/Business';
import FlagIcon from '@mui/icons-material/Flag';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const backgroundColor = '#121418';

const NavButton = styled(Button)(({ theme, active }) => ({
  color: active ? '#ffffff' : '#9ca3af',
  backgroundColor: active ? '#2563eb' : 'transparent',
  border: '1px solid',
  borderColor: active ? 'transparent' : '#374151',
  borderRadius: '24px',
  padding: '6px 16px',
  textTransform: 'none',
  fontSize: '14px',
  fontWeight: 500,
  minWidth: 'auto',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  whiteSpace: 'nowrap',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: active ? '#2563eb' : 'rgba(255, 255, 255, 0.05)',
    borderColor: active ? 'transparent' : '#4b5563',
    color: '#ffffff',
  },
}));

const ScrollButton = styled(IconButton)({
  backgroundColor: 'transparent',
  color: '#9ca3af',
  borderRadius: '24px',
  padding: '6px',
  border: '1px solid #374151',
  minWidth: '32px',
  height: '32px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: '#4b5563',
    color: '#ffffff',
  },
  '&.Mui-disabled': {
    borderColor: '#1f2937',
    color: '#4b5563',
    opacity: 0.5,
  },
});

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const navItems = [
    { path: '/', label: 'Dashboard', icon: <DashboardIcon sx={{ fontSize: 18 }} /> },
    { path: '/account-dashboard', label: 'Accounts', icon: <AccountBoxIcon sx={{ fontSize: 18 }} /> },
    { path: '/brokers', label: 'Brokers', icon: <GroupsIcon sx={{ fontSize: 18 }} /> },
    { path: '/submissions', label: 'Submissions', icon: <DescriptionIcon sx={{ fontSize: 18 }} /> },
    { path: '/organizations', label: 'Organizations', icon: <BusinessIcon sx={{ fontSize: 18 }} /> },
    { path: '/goals-rules', label: 'Goals & Rules', icon: <FlagIcon sx={{ fontSize: 18 }} /> },
    { path: '/admin', label: 'Admin', icon: <AdminPanelSettingsIcon sx={{ fontSize: 18 }} /> },
    { path: '/admin', label: 'Admin', icon: <AdminPanelSettingsIcon sx={{ fontSize: 18 }} /> },
    { path: '/admin', label: 'Admin', icon: <AdminPanelSettingsIcon sx={{ fontSize: 18 }} /> },
    { path: '/admin', label: 'Admin', icon: <AdminPanelSettingsIcon sx={{ fontSize: 18 }} /> },
  ];

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScroll();
      container.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      
      return () => {
        container.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: 'smooth'
      });
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Box sx={{ 
      width: '100%',
      backgroundColor: backgroundColor,
    }}>
      <Box sx={{
        display: 'flex', 
        alignItems: 'center',
        py: 1.5,
        px: 6,  // відступи
        width: '100%',
        backgroundColor: backgroundColor,
      }}>
        <Box 
          ref={scrollContainerRef}
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1,
            flex: 1,
            overflowX: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {navItems.map((item, index) => (
            <NavButton
              key={index}
              active={location.pathname === item.path ? 1 : 0}
              onClick={() => handleNavigation(item.path)}
              startIcon={item.icon}
            >
              {item.label}
            </NavButton>
          ))}
        </Box>
        
        <Box sx={{ display: 'flex', gap: 0.5, marginLeft: 2 }}>
          <ScrollButton
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            size="small"
          >
            <ChevronLeftIcon sx={{ fontSize: 16 }} />
          </ScrollButton>
          <ScrollButton
            onClick={scrollRight}
            disabled={!canScrollRight}
            size="small"
          >
            <ChevronRightIcon sx={{ fontSize: 16 }} />
          </ScrollButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Navigation;