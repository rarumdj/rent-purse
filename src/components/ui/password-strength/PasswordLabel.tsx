import classNames from 'classnames';
import { FC } from 'react';

interface IPwLabel {
  label: string;
  checker: boolean;
}
const PasswordLabel: FC<IPwLabel> = ({ label, checker }) => {
  return (
    <div className="flex items-center gap-1">
      <input
        type="checkbox"
        className={classNames(
          'rousnded relative mr-2 inline-flex h-3.5 w-3.5 cursor-default rounded  border  border-gray-300 text-indigo-500   checked:border-success-800 checked:bg-success-100  checked:text-green-200 hover:!border-success-800 focus:ring-success-800 focus:ring-opacity-25'
        )}
        disabled
        checked={checker}
      />

      <span>{label}</span>
    </div>
  );
};

export default PasswordLabel;
