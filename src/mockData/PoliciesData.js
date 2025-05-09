export const policiesTableData = [
  {
    line: 'Marine Cargo',
    id: '17050212',
    icon: 'M',
    iconColor: '#4299E1',
    effDate: '6/30/2026',
    expDate: '6/30/2027',
    status: 'Active',
    expiringTech: '$587,500',
    expiringPremium: '$605,000',
    renewalToTech: '$610,000',
    renewalTech: '$620,000',
    renewalPremium: '$625,000',
    rateChange: '3.3%',
    lossRatio: '22%',
    lossRatioClass: 'success'
  },
  {
    line: 'General Liability',
    id: '4631092',
    icon: 'G',
    iconColor: '#48BB78',
    effDate: '6/30/2026',
    expDate: '6/30/2027',
    status: 'Active',
    expiringTech: '$160,000',
    expiringPremium: '$165,000',
    renewalToTech: '$170,000',
    renewalTech: '$172,500',
    renewalPremium: '$175,000',
    rateChange: '6.1%',
    lossRatio: '55%',
    lossRatioClass: 'warning'
  },
  {
    line: 'Workers Comp',
    id: '9182371',
    icon: 'W',
    iconColor: '#9F7AEA',
    effDate: 'Pending',
    expDate: 'Pending',
    status: 'Pending',
    expiringTech: '$0',
    expiringPremium: '$0',
    renewalToTech: '$73,500',
    renewalTech: '$75,000',
    renewalPremium: '$75,000',
    rateChange: 'N/A',
    lossRatio: 'N/A',
    lossRatioClass: 'none'
  },
  {
    line: 'Umbrella',
    id: '5276935',
    icon: 'U',
    iconColor: '#F56565',
    effDate: '13/03/2026',
    expDate: '13/03/2027',
    status: 'Active',
    expiringTech: '$245,000',
    expiringPremium: '$250,000',
    renewalToTech: '$267,500',
    renewalTech: '$270,000',
    renewalPremium: '$275,000',
    rateChange: '10.0%',
    lossRatio: '78%',
    lossRatioClass: 'danger'
  }
];

export const calculateTotals = (policiesData = policiesTableData) => {
  const totals = {
    expiringTech: policiesData.reduce((sum, policy) => {
      const value = policy.expiringTech === 'N/A' ? 0 : parseInt(policy.expiringTech.replace(/\$|,/g, ''), 10);
      return sum + value;
    }, 0),
    expiringPremium: policiesData.reduce((sum, policy) => {
      const value = policy.expiringPremium === 'N/A' ? 0 : parseInt(policy.expiringPremium.replace(/\$|,/g, ''), 10);
      return sum + value;
    }, 0),
    renewalToTech: policiesData.reduce((sum, policy) => {
      const value = policy.renewalToTech === 'N/A' ? 0 : parseInt(policy.renewalToTech.replace(/\$|,/g, ''), 10);
      return sum + value;
    }, 0),
    renewalTech: policiesData.reduce((sum, policy) => {
      const value = policy.renewalTech === 'N/A' ? 0 : parseInt(policy.renewalTech.replace(/\$|,/g, ''), 10);
      return sum + value;
    }, 0),
    renewalPremium: policiesData.reduce((sum, policy) => {
      const value = policy.renewalPremium === 'N/A' ? 0 : parseInt(policy.renewalPremium.replace(/\$|,/g, ''), 10);
      return sum + value;
    }, 0),
  };

  const formatCurrency = (num) => {
    if (num >= 1000000) {
      return `$${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `$${(num / 1000).toFixed(0)}K`;
    }
    return `$${num.toLocaleString()}`;
  };

  const validRateChanges = policiesData
    .filter(policy => policy.rateChange !== 'N/A')
    .map(policy => parseFloat(policy.rateChange.replace('%', '')));
  
  const avgRateChange = validRateChanges.length > 0
    ? validRateChanges.reduce((sum, rate) => sum + rate, 0) / validRateChanges.length
    : 0;

  const validLossRatios = policiesData
    .filter(policy => policy.lossRatio !== 'N/A')
    .map(policy => parseInt(policy.lossRatio.replace('%', ''), 10));
  
  const avgLossRatio = validLossRatios.length > 0
    ? validLossRatios.reduce((sum, ratio) => sum + ratio, 0) / validLossRatios.length
    : 0;

  return {
    expiringTech: formatCurrency(totals.expiringTech),
    expiringPremium: formatCurrency(totals.expiringPremium),
    renewalToTech: formatCurrency(totals.renewalToTech),
    renewalTech: formatCurrency(totals.renewalTech),
    renewalPremium: formatCurrency(totals.renewalPremium),
    rateChange: `${avgRateChange.toFixed(1)}%`,
    lossRatio: `${avgLossRatio.toFixed(1)}%`,
    lossRatioClass: avgLossRatio < 40 ? 'success' : avgLossRatio < 60 ? 'warning' : 'danger'
  };
};

export const policyTotals = calculateTotals();