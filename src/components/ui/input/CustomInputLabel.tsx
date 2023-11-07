import React from 'react';

interface ICustomerLable {
  title?: string;
  subtitle?: string;
}
const CustomInputLabel = ({ title, subtitle }: ICustomerLable) => {
  return (
    <div className='mb-1'>
      <h6 className="text-sm font-medium text-main-header md:text-sm">
        {title}
      </h6>
      <p className="text-xs text-gray-600 ">{subtitle}</p>
    </div>
  );
};

export default CustomInputLabel;
