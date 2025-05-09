export const winnabilityData = {
  label: 'Winnability',
  value: 'Very Strong',
  ratingDots: 4, 
  actionText: 'See all factors →'
};

export const lossRatioData = {
  label: 'Loss Ratio',
  value: '25%',
  subValue: 'vs 42% target',
  actionText: 'View history →'
};

export const premiumGrowthData = {
  label: 'Premium Growth',
  value: '12.4%',
  subValue: 'YoY increase',
  additionalInfo: '$123M vs $150M Target',
  actionText: 'View trend →'
};

export const exposureDistributionData = {
  label: 'Exposure Distribution',
  distributions: [
    { label: 'Marine Cargo', value: '71.4%', width: '71.4%' },
    { label: 'General Liability', value: '20%', width: '20%' },
    { label: 'Workers Comp', value: '8.6%', width: '8.6%' }
  ]
};

export const performanceMetricsData = {
  winnability: winnabilityData,
  lossRatio: lossRatioData,
  premiumGrowth: premiumGrowthData,
  exposureDistribution: exposureDistributionData
};