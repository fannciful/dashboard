import React from 'react';
import { styled } from '@mui/system';
import { Box, TextField, Typography, InputAdornment } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Button from '@mui/material/Button';
import AttachmentIcon from '@mui/icons-material/Attachment';
import { messagesData, getLeftColumnMessages, getRightColumnMessages } from '../../mockData/CommunicationData';

const CommunicationContainer = styled(Box)(({ theme }) => ({
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

const ContentContainer = styled(Box)({
  backgroundColor: '#171923',
  borderRadius: '16px',
  padding: '24px',
  width: '100%',
  height: 'auto',
});

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

const ActionButton = styled(Button)({
  backgroundColor: '#2D3748',
  color: '#CBD5E0',
  textTransform: 'none',
  borderRadius: '32px',
  height: '38px',
  padding: '0 16px',
  '&:hover': {
    backgroundColor: '#4A5568',
  },
});

const MessageCard = styled(Box)({
  backgroundColor: '#171923',
  borderRadius: '12px',
  border: '1px solid #2D3748',
  padding: '16px',
  marginBottom: '16px',
  width: '100%',
});

const MessageHeader = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '8px',
});

const StatusBadge = styled(Box)(({ color }) => ({
  backgroundColor: color || '#3182CE',
  color: '#FFFFFF',
  borderRadius: '16px',
  padding: '4px 12px',
  fontSize: '12px',
  fontWeight: 600,
  marginRight: '12px',
}));

const MessageTitle = styled(Typography)({
  fontSize: '18px',
  fontWeight: 600,
  color: '#FFFFFF',
  flex: 1,
});

const SenderInfo = styled(Typography)({
  fontSize: '14px',
  color: '#A0AEC0',
  marginBottom: '8px',
});

const MessageBody = styled(Typography)({
  fontSize: '14px',
  color: '#E2E8F0',
  marginBottom: '16px',
});

const AttachmentButton = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  padding: '6px 12px',
  backgroundColor: '#2D3748',
  borderRadius: '16px',
  color: '#A0AEC0',
  fontSize: '14px',
  width: 'fit-content',
  marginBottom: '12px',
});

const ReplyButton = styled(Button)({
  backgroundColor: '#3182CE',
  color: '#FFFFFF',
  borderRadius: '16px',
  padding: '6px 24px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#2C5282',
  },
});

const MessagesContainer = styled(Box)({
  display: 'flex',
  gap: '16px',
  flexWrap: 'wrap',
});

const MessageColumn = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  minWidth: '300px',
});

const HeaderControls = () => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      mb: 3,
      gap: 2,
    }}
  >
    <SearchField
      placeholder="Search"
      sx={{ width: '240px' }}
    />
    <ActionButton startIcon={<FilterAltIcon />}>
      Filter
    </ActionButton>
    <ActionButton>
      Group
    </ActionButton>
  </Box>
);

const Message = ({ status, statusColor, title, sender, date, body, attachments, truncated }) => (
  <MessageCard>
    <MessageHeader>
      <StatusBadge color={statusColor}>{status}</StatusBadge>
      <MessageTitle>{title}</MessageTitle>
    </MessageHeader>
    <SenderInfo>{sender} // {date}</SenderInfo>
    <MessageBody>
      {body}
      {truncated && '...'}
    </MessageBody>
    {attachments > 0 && (
      <AttachmentButton>
        <AttachmentIcon sx={{ fontSize: 16, mr: 1 }} />
        {attachments} attachments
      </AttachmentButton>
    )}
    <ReplyButton>Reply</ReplyButton>
  </MessageCard>
);

const Communication = () => {
  const leftColumnMessages = getLeftColumnMessages();
  const rightColumnMessages = getRightColumnMessages();

  return (
    <CommunicationContainer>
      <PageTitle>Communication</PageTitle>
      <ContentContainer>
        <HeaderControls />
        <MessagesContainer>
          <MessageColumn>
            {leftColumnMessages.map(message => (
              <Message
                key={message.id}
                status={message.status}
                statusColor={message.statusColor}
                title={message.title}
                sender={message.sender}
                date={message.date}
                body={message.body}
                attachments={message.attachments}
                truncated={message.truncated}
              />
            ))}
          </MessageColumn>
          <MessageColumn>
            {rightColumnMessages.map(message => (
              <Message
                key={message.id}
                status={message.status}
                statusColor={message.statusColor}
                title={message.title}
                sender={message.sender}
                date={message.date}
                body={message.body}
                attachments={message.attachments}
                truncated={message.truncated}
              />
            ))}
          </MessageColumn>
        </MessagesContainer>
      </ContentContainer>
    </CommunicationContainer>
  );
};

export default Communication;