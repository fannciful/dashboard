import React from 'react';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import SecurityIcon from '@mui/icons-material/Security';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ApartmentIcon from '@mui/icons-material/Apartment';
import UmbrellaIcon from '@mui/icons-material/Umbrella';

export const policyCardsData = [
  {
    id: 1,
    name: 'Marine Cargo',
    premium: '$625,000',
    effDate: '6/30/2026',
    iconType: 'DirectionsBoat',
    iconColor: '#4299E1'
  },
  {
    id: 2,
    name: 'General Liability',
    premium: '$175,000',
    effDate: '6/30/2026',
    iconType: 'Security',
    iconColor: '#48BB78'
  },
  {
    id: 3,
    name: 'Workers Comp',
    premium: '$75,000',
    effDate: '---',
    iconType: 'Engineering',
    iconColor: '#9F7AEA'
  },
  {
    id: 4,
    name: 'Property',
    premium: '$64,829.83',
    effDate: '---',
    iconType: 'Apartment',
    iconColor: '#ED8936'
  },
  {
    id: 5,
    name: 'Umbrella',
    premium: '$275,000',
    effDate: '13/03/2026',
    iconType: 'Umbrella',
    iconColor: '#F56565'
  }
];

export const getIconComponent = (iconType) => {
  switch (iconType) {
    case 'DirectionsBoat':
      return DirectionsBoatIcon;
    case 'Security':
      return SecurityIcon;
    case 'Engineering':
      return EngineeringIcon;
    case 'Apartment':
      return ApartmentIcon;
    case 'Umbrella':
      return UmbrellaIcon;
    default:
      return null;
  }
};