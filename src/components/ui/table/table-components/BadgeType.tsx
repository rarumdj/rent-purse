import Badge from 'components/ui/badge/Badge';
import React from 'react';
import { getStatus } from 'utils';

const BadgeType = React.memo(({ value }: any) => {
  if (!value) return <div />;

  return <Badge status={getStatus(value)} title={value} />;
});
export default BadgeType;
