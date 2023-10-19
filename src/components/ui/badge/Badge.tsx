import classNames from 'classnames';
import React from 'react';
import { capitalizeString } from 'utils';

export type badgeTypes = 'inactive' | 'processing' | 'success' | 'failed';

const bgMap: { [key in badgeTypes]: string } = {
  inactive: 'bg-gray-100',
  processing: 'bg-warning-50',
  success: 'bg-success-50',
  failed: 'bg-error-50',
};

const textMap: { [key in badgeTypes]: string } = {
  inactive: 'text-gray-700',
  processing: 'text-warning-700',
  success: 'text-success-700',
  failed: 'text-error-700',
};

// const iconMap: { [key in badgeTypes]: string } = {
//   inactive: 'text-gray-500',
//   processing: 'text-warning-500',
//   success: 'text-success-500',
//   failed: 'text-error-500',
// };

interface IEmptyData {
  status?: badgeTypes;
  title?: string;
  bgColor?: string;
  textColor?: string;
  icon?: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
}

const Badge = ({ title, status: Status, icon: Icon }: IEmptyData) => {
  const status = Status?.toLowerCase() as badgeTypes;

  return (
    <span
      className={classNames(
        `flex w-fit items-center rounded-full px-2.5 py-0.5 text-xs font-medium`,
        textMap[status],
        bgMap[status]
      )}
    >
      {Icon && <Icon className={classNames('mr-1 h-3.5 w-3.5')} />}
      {capitalizeString(title as string)}
    </span>
  );
};

export default Badge;
