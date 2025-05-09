import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import { 
  winnabilityData, 
  lossRatioData, 
  premiumGrowthData, 
  exposureDistributionData 
} from '../../mockData/MetricsData'; 

const MetricsContainer = styled(Box)({
  width: '100%',
  backgroundColor: '#121418',
  padding: '16px 0',
});

const MetricsTitle = styled(Typography)({
  fontSize: '24px',
  fontWeight: 600,
  color: '#ffffff',
  marginBottom: '16px',
  paddingLeft: '32px', 
});

const MetricsGrid = styled(Box)({
  display: 'flex',
  gap: '16px',
  width: '100%',
  paddingLeft: '16px',
  paddingRight: '16px',
});

const MetricCard = styled(Box)({
  flex: 1,
  backgroundColor: '#171923',
  borderRadius: '12px',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '150px',
});

const LabelWithDots = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '10px',
});

const MetricLabel = styled(Typography)({
  fontSize: '15px',
  fontWeight: 500,
  color: '#CBD5E0',
});

const RatingDots = styled(Box)({
  display: 'flex',
  gap: '4px',
});

const Dot = styled(Box)(({ filled }) => ({
  width: '7px',
  height: '7px',
  borderRadius: '50%',
  backgroundColor: filled ? '#3182CE' : 'rgba(49, 130, 206, 0.2)',
}));

const MetricContent = styled(Box)({
  display: 'flex',
  marginTop: '20px',
});

const MetricValueContainer = styled(Box)({
  flex: '0 0 auto',
  marginRight: '12px',
});

const MetricValue = styled(Typography)(({ large }) => ({
  fontSize: large ? '34px' : '38px',
  fontWeight: 600,
  color: '#ffffff',
  lineHeight: 1.1,
}));

const MetricSubValueBlock = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

const MetricSubValue = styled(Typography)({
  fontSize: '13px',
  color: '#A0AEC0',
});

const ActionLink = styled(Typography)({
  color: '#3182CE',
  fontSize: '13px',
  display: 'flex',
  alignItems: 'center',
  marginTop: 'auto',
  cursor: 'pointer',
});

const DistributionContainer = styled(Box)({
  marginTop: '24px',
});

const DistributionRow = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '16px',
  width: '100%',
});

const BarContainer = styled(Box)({
  width: '55%',
  height: '8px',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '4px',
  position: 'relative',
  marginRight: '16px',
});

const Bar = styled(Box)(({ width }) => ({
  position: 'absolute',
  left: 0,
  top: 0,
  height: '8px',
  width: width,
  backgroundColor: '#3182CE',
  borderRadius: '4px',
}));

const DistributionTextContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '45%',
});

const DistributionLabel = styled(Typography)({
  fontSize: '14px',
  color: '#CBD5E0',
  whiteSpace: 'nowrap',
});

const DistributionValue = styled(Typography)({
  fontSize: '14px',
  fontWeight: 500,
  color: '#ffffff',
});

const PerformanceMetrics = () => {
  return (
    <MetricsContainer>
      <MetricsTitle>Performance Metrics</MetricsTitle>
      
      <MetricsGrid>
        {/* Winnability Card */}
        <MetricCard>
          <Box>
            <LabelWithDots>
              <MetricLabel>{winnabilityData.label}</MetricLabel>
              <RatingDots>
                {[...Array(4)].map((_, index) => (
                  <Dot key={index} filled={index < winnabilityData.ratingDots} />
                ))}
              </RatingDots>
            </LabelWithDots>
            
            <MetricContent>
              <MetricValueContainer>
                <MetricValue large>{winnabilityData.value}</MetricValue>
              </MetricValueContainer>
            </MetricContent>
          </Box>
          <ActionLink>
            {winnabilityData.actionText}
          </ActionLink>
        </MetricCard>
        
        {/* Loss Ratio Card */}
        <MetricCard>
          <Box>
            <MetricLabel>{lossRatioData.label}</MetricLabel>
            
            <MetricContent>
              <MetricValueContainer>
                <MetricValue>{lossRatioData.value}</MetricValue>
              </MetricValueContainer>
              <MetricSubValueBlock>
                <MetricSubValue>{lossRatioData.subValue}</MetricSubValue>
              </MetricSubValueBlock>
            </MetricContent>
          </Box>
          <ActionLink>
            {lossRatioData.actionText}
          </ActionLink>
        </MetricCard>
        
        {/* Premium Growth Card */}
        <MetricCard>
          <Box>
            <MetricLabel>{premiumGrowthData.label}</MetricLabel>
            
            <MetricContent>
              <MetricValueContainer>
                <MetricValue>{premiumGrowthData.value}</MetricValue>
              </MetricValueContainer>
              <MetricSubValueBlock>
                <MetricSubValue>{premiumGrowthData.subValue}</MetricSubValue>
              </MetricSubValueBlock>
            </MetricContent>
            <MetricSubValue sx={{ mt: 1 }}>{premiumGrowthData.additionalInfo}</MetricSubValue>
          </Box>
          <ActionLink>
            {premiumGrowthData.actionText}
          </ActionLink>
        </MetricCard>
        
        {/* Exposure Distribution Card */}
        <MetricCard>
          <Box>
            <MetricLabel>{exposureDistributionData.label}</MetricLabel>
            
            <DistributionContainer>
              {exposureDistributionData.distributions.map((item, index) => (
                <DistributionRow key={index}>
                  <BarContainer>
                    <Bar width={item.width} />
                  </BarContainer>
                  <DistributionTextContainer>
                    <DistributionLabel>{item.label}: </DistributionLabel>
                    <DistributionValue>{item.value}</DistributionValue>
                  </DistributionTextContainer>
                </DistributionRow>
              ))}
            </DistributionContainer>
          </Box>
        </MetricCard>
      </MetricsGrid>
    </MetricsContainer>
  );
};

export default PerformanceMetrics;