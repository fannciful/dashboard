import React from 'react';
import { Box, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import RocketIcon from '@mui/icons-material/Rocket';
import { 
  positionData, 
  increasingFactors, 
  decreasingFactors, 
  recommendations,
  OVERALL_SCORE,
  RATING_DOTS,
  RATING_TEXT,
  CHART_MONTHS
} from '../../mockData/WinnabilityData'; 

const COLORS = {
  background: '#121418',
  cardBackground: '#1A202C',
  primary: '#3182CE',
  success: '#48BB78',
  danger: '#E53E3E',
  text: {
    primary: '#FFFFFF',
    secondary: '#E2E8F0',
    tertiary: '#A0AEC0',
    quaternary: '#718096',
  },
  darkBackground: '#171923',
  divider: 'rgba(255, 255, 255, 0.1)',
  progressBackground: 'rgba(255, 255, 255, 0.05)',
};

const styles = {
  container: {
    width: '100%',
    backgroundColor: COLORS.background,
    padding: '16px 0',
  },
  title: {
    fontSize: '24px',
    fontWeight: 600,
    color: COLORS.text.primary,
    marginBottom: '16px',
    paddingLeft: '32px',
  },
  mainContainer: {
    backgroundColor: COLORS.darkBackground,
    borderRadius: '16px',
    margin: '0 16px',
    display: 'flex',
    overflow: 'hidden',
  },
  sidebar: {
    container: {
      width: '280px',
      backgroundColor: COLORS.darkBackground,
      padding: '24px 20px',
      position: 'relative',
    },
    section: {
      marginBottom: '32px',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '16px',
    },
    title: {
      fontSize: '16px',
      fontWeight: 600,
      color: COLORS.text.primary,
      letterSpacing: '0.5px',
    },
    badge: {
      backgroundColor: '#2D3748',
      borderRadius: '50%',
      width: '32px',
      height: '32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '16px',
      fontWeight: 500,
      color: COLORS.text.primary,
    },
    link: {
      fontSize: '16px',
      color: COLORS.primary,
      marginBottom: '16px',
      cursor: 'pointer',
      paddingLeft: '4px',
    },
    item: {
      fontSize: '16px',
      color: COLORS.text.tertiary,
      marginBottom: '16px',
      cursor: 'pointer',
      paddingLeft: '4px',
    },
    divider: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: '1px',
      height: '100%',
      borderRight: `1px dashed ${COLORS.divider}`,
    },
  },
  content: {
    container: {
      flex: 1,
      padding: '24px',
      backgroundColor: COLORS.darkBackground,
    },
    header: {
      fontSize: '32px',
      fontWeight: 700,
      color: COLORS.text.primary,
      marginBottom: '24px',
    },
    metricsGrid: {
      display: 'flex',
      gap: '16px',
      marginBottom: '24px',
    },
  },
  metricCard: {
    container: {
      flex: 1,
      backgroundColor: COLORS.cardBackground,
      borderRadius: '12px',
      padding: '10px',
      display: 'flex',
      flexDirection: 'column',
      height: '140px',
    },
    title: {
      fontSize: '14px',
      color: COLORS.text.tertiary,
      marginBottom: '10px',
    },
    scoreValue: {
      fontSize: '42px',
      fontWeight: 700,
      color: COLORS.text.primary,
      marginBottom: '6px',
      lineHeight: 1,
    },
    ratingContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    ratingDots: {
      display: 'flex',
      gap: '3px',
    },
    dot: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      backgroundColor: COLORS.primary,
    },
    ratingText: {
      fontSize: '14px',
      color: COLORS.primary,
    },
  },
  trendChart: {
    container: {
      height: '60px',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      position: 'relative',
      marginTop: '12px',
    },
    trendLine: {
      position: 'absolute',
      bottom: '15px',
      left: '0',
      width: '100%',
      height: '45px',
      backgroundImage: `linear-gradient(90deg, transparent, ${COLORS.primary} 10%, ${COLORS.primary} 20%, ${COLORS.primary} 30%, ${COLORS.primary} 40%, ${COLORS.primary} 50%, ${COLORS.primary} 60%, ${COLORS.primary} 70%, ${COLORS.primary} 80%, ${COLORS.primary} 90%, ${COLORS.primary} 100%)`,
      clipPath: 'polygon(0% 100%, 10% 80%, 20% 85%, 30% 70%, 40% 90%, 50% 75%, 60% 65%, 70% 55%, 80% 40%, 90% 30%, 100% 20%, 100% 100%)',
      opacity: 0.3,
    },
    trendLinePath: {
      position: 'absolute',
      bottom: '15px',
      left: '0',
      width: '100%',
      height: '45px',
      '&:after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'none',
        borderBottom: 'none',
        borderTop: `2px solid ${COLORS.primary}`,
        clipPath: 'polygon(0% 80%, 10% 80%, 20% 85%, 30% 70%, 40% 90%, 50% 75%, 60% 65%, 70% 55%, 80% 40%, 90% 30%, 100% 20%)',
      }
    },
    monthsContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      marginTop: '6px',
    },
    monthLabel: {
      fontSize: '11px',
      color: COLORS.text.quaternary,
    },
  },
  position: {
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      marginTop: '8px',
    },
    item: {
      display: 'flex',
      alignItems: 'center',
    },
    label: {
      fontSize: '13px',
      color: COLORS.text.tertiary,
      width: '130px',
    },
    bar: {
      flex: 1,
      height: '6px',
      backgroundColor: COLORS.divider,
      borderRadius: '3px',
      margin: '0 12px',
      overflow: 'hidden',
      position: 'relative',
    },
    barFill: {
      position: 'absolute',
      left: 0,
      top: 0,
      height: '100%',
      backgroundColor: COLORS.primary,
      borderRadius: '3px',
    },
    value: {
      fontSize: '13px',
      color: COLORS.text.primary,
      width: '45px',
      textAlign: 'right',
    },
  },
  factors: {
    container: {
      display: 'flex',
      gap: '16px',
      marginBottom: '24px',
    },
    section: {
      flex: 1,
      backgroundColor: COLORS.cardBackground,
      borderRadius: '12px',
      padding: '24px',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '24px',
    },
    icon: {
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      backgroundColor: COLORS.progressBackground,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '12px',
    },
    title: {
      fontSize: '16px',
      fontWeight: 600,
      color: COLORS.text.primary,
    },
    list: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    item: {
      display: 'flex',
      alignItems: 'flex-start',
    },
    number: {
      width: '28px',
      height: '28px',
      borderRadius: '50%',
      backgroundColor: COLORS.progressBackground,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '14px',
      fontWeight: 600,
      marginRight: '12px',
      flexShrink: 0,
    },
    info: {
      flex: 1,
      marginRight: '16px',
    },
    name: {
      fontSize: '14px',
      color: COLORS.text.secondary,
      marginBottom: '8px',
    },
    progressContainer: {
      width: '100%',
      height: '8px',
      backgroundColor: COLORS.progressBackground,
      borderRadius: '4px',
      position: 'relative',
    },
    progressBar: {
      position: 'absolute',
      left: 0,
      top: 0,
      height: '100%',
      borderRadius: '4px',
    },
    value: {
      fontSize: '14px',
      fontWeight: 500,
      flexShrink: 0,
      width: '50px',
      textAlign: 'right',
    },
  },
  recommendations: {
    section: {
      backgroundColor: COLORS.cardBackground,
      borderRadius: '12px',
      padding: '24px',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '24px',
    },
    icon: {
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      backgroundColor: COLORS.progressBackground,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: COLORS.success,
      marginRight: '12px',
    },
    title: {
      fontSize: '20px',
      fontWeight: 600,
      color: COLORS.success,
    },
    item: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '24px',
      '&:last-child': {
        marginBottom: 0,
      },
    },
    content: {
      flex: 1,
    },
    itemTitle: {
      fontSize: '16px',
      fontWeight: 600,
      color: COLORS.text.secondary,
      marginBottom: '8px',
    },
    text: {
      fontSize: '14px',
      color: COLORS.text.tertiary,
      lineHeight: 1.5,
    },
    button: {
      backgroundColor: COLORS.success,
      color: '#000000',
      fontSize: '14px',
      fontWeight: 600,
      padding: '8px 46px',
      borderRadius: '32px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '36px',
      alignSelf: 'flex-start',
      marginLeft: '48px',
      marginTop: '24px',
      flexShrink: 0,
    },
  },
};

