import React, { useState } from 'react';
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
  Avatar,
  styled
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { workQueueData, workQueueCounts } from '../../mockData/WorkGueueData';

const StyledTableCell = styled(TableCell)({
  borderBottom: '1px solid #2a2e35',
  padding: '10px 14px', 
  color: '#9ca3af',
  fontSize: '14px',
  '&.MuiTableCell-head': {
    color: '#6b7280',
    fontSize: '12px',
    fontWeight: 500,
    textTransform: 'uppercase',
    backgroundColor: 'transparent',
  },
});

const StatusDot = styled('span')(({ status }) => ({
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  display: 'inline-block',
  marginRight: '6px', 
  backgroundColor: status === 'New' ? '#3b82f6' : 
                  status === 'Pending Review' ? '#f59e0b' : 
                  status === 'Completed' ? '#22c55e' : '#6b7280'
}));

const TabButton = styled(Button)(({ active }) => ({
  color: active ? '#ffffff' : '#9ca3af',
  backgroundColor: active ? '#3b82f6' : 'transparent', 
  borderRadius: '9999px', 
  padding: '8px 16px', 
  textTransform: 'none',
  fontSize: '14px',
  fontWeight: 500,
  minWidth: 'auto',
  border: 'none',
  '&:hover': {
    backgroundColor: active ? '#3b82f6' : 'rgba(255, 255, 255, 0.05)',
    color: '#ffffff',
  },
  boxShadow: active ? '0 2px 8px rgba(59, 130, 246, 0.3)' : 'none',
}));

const AvatarBadge = styled(Avatar)({
  width: '24px',
  height: '24px',
  fontSize: '12px',
  backgroundColor: '#3b82f6',
  marginRight: '6px' 
});

const WorkQueue = () => {
  const [activeTab, setActiveTab] = useState('assigned');

  return (
    <Box sx={{
      backgroundColor: '#1a1d23',
      borderRadius: '12px',
      p: 2.5,
      width: '100%',
      height: '610px',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        mb: 2 
      }}>
        <Typography sx={{ 
          color: '#ffffff', 
          fontSize: '18px', 
          fontWeight: 500 
        }}>
          Work Queue
        </Typography>
      </Box>

      <Box sx={{ mb: 2.5 }}>
        <Box 
          sx={{ 
            display: 'flex', 
            gap: 1, 
            width: '70%',
            backgroundColor: '#141921',
            borderRadius: '9999px',
            padding: '4px',
          }}
        >
          <TabButton 
            fullWidth
            active={activeTab === 'assigned'} 
            onClick={() => setActiveTab('assigned')}
          >
            Assigned to me({workQueueCounts.assigned})
          </TabButton>
          <TabButton 
            fullWidth
            active={activeTab === 'pending'} 
            onClick={() => setActiveTab('pending')}
          >
            Pending Review ({workQueueCounts.pending})
          </TabButton>
          <TabButton 
            fullWidth
            active={activeTab === 'referrals'} 
            onClick={() => setActiveTab('referrals')}
          >
            Referrals ({workQueueCounts.referrals})
          </TabButton>
        </Box>
      </Box>

      <TableContainer sx={{ flexGrow: 1, overflow: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>ORIGINATOR</StyledTableCell>
              <StyledTableCell>CLIENT/LINE</StyledTableCell>
              <StyledTableCell>TYPE</StyledTableCell>
              <StyledTableCell>STATUS</StyledTableCell>
              <StyledTableCell>CREATED</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {workQueueData.map((row, index) => (
              <TableRow key={index} sx={{ 
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.02)' },
                '& td': { borderBottom: index === workQueueData.length - 1 ? 'none' : '1px solid #2a2e35' }
              }}>
                <StyledTableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <AvatarBadge>{row.originator.initials}</AvatarBadge>
                    <Typography sx={{ color: '#ffffff', fontSize: '14px' }}>
                      {row.originator.name}
                    </Typography>
                  </Box>
                </StyledTableCell>
                <StyledTableCell>
                  <Typography sx={{ color: '#ffffff', fontSize: '14px', lineHeight: 1.3 }}>
                    {row.clientLine}
                  </Typography>
                  <Typography sx={{ color: '#6b7280', fontSize: '12px', lineHeight: 1.3 }}>
                    {row.clientSubtitle}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <Typography sx={{ color: '#ffffff', fontSize: '14px' }}>
                    {row.type}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <StatusDot status={row.status} />
                    <Typography sx={{ color: '#ffffff', fontSize: '14px' }}>
                      {row.status}
                    </Typography>
                  </Box>
                </StyledTableCell>
                <StyledTableCell>
                  <Typography sx={{ color: '#ffffff', fontSize: '14px' }}>
                    {row.created}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <IconButton size="small" sx={{ color: '#9ca3af' }}>
                    <MoreHorizIcon />
                  </IconButton>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default WorkQueue;