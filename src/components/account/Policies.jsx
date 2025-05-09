import React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
  IconButton,
  TextField,
  styled
} from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CircleIcon from '@mui/icons-material/Circle';
import InfoIcon from '@mui/icons-material/Info';
import SearchIcon from '@mui/icons-material/Search';
import { policiesTableData, policyTotals } from '../../mockData/PoliciesData'; 

const PoliciesOuterContainer = styled(Box)(({ theme }) => ({
  padding: '16px',
  width: '100%',
  color: '#FFF',
}));

const PageTitle = styled(Typography)({
  fontSize: '24px',
  fontWeight: 600,
  color: '#ffffff',
  marginBottom: '24px',
  paddingLeft: '32px',
});

const PoliciesContainer = styled(Box)({
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
  padding: '12px 6px',
  color: '#A0AEC0',
  fontSize: '13px',
  '&.MuiTableCell-head': {
    color: '#718096',
    fontSize: '12px',
    fontWeight: 500,
    textTransform: 'uppercase',
    backgroundColor: 'transparent',
    padding: '8px 6px 16px 6px',
  },
});

const NarrowTableCell = styled(StyledTableCell)({
  padding: '12px 4px',
  '&.MuiTableCell-head': {
    padding: '8px 4px 16px 4px',
  }
});

const ActionButton = styled(Button)(({ primary }) => ({
  backgroundColor: '#2D3748',
  color: '#CBD5E0',
  textTransform: 'none',
  borderRadius: '32px', 
  height: '38px', 
  padding: '0 16px',
  '&:hover': {
    backgroundColor: '#4A5568',
  },
}));