const SidebarSection = ({ title, badgeCount, children }) => (
  <Box sx={styles.sidebar.section}>
    <Box sx={styles.sidebar.header}>
      <Typography sx={styles.sidebar.title}>{title}</Typography>
      <Box sx={styles.sidebar.badge}>{badgeCount}</Box>
    </Box>
    {children}
  </Box>
);

const MetricCard = ({ title, children }) => (
  <Box sx={styles.metricCard.container}>
    <Typography sx={styles.metricCard.title}>{title}</Typography>
    {children}
  </Box>
);

const FactorItem = ({ number, name, progressWidth, value, color }) => (
  <Box sx={styles.factors.item}>
    <Box sx={{...styles.factors.number, color}}>
      {number}
    </Box>
    <Box sx={styles.factors.info}>
      <Typography sx={styles.factors.name}>{name}</Typography>
      <Box sx={styles.factors.progressContainer}>
        <Box 
          sx={{
            ...styles.factors.progressBar,
            width: progressWidth,
            backgroundColor: color,
          }} 
        />
      </Box>
    </Box>
    <Typography sx={{...styles.factors.value, color}}>
      {value}
    </Typography>
  </Box>
);

const FactorsSection = ({ title, iconColor, icon, children }) => (
  <Box sx={styles.factors.section}>
    <Box sx={styles.factors.header}>
      <Box sx={{...styles.factors.icon, color: iconColor}}>
        {icon}
      </Box>
      <Typography sx={styles.factors.title}>
        {title}
      </Typography>
    </Box>
    <Box sx={styles.factors.list}>
      {children}
    </Box>
  </Box>
);

