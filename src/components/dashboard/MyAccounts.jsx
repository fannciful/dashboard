import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button, IconButton, TextField, styled
} from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SortIcon from '@mui/icons-material/Sort';
import GroupIcon from '@mui/icons-material/ViewWeek';
import AddIcon from '@mui/icons-material/Add';
import CircleIcon from '@mui/icons-material/Circle';
import InfoIcon from '@mui/icons-material/Info';
import { accountsData } from '../../mockData/MyAccountsData';

const AccountsContainer = styled(Box)({
  backgroundColor: '#171923',
  borderRadius: '16px',
  padding: '24px',
  width: '100%',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
});

const StyledTableCell = styled(TableCell)({
  borderBottom: '1px solid #2D3748',
  padding: '16px 8px',
  color: '#A0AEC0',
  fontSize: '13px',
  '&.MuiTableCell-head': {
    color: '#718096',
    fontSize: '12px',
    fontWeight: 500,
    textTransform: 'uppercase',
    backgroundColor: 'transparent',
    padding: '8px 8px 16px 8px',
  },
});

const ActionButton = styled(Button)(({ primary }) => ({
  color: '#fff',
  backgroundColor: primary ? '#3182CE' : 'transparent',
  border: primary ? 'none' : '1px solid #4A5568',
  borderRadius: '32px',
  padding: '4px 12px',
  textTransform: 'none',
  fontSize: '14px',
  fontWeight: 500,
  minWidth: 'auto',
  '&:hover': {
    backgroundColor: primary ? '#2B6CB0' : 'rgba(74, 85, 104, 0.2)',
  },
}));

const SearchField = styled(TextField)({
  '& .MuiInputBase-root': {
    color: '#CBD5E0',
    backgroundColor: '#2D3748',
    borderRadius: '32px',
    fontSize: '14px',
    height: '32px',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '& .MuiInputAdornment-root': {
    marginLeft: '8px',
  },
});

const TableHeader = () => (
  <TableHead>
    <TableRow>
      <StyledTableCell>ACCOUNT NAME/TYPE</StyledTableCell>
      <StyledTableCell>LINE</StyledTableCell>
      <StyledTableCell>BROKER</StyledTableCell>
      <StyledTableCell>RENEWAL DATE</StyledTableCell>
      <StyledTableCell>PREMIUM</StyledTableCell>
      <StyledTableCell>RATED PREMIUM</StyledTableCell>
      <StyledTableCell>LOSS RATIO</StyledTableCell>
      <StyledTableCell>APPETITE</StyledTableCell>
      <StyledTableCell>STATUS</StyledTableCell>
      <StyledTableCell>TRIAGE</StyledTableCell>
      <StyledTableCell>WINNABILITY</StyledTableCell>
      <StyledTableCell></StyledTableCell>
    </TableRow>
  </TableHead>
);

const WinnabilityRating = ({ rating }) => {
  const dots = rating === 'Very Strong' ? 4 : rating === 'Strong' ? 3 : 2;
  const color = '#3182CE';
  
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {[...Array(4)].map((_, i) => (
        <Box 
          key={i}
          sx={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: i < dots ? color : 'rgba(49, 130, 206, 0.2)',
            mx: 0.5
          }}
        />
      ))}
      <Typography sx={{ ml: 1, color: '#E2E8F0', fontSize: '14px' }}>
        {rating}
      </Typography>
    </Box>
  );
};

const LossRatioBadge = ({ ratio, ratioClass }) => {
  return (
    <Box 
      sx={{ 
        backgroundColor: 
          ratioClass === 'success' ? 'rgba(56, 161, 105, 0.2)' : 
          ratioClass === 'warning' ? 'rgba(214, 158, 46, 0.2)' : 
          'rgba(229, 62, 62, 0.2)',
        color: 
          ratioClass === 'success' ? '#48BB78' : 
          ratioClass === 'warning' ? '#ECC94B' : 
          '#FC8181',
        borderRadius: '16px',
        padding: '2px 10px',
        display: 'inline-block',
        fontSize: '13px',
        textAlign: 'center',
        fontWeight: 500,
      }}
    >
      {ratio}
    </Box>
  );
};