const SearchField = styled(TextField)({
  '& .MuiInputBase-root': {
    color: '#CBD5E0',
    backgroundColor: '#2D3748',
    borderRadius: '32px',
    fontSize: '14px',
    height: '38px', 
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
      <StyledTableCell>LINE</StyledTableCell>
      <NarrowTableCell>EFF.</NarrowTableCell>
      <NarrowTableCell>EXP.</NarrowTableCell>
      <NarrowTableCell>STATUS</NarrowTableCell>
      <NarrowTableCell>EXP. TECH</NarrowTableCell>
      <NarrowTableCell>EXP. PREM</NarrowTableCell>
      <NarrowTableCell>REN. TO</NarrowTableCell>
      <NarrowTableCell>REN. TECH</NarrowTableCell>
      <NarrowTableCell>REN. PREM</NarrowTableCell>
      <NarrowTableCell>RATE</NarrowTableCell>
      <NarrowTableCell>LOSS</NarrowTableCell>
      <NarrowTableCell></NarrowTableCell>
    </TableRow>
  </TableHead>
);

const LossRatioBadge = ({ ratio, ratioClass }) => {
  if (ratio === 'N/A') return <Typography sx={{ color: '#F7FAFC', fontSize: '14px' }}>N/A</Typography>;
  
  const getBgColor = () => {
    switch (ratioClass) {
      case 'success': return 'rgba(56, 161, 105, 0.2)';
      case 'warning': return 'rgba(214, 158, 46, 0.2)';
      case 'danger': return 'rgba(229, 62, 62, 0.2)';
      default: return 'transparent';
    }
  };
  
  const getTextColor = () => {
    switch (ratioClass) {
      case 'success': return '#48BB78';
      case 'warning': return '#ECC94B';
      case 'danger': return '#FC8181';
      default: return '#F7FAFC';
    }
  };
  
  return (
    <Box 
      sx={{ 
        backgroundColor: getBgColor(),
        color: getTextColor(),
        borderRadius: '16px',
        padding: '2px 6px',
        display: 'inline-block',
        fontSize: '13px',
        textAlign: 'center',
        fontWeight: 500,
        whiteSpace: 'nowrap',
      }}
    >
      {ratio}
    </Box>
  );
};

const StatusBadge = ({ status }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <CircleIcon 
        sx={{ 
          fontSize: 10, 
          color: status === 'Active' ? '#48BB78' : '#ECC94B',
          mr: 0.5
        }} 
      />
      <Typography 
        sx={{ 
          color: status === 'Active' ? '#48BB78' : '#ECC94B', 
          fontSize: '14px',
        }}
      >
        {status}
      </Typography>
    </Box>
  );
};

const IconInitial = ({ initial, color }) => (
  <Box 
    sx={{
      width: 24,
      height: 24,
      borderRadius: '50%',
      backgroundColor: color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '12px',
      fontWeight: 'bold'
    }}
  >
    {initial}
  </Box>
);

const PolicyRow = ({ policy }) => (
  <TableRow sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.03)' } }}>
    <StyledTableCell>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <IconInitial initial={policy.icon} color={policy.iconColor} />
        <Box sx={{ minWidth: 0, overflow: 'hidden' }}>
          <Typography sx={{ color: '#F7FAFC', fontSize: '14px', fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {policy.line}
          </Typography>
          <Typography sx={{ color: '#718096', fontSize: '12px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {policy.id}
          </Typography>
        </Box>
      </Box>
    </StyledTableCell>
    
    <NarrowTableCell>
      <Typography sx={{ color: '#F7FAFC', fontSize: '14px' }}>
        {policy.effDate}
      </Typography>
    </NarrowTableCell>
    
    <NarrowTableCell>
      <Typography sx={{ color: '#F7FAFC', fontSize: '14px' }}>
        {policy.expDate}
      </Typography>
    </NarrowTableCell>
    
    <NarrowTableCell>
      <StatusBadge status={policy.status} />
    </NarrowTableCell>
    
    <NarrowTableCell>
      <Typography sx={{ color: '#F7FAFC', fontSize: '14px' }}>
        {policy.expiringTech}
      </Typography>
    </NarrowTableCell>
    
    <NarrowTableCell>
      <Typography sx={{ color: '#F7FAFC', fontSize: '14px' }}>
        {policy.expiringPremium}
      </Typography>
    </NarrowTableCell>
    
    <NarrowTableCell>
      <Typography sx={{ color: '#F7FAFC', fontSize: '14px' }}>
        {policy.renewalToTech}
      </Typography>
    </NarrowTableCell>
    
    <NarrowTableCell>
      <Typography sx={{ color: '#F7FAFC', fontSize: '14px' }}>
        {policy.renewalTech}
      </Typography>
    </NarrowTableCell>
    
    <NarrowTableCell>
      <Typography sx={{ color: '#F7FAFC', fontSize: '14px' }}>
        {policy.renewalPremium}
      </Typography>
    </NarrowTableCell>
    
    <NarrowTableCell>
      <Typography sx={{ 
        color: policy.rateChange !== 'N/A' ? '#F56565' : '#F7FAFC', 
        fontSize: '14px' 
      }}>
        {policy.rateChange}
      </Typography>
    </NarrowTableCell>
    
    <NarrowTableCell>
      <LossRatioBadge ratio={policy.lossRatio} ratioClass={policy.lossRatioClass} />
    </NarrowTableCell>
    
    <NarrowTableCell align="center" sx={{ padding: '0 2px' }}>
      <IconButton size="small" sx={{ color: '#A0AEC0' }}>
        <InfoIcon />
      </IconButton>
    </NarrowTableCell>
  </TableRow>
);

const TotalRow = ({ totals }) => (
  <TableRow>
    <StyledTableCell sx={{ borderBottom: 'none' }}>
      <Typography sx={{ color: '#F7FAFC', fontSize: '14px', fontWeight: 500 }}>
        TOTAL ({policiesTableData.length})
      </Typography>
    </StyledTableCell>
    
    <NarrowTableCell sx={{ borderBottom: 'none' }}></NarrowTableCell>
    <NarrowTableCell sx={{ borderBottom: 'none' }}></NarrowTableCell>
    <NarrowTableCell sx={{ borderBottom: 'none' }}></NarrowTableCell>
    
    <NarrowTableCell sx={{ borderBottom: 'none' }}>
      <Typography sx={{ color: '#F7FAFC', fontSize: '14px', fontWeight: 500 }}>
        {totals.expiringTech}
      </Typography>
    </NarrowTableCell>
    
    <NarrowTableCell sx={{ borderBottom: 'none' }}>
      <Typography sx={{ color: '#F7FAFC', fontSize: '14px', fontWeight: 500 }}>
        {totals.expiringPremium}
      </Typography>
    </NarrowTableCell>
    
    <NarrowTableCell sx={{ borderBottom: 'none' }}>
      <Typography sx={{ color: '#F7FAFC', fontSize: '14px', fontWeight: 500 }}>
        {totals.renewalToTech}
      </Typography>
    </NarrowTableCell>
    
    <NarrowTableCell sx={{ borderBottom: 'none' }}>
      <Typography sx={{ color: '#F7FAFC', fontSize: '14px', fontWeight: 500 }}>
        {totals.renewalTech}
      </Typography>
    </NarrowTableCell>
    
    <NarrowTableCell sx={{ borderBottom: 'none' }}>
      <Typography sx={{ color: '#F7FAFC', fontSize: '14px', fontWeight: 500 }}>
        {totals.renewalPremium}
      </Typography>
    </NarrowTableCell>
    
    <NarrowTableCell sx={{ borderBottom: 'none' }}>
      <Typography sx={{ color: '#F56565', fontSize: '14px', fontWeight: 500 }}>
        {totals.rateChange}
      </Typography>
    </NarrowTableCell>
    
    <NarrowTableCell sx={{ borderBottom: 'none' }}>
      <LossRatioBadge ratio={totals.lossRatio} ratioClass={totals.lossRatioClass} />
    </NarrowTableCell>
    
    <NarrowTableCell sx={{ borderBottom: 'none' }}></NarrowTableCell>
  </TableRow>
);

const HeaderControls = () => (
  <Box sx={{ 
    display: 'flex', 
    alignItems: 'center',
    mb: 3,
    gap: 2
  }}>
    {/* Left elements */}
    <Box sx={{ display: 'flex', gap: 2 }}>
      <SearchField
        placeholder="Search"
        size="small"
        InputProps={{
          startAdornment: <SearchIcon sx={{ color: 'grey.500', ml: 1, mr: 0.5 }} />,
        }}
        sx={{ width: '240px' }}
      />

      <ActionButton startIcon={<FilterAltIcon />}>
        Filter
      </ActionButton>

      <ActionButton>
        Group
      </ActionButton>
    </Box>
    
    <Box sx={{ ml: 'auto' }}></Box>
  </Box>
);

const Policies = () => (
  <PoliciesOuterContainer>
    <PageTitle>Policies</PageTitle>
    <PoliciesContainer>
      <HeaderControls />
      
      <TableContainer>
        <Table size="small">
          <TableHeader />
          <TableBody>
            {policiesTableData.map((policy, index) => (
              <PolicyRow key={index} policy={policy} />
            ))}
            <TotalRow totals={policyTotals} />
          </TableBody>
        </Table>
      </TableContainer>
    </PoliciesContainer>
  </PoliciesOuterContainer>
);

export default Policies;