const RecommendationItem = ({ title, text }) => (
  <Box sx={styles.recommendations.item}>
    <Box sx={styles.recommendations.content}>
      <Typography sx={styles.recommendations.itemTitle}>
        {title}
      </Typography>
      <Typography sx={styles.recommendations.text}>
        {text}
      </Typography>
    </Box>
    <Box sx={styles.recommendations.button}>Apply</Box>
  </Box>
);

const Winnability = () => {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.title}>Account Details</Typography>
      
      <Box sx={styles.mainContainer}>
        {/* Sidebar */}
        <Box sx={styles.sidebar.container}>
          <SidebarSection title="DESICION SUPPORT" badgeCount="4">
            <Typography sx={styles.sidebar.link}>Winnability</Typography>
            <Typography sx={styles.sidebar.item}>Exposure Review & Suggested Coverage</Typography>
            <Typography sx={styles.sidebar.item}>Portfolio Strategy Alignment</Typography>
            <Typography sx={styles.sidebar.item}>Broker Analytics</Typography>
          </SidebarSection>
          
          <SidebarSection title="RISK ASSESSMENT" badgeCount="6" />
          
          <SidebarSection title="DOCUMENTS AND COMPLIANCE" badgeCount="2" />
          
          <Box sx={styles.sidebar.divider} />
        </Box>
        
        {/* Content */}
        <Box sx={styles.content.container}>
          <Typography sx={styles.content.header}>Winnability</Typography>
          
          {/* Metrics Cards */}
          <Box sx={styles.content.metricsGrid}>
            {/* Overall Score */}
            <MetricCard title="Overall Score">
              <Typography sx={styles.metricCard.scoreValue}>{OVERALL_SCORE}</Typography>
              <Box sx={styles.metricCard.ratingContainer}>
                <Box sx={styles.metricCard.ratingDots}>
                  {[...Array(RATING_DOTS)].map((_, i) => (
                    <Box key={i} sx={styles.metricCard.dot} />
                  ))}
                </Box>
                <Typography sx={styles.metricCard.ratingText}>{RATING_TEXT}</Typography>
              </Box>
            </MetricCard>
            
            {/* Historical trend */}
            <MetricCard title="Historical trend">
              <Box sx={styles.trendChart.container}>
                <Box sx={styles.trendChart.trendLine} />
                <Box sx={styles.trendChart.trendLinePath} />
              </Box>
              <Box sx={styles.trendChart.monthsContainer}>
                {CHART_MONTHS.map((month, index) => (
                  <Typography key={index} sx={styles.trendChart.monthLabel}>{month}</Typography>
                ))}
              </Box>
            </MetricCard>
            
            {/* Position */}
            <MetricCard title="Position">
              <Box sx={styles.position.container}>
                {positionData.map((item, index) => (
                  <Box key={index} sx={styles.position.item}>
                    <Typography sx={styles.position.label}>{item.label}</Typography>
                    <Box sx={styles.position.bar}>
                      <Box sx={{...styles.position.barFill, width: item.width}} />
                    </Box>
                    <Typography sx={styles.position.value}>{item.value}</Typography>
                  </Box>
                ))}
              </Box>
            </MetricCard>
          </Box>
          
          {/* Factors Sections */}
          <Box sx={styles.factors.container}>
            {/* Increasing Factors */}
            <FactorsSection 
              title="Increasing Winnability" 
              iconColor={COLORS.success}
              icon={<ArrowUpwardIcon fontSize="small" />}
            >
              {increasingFactors.map((factor, index) => (
                <FactorItem 
                  key={index}
                  number={factor.number}
                  name={factor.name}
                  progressWidth={factor.width}
                  value={factor.value}
                  color={COLORS.success}
                />
              ))}
            </FactorsSection>
            
            {/* Decreasing Factors */}
            <FactorsSection 
              title="Decreasing Winnability" 
              iconColor={COLORS.danger}
              icon={<ArrowDownwardIcon fontSize="small" />}
            >
              {decreasingFactors.map((factor, index) => (
                <FactorItem 
                  key={index}
                  number={factor.number}
                  name={factor.name}
                  progressWidth={factor.width}
                  value={factor.value}
                  color={COLORS.danger}
                />
              ))}
            </FactorsSection>
          </Box>
          
          {/* AI Recommendations */}
          <Box sx={styles.recommendations.section}>
            <Box sx={styles.recommendations.header}>
              <Box sx={styles.recommendations.icon}>
                <RocketIcon fontSize="small" />
              </Box>
              <Typography sx={styles.recommendations.title}>
                AI-Powered Recommendations
              </Typography>
            </Box>
            
            {recommendations.map((recommendation, index) => (
              <RecommendationItem 
                key={index}
                title={recommendation.title}
                text={recommendation.text}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Winnability;