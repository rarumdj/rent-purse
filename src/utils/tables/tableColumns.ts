export const ClassFeeColumn = [
  {
    header: '',
    accessor: 'selection',
    type: 'selection',
  },
  {
    header: 'Fee',
    accessor: 'fee',
    type: 'string',
  },
  {
    header: 'Amount',
    accessor: 'amount',
    type: 'string',
  },
  {
    header: 'Session',
    accessor: 'session',
    type: 'string',
  },
  {
    header: 'Date added',
    accessor: 'dateCreated',
    type: 'string',
  },
  {
    header: 'Action',
    accessor: 'action',
    type: 'action',
    show: ['toggle', 'delete', 'edit'],
  },
];

export const paymentHistory = [
  {
    header: 'Amount',
    accessor: 'amount',
    type: 'string',
  },
  {
    header: 'Actions',
    accessor: 'actions',
    type: 'string',
  },
  {
    header: 'Transaction ref',
    accessor: 'transaction_ref',
    type: 'string',
  },
  {
    header: 'Moved from',
    accessor: 'moved_from',
    type: 'string',
  },
  {
    header: 'Moved to',
    accessor: 'moved_to',
    type: 'string',
  },
  {
    header: 'Date',
    accessor: 'date',
    type: 'string',
  },
];

export const paymentHistoryData = [
  {
    amount: '$200,000',
    actions: 'Fund account',
    transaction_ref: '1222302022002',
    bank: 'Zenith',
    account: '100202020',
    plan: 'Savings plan',
    members: '10 Members',
    date: '27 Aug, 23',
  },
  {
    amount: '$30,000',
    actions: 'Fund account',
    transaction_ref: '1222302022002',
    bank: 'Zenith',
    account: '100202020',
    plan: 'Savings plan',
    members: '10 Members',
    date: '27 Aug, 23',
  },
  {
    amount: '$10,000',
    actions: 'Fund account',
    transaction_ref: '1222302022002',
    bank: 'Zenith',
    account: '100202020',
    plan: 'Savings plan',
    members: '10 Members',
    date: '27 Aug, 23',
  },
  {
    amount: '$240',
    actions: 'Fund account',
    transaction_ref: '1222302022002',
    bank: 'Zenith',
    account: '100202020',
    plan: 'Savings plan',
    members: '10 Members',
    date: '27 Aug, 23',
  },
  {
    amount: '$230,000',
    actions: 'Fund account',
    transaction_ref: '1222302022002',
    bank: 'Zenith',
    account: '100202020',
    plan: 'Savings plan',
    members: '10 Members',
    date: '27 Aug, 23',
  },
];
