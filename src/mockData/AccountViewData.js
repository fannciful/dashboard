export const accountData = {
  name: 'Maritime Logistics Corp',
  address: {
    street: '425 Harbor Boulevard, Suite 300',
    cityStateZip: 'Seattle, WA 98104'
  },
  logo: {
    svgPath: 'M12,27.5 Q27.5,12 43,27.5 T12,27.5',
    strokeColor: '#3b82f6',
    strokeWidth: 3
  },
  accountInfo: {
    accountNumber: '54383',
    broker: 'Marsh McLennan',
    underwriter: 'Kate Johnson'
  }
};

export const breadcrumbsData = [
  { label: 'Dashboard', path: '/dashboard', isActive: false },
  { label: 'Accounts', path: '/accounts', isActive: false },
  { label: 'Maritime Logistics Corp', path: '/accounts/maritime-logistics', isActive: true }
];

export const attentionItemsData = [
  {
    id: 1,
    title: 'Marine Survey Required',
    subtitle: 'Scheduled for 06/12/2025',
    actionLabel: 'Review details link',
    actionLink: '/surveys/maritime-logistics'
  },
  {
    id: 2,
    title: 'Loss Control Complete',
    subtitle: 'Last inspection: 02/15/2025',
    actionLabel: 'View report',
    actionLink: '/reports/loss-control/maritime-logistics'
  },
  {
    id: 3,
    title: 'Claims Review Required',
    subtitle: '3 open claims // $245,000 TTL',
    actionLabel: 'View claims',
    actionLink: '/claims/maritime-logistics'
  }
];