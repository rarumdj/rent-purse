import classNames from 'classnames';
import React from 'react';

interface ICustomerLable {
  title?: string;
  subtitle?: string;
  disabled?: boolean;
}
const CustomInputLabel = ({ title, subtitle, disabled }: ICustomerLable) => {
  return (
    <div className="mb-1">
      <h6
        className={classNames(
          'text-sm font-medium md:text-sm',
          disabled ? 'text-gray-400' : ' text-main-header'
        )}
      >
        {title}
      </h6>
      <p
        className={classNames(
          'text-xs',
          disabled ? 'text-gray-400' : ' text-gray-600'
        )}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default CustomInputLabel;