const AppetiteBadge = ({ type }) => {
  return (
    <Box
      sx={{ 
        color: '#F7FAFC', 
        fontSize: '12px',
        fontWeight: 500,
        backgroundColor: type === 'HIGH' ? 'rgba(56, 161, 105, 0.1)' : 
                        type === 'MEDIUM' ? 'rgba(214, 158, 46, 0.1)' : 
                        'rgba(229, 62, 62, 0.1)',
        padding: '4px 8px',
        borderRadius: '4px',
        display: 'inline-block',
      }}>
      {type}
    </Box>
  );
};

const StatusBadge = ({ status }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <CircleIcon 
        sx={{ 
          fontSize: 10, 
          color: status === 'Active' ? '#48BB78' : '#3182CE',
          mr: 1 
        }} 
      />
      <Typography 
        sx={{ 
          color: status === 'Active' ? '#48BB78' : '#3182CE', 
          fontSize: '14px',
        }}
      >
        {status}
      </Typography>
    </Box>
  );
};

const TriageBadge = ({ value }) => {
  return (
    <Box
      sx={{
        border: '1px solid #3182CE',
        borderRadius: '16px',
        padding: '2px 10px',
        fontSize: '13px',
        color: '#F7FAFC',
        display: 'inline-block',
        textAlign: 'center',
        minWidth: '45px'
      }}
    >
      {value}
    </Box>
  );
};

const AccountRow = ({ account }) => (
  <TableRow sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.03)' } }}>
    <StyledTableCell>
      <Typography sx={{ color: '#F7FAFC', fontSize: '14px', fontWeight: 500, mb: 0.5 }}>
        {account.name}
      </Typography>
      <Typography sx={{ color: '#718096', fontSize: '12px' }}>
        {account.type}
      </Typography>
    </StyledTableCell>
    
    <StyledTableCell>
      <Typography sx={{ color: '#F7FAFC', fontSize: '14px' }}>
        {account.line}
      </Typography>
    </StyledTableCell>
    
    <StyledTableCell>
      <Typography sx={{ color: '#F7FAFC', fontSize: '14px' }}>
        {account.broker}
      </Typography>
    </StyledTableCell>
    
    <StyledTableCell>
      <Typography sx={{ color: '#F7FAFC', fontSize: '14px' }}>
        {account.renewalDate}
      </Typography>
    </StyledTableCell>
    
    <StyledTableCell>
      <Typography sx={{ color: '#3182CE', fontSize: '14px', fontWeight: 500 }}>
        {account.premium}
      </Typography>
    </StyledTableCell>
    
    <StyledTableCell>
      <Typography sx={{ color: '#F7FAFC', fontSize: '14px' }}>
        {account.ratedPremium}
      </Typography>
    </StyledTableCell>
    
    <StyledTableCell>
      <LossRatioBadge ratio={account.lossRatio} ratioClass={account.lossRatioClass} />
    </StyledTableCell>
    
    <StyledTableCell>
      <AppetiteBadge type={account.appetite} />
    </StyledTableCell>
    
    <StyledTableCell>
      <StatusBadge status={account.status} />
    </StyledTableCell>
    
    <StyledTableCell>
      <TriageBadge value={account.triage} />
    </StyledTableCell>
    
    <StyledTableCell>
      <WinnabilityRating rating={account.winnability} />
    </StyledTableCell>
    
    <StyledTableCell>
      <IconButton size="small" sx={{ color: '#A0AEC0' }}>
        <InfoIcon />
      </IconButton>
    </StyledTableCell>
  </TableRow>
);

const HeaderControls = () => (
  <Box sx={{ 
    display: 'flex', 
    alignItems: 'center',
    mb: 3,
    gap: 2
  }}>
    <Typography sx={{ 
      color: '#F7FAFC', 
      fontSize: '24px', 
      fontWeight: 500 
    }}>
      My accounts
    </Typography>

    <SearchField
      placeholder="Search"
      sx={{ width: '240px', ml: 2 }}
    />

    <ActionButton startIcon={<FilterAltIcon />}>
      Filter
    </ActionButton>

    <ActionButton startIcon={<SortIcon />}>
      Sort
    </ActionButton>

    <ActionButton startIcon={<GroupIcon />}>
      Group
    </ActionButton>

    <ActionButton startIcon={<AddIcon />} sx={{backgroundColor: '#3b82f6'}}>
      New
    </ActionButton>
  </Box>
);

const MyAccounts = () => (
  <AccountsContainer>
    <HeaderControls />
    
    <TableContainer>
      <Table>
        <TableHeader />
        <TableBody>
          {accountsData.map((account, index) => (
            <AccountRow key={index} account={account} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </AccountsContainer>
);

export default MyAccounts;