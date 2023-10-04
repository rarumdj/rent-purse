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
