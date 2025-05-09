import React from 'react';
import { Box, Typography, styled, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { accountData, breadcrumbsData, attentionItemsData } from '../../mockData/AccountViewData';

const AccountLogo = styled(Box)({
  width: '75px',
  height: '75px',
  borderRadius: '50%',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff',
  border: '1px solid rgba(255, 255, 255, 0.1)',
});

const InfoLabel = styled(Typography)({
  fontSize: '10px',
  color: '#9ca3af',
  textTransform: 'uppercase',
  fontWeight: 600,
  letterSpacing: '0.5px',
  marginBottom: '3px',
});

const InfoValue = styled(Typography)({
  fontSize: '13px',
  color: '#ffffff',
  fontWeight: 500,
});

const NeedsAttentionBox = styled(Box)({
  backgroundColor: '#13151D',
  borderRadius: '12px',
  padding: '18px 20px',
  border: '1px solid #F59E0B',
});

const StatusHeader = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  marginBottom: '12px',
});

const StatusItem = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

const ItemTitle = styled(Typography)({
  fontSize: '14px',
  color: '#ffffff',
  fontWeight: 500,
  marginBottom: '3px',
});

const ItemSubtitle = styled(Typography)({
  fontSize: '12px',
  color: '#9ca3af',
  marginBottom: '4px',
});

const ActionLink = styled(Button)({
  fontSize: '12px',
  color: '#3182CE',
  padding: '0',
  textTransform: 'none',
  fontWeight: 500,
  minWidth: 'auto',
  '&:hover': {
    backgroundColor: 'transparent',
    textDecoration: 'underline',
  },
  '& .MuiButton-endIcon': {
    marginLeft: '3px',
  },
});

const Breadcrumbs = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '16px',
  color: '#9ca3af',
  fontSize: '13px',
});

const BreadcrumbLink = styled('span')({
  color: '#9ca3af',
  cursor: 'pointer',
  '&:hover': {
    color: '#ffffff',
    textDecoration: 'underline',
  },
});

const BreadcrumbActive = styled('span')({
  color: '#3182CE',
});

const Divider = styled(Box)({
  width: '1px',
  height: '35px',
  background: 'rgba(255, 255, 255, 0.1)',
  margin: '0 16px',
});

const AccountHeader = () => {
  return (
    <Box sx={{ 
      width: '100%',
      backgroundColor: '#121418', 
      pb: 2,
      mt: -2
    }}>
      {/* Breadcrumbs */}
      <Breadcrumbs sx={{ py: 0, px: 0 }}>
        {breadcrumbsData.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && <span>//</span>}
            {item.isActive ? (
              <BreadcrumbActive>{item.label}</BreadcrumbActive>
            ) : (
              <BreadcrumbLink>{item.label}</BreadcrumbLink>
            )}
          </React.Fragment>
        ))}
      </Breadcrumbs>

      {/* Main Content */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <AccountLogo>
            <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="27.5" cy="27.5" r="27.5" fill="white" />
              <path 
                d={accountData.logo.svgPath} 
                stroke={accountData.logo.strokeColor} 
                fill="none" 
                strokeWidth={accountData.logo.strokeWidth} 
              />
            </svg>
          </AccountLogo>
          
          <Box sx={{ ml: 2.5, width: '200px' }}>
            <Typography variant="h4" sx={{ 
              color: '#ffffff', 
              fontWeight: 500,
              fontSize: '20px',
              lineHeight: 1.2,
              mb: 0.5
            }}>
              {accountData.name}
            </Typography>
            <Typography sx={{ color: '#9ca3af', fontSize: '13px' }}>
              {accountData.address.street}<br />
              {accountData.address.cityStateZip}
            </Typography>
          </Box>
          
          {/* Info section */}
          <Box sx={{ display: 'flex', gap: 3.5, ml: 8 }}>
            <Box>
              <InfoLabel>EXISTING ACCOUNT</InfoLabel>
              <InfoValue>{accountData.accountInfo.accountNumber}</InfoValue>
            </Box>
            
            <Box>
              <InfoLabel>BROKER</InfoLabel>
              <InfoValue>{accountData.accountInfo.broker}</InfoValue>
            </Box>
            
            <Box>
              <InfoLabel>UNDERWRITER</InfoLabel>
              <InfoValue>{accountData.accountInfo.underwriter}</InfoValue>
            </Box>
          </Box>
        </Box>
        
        <NeedsAttentionBox>
          <StatusHeader>
            <AccessTimeIcon sx={{ color: '#F59E0B', fontSize: 18 }} />
            <Typography sx={{ fontSize: '15px', color: '#ffffff', fontWeight: 600 }}>
              Needs Attention
            </Typography>
          </StatusHeader>
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {attentionItemsData.map((item, index) => (
              <React.Fragment key={item.id}>
                {index > 0 && <Divider />}
                <StatusItem>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemSubtitle>{item.subtitle}</ItemSubtitle>
                  <ActionLink 
                    endIcon={<ArrowForwardIcon sx={{ fontSize: 12 }} />}
                  >
                    {item.actionLabel}
                  </ActionLink>
                </StatusItem>
              </React.Fragment>
            ))}
          </Box>
        </NeedsAttentionBox>
      </Box>
    </Box>
  );
};

export default AccountHeader;