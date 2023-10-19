import React, { FC } from 'react';

interface ImodalHeader {
  title?: string;
  subtitle?: string;
}
const ModalHeader: FC<ImodalHeader> = ({ subtitle, title }) => {
  return (
    <div className="w-full space-y-2">
      <h1 className="text-xl font-semibold text-main-header md:text-3xl">
        {title}
      </h1>
      <p className="text-sm text-gray-600">{subtitle}</p>
    </div>
  );
};

export default ModalHeader;
