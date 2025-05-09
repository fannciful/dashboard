import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { accountSteps, complianceItems } from '../../mockData/AccountStatusData';

const StatusContainer = styled(Box)({
  width: '100%',
  backgroundColor: '#121418',
  padding: '12px 0',
  display: 'flex',
  gap: '5px',
});

const AccountStatusSection = styled(Box)({
  flex: '1.5',
});

const ComplianceSection = styled(Box)({
  flex: '1',
});

const SectionTitle = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '12px',
  paddingLeft: '32px',
  paddingRight: '16px',
});

const StatusTitle = styled(Typography)({
  fontSize: '24px',
  fontWeight: 600,
  color: '#ffffff',
});

const SeeHistoryLink = styled(Typography)({
  color: '#3182CE',
  fontSize: '14px',
  cursor: 'pointer',
});

const StatusCard = styled(Box)({
  backgroundColor: '#171923',
  borderRadius: '14px',
  padding: '20px',
  minHeight: '110px',
  marginLeft: '12px',
  marginRight: '12px',
});

const StatusProgressContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  marginBottom: '20px',
});

const StatusDottedLine = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '0',
  right: '0',
  height: '1px',
  borderBottom: '2px dashed rgba(255, 255, 255, 0.2)',
  zIndex: 0,
});

const StatusStep = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  zIndex: 1,
});

const StepIcon = styled(Box)(({ completed }) => ({
  color: completed ? '#38A169' : 'rgba(255, 255, 255, 0.3)',
  backgroundColor: '#121418',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '6px',
}));

const StepLabel = styled(Typography)({
  color: '#CBD5E0',
  fontSize: '14px',
  fontWeight: 500,
});

const ComplianceCard = styled(Box)({
  backgroundColor: '#171923',
  borderRadius: '14px',
  padding: '20px',
  minHeight: '110px',
  marginLeft: '12px',
  marginRight: '12px',
});

const ComplianceGrid = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '12px',
});

const ComplianceItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
});

const ComplianceText = styled(Typography)({
  color: '#CBD5E0',
  fontSize: '14px',
});

const AccountStatus = () => {
  return (
    <StatusContainer>
      {/* Account Status Section */}
      <AccountStatusSection>
        <SectionTitle>
          <StatusTitle>Account Status</StatusTitle>
        </SectionTitle>
        <StatusCard>
          <StatusProgressContainer>
            <StatusDottedLine />
            {accountSteps.map((step) => (
              <StatusStep key={step.id}>
                <StepIcon completed={step.completed}>
                  {step.completed ? (
                    <CheckCircleIcon sx={{ fontSize: 20 }} />
                  ) : (
                    <RadioButtonUncheckedIcon sx={{ fontSize: 20 }} />
                  )}
                </StepIcon>
                <StepLabel>{step.label}</StepLabel>
              </StatusStep>
            ))}
          </StatusProgressContainer>
        </StatusCard>
      </AccountStatusSection>

      {/* Compliance & Documentation Section */}
      <ComplianceSection>
        <SectionTitle>
          <StatusTitle>Compliance & Documentation</StatusTitle>
          <SeeHistoryLink>See history →</SeeHistoryLink>
        </SectionTitle>
        <ComplianceCard>
          <ComplianceGrid>
            {complianceItems.map((item) => (
              <ComplianceItem key={item.id}>
                <CheckCircleIcon
                  sx={{
                    color: item.completed ? '#38A169' : 'rgba(255, 255, 255, 0.3)',
                    fontSize: 18,
                  }}
                />
                <ComplianceText>{item.label}</ComplianceText>
              </ComplianceItem>
            ))}
          </ComplianceGrid>
        </ComplianceCard>
      </ComplianceSection>
    </StatusContainer>
  );
};

export default AccountStatus;
