import React from 'react';
import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';
import { policyCardsData, getIconComponent } from '../../mockData/PoliciesTwoData';

const PoliciesContainer = styled(Box)(({ theme }) => ({
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
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  gap: '16px',
});

const PolicyCard = styled(Box)({
  backgroundColor: '#1E2433',
  borderRadius: '12px',
  padding: '16px',
  flex: '1 1 200px',
  minWidth: '200px',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  height: 'auto',
});

const IconContainer = styled(Box)(({ color }) => ({
  color: color,
  marginBottom: '4px',
  display: 'flex',
  alignItems: 'center',
  '& svg': {
    fontSize: '24px',
  }
}));

const PolicyName = styled(Typography)({
  fontSize: '16px',
  fontWeight: 600,
  color: '#FFFFFF',
  marginTop: '2px',
});

const PolicyDetail = styled(Typography)({
  fontSize: '14px',
  color: '#A0AEC0',
  lineHeight: 1.2,
});

const Policy = ({ icon, name, premium, effDate }) => (
  <PolicyCard>
    {icon}
    <PolicyName>{name}</PolicyName>
    <PolicyDetail>Premium: {premium}</PolicyDetail>
    <PolicyDetail>Eff.Date: {effDate}</PolicyDetail>
  </PolicyCard>
);

const PoliciesTwo = () => {
  const policiesWithIcons = policyCardsData.map(policy => {
    const IconComponent = getIconComponent(policy.iconType);
    return {
      ...policy,
      icon: (
        <IconContainer color={policy.iconColor}>
          <IconComponent />
        </IconContainer>
      )
    };
  });

  return (
    <PoliciesContainer>
      <PageTitle>Policies</PageTitle>
      <ContentContainer>
        {policiesWithIcons.map(policy => (
          <Policy
            key={policy.id}
            icon={policy.icon}
            name={policy.name}
            premium={policy.premium}
            effDate={policy.effDate}
          />
        ))}
      </ContentContainer>
    </PoliciesContainer>
  );
};

export default PoliciesTwo;