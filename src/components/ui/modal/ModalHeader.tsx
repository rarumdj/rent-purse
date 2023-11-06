import classNames from 'classnames';
import React, { FC } from 'react';

interface ImodalHeader {
  title?: string;
  subtitle?: string;
  className?: string;
}
const ModalHeader: FC<ImodalHeader> = ({ subtitle, title, className }) => {
  return (
    <div
      className={classNames('w-full space-y-2', {
        [className as string]: className,
      })}
    >
      <h1 className="text-xl font-semibold text-main-header md:text-3xl">
        {title}
      </h1>
      <p className="text-sm text-gray-600">{subtitle}</p>
    </div>
  );
};

export default ModalHeader;
