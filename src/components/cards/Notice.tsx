import classNames from 'classnames';
import Button from 'components/button/button';
import React, { FC } from 'react';
import SectionTag from './SectionTag';

export type colorState = 'notice' | 'warning' | 'error';
interface INotice {
  title: string;
  description: string;
  buttonName: string;
  showbutton?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  colorState: colorState;
  className?: string;
}

const colorStateMap: { [key in colorState]: string } = {
  notice: 'bg-gray-50',
  warning: 'bg-warning-50',
  error: 'bg-error-100',
};

const Notice: FC<INotice> = ({
  buttonName,
  description,
  title,
  showbutton = true,
  onClick,
  colorState = 'notice',
  className,
}) => {
  return (
    <div
      className={classNames(
        'flex flex-wrap items-center justify-between gap-4 rounded-xl px-4 py-3',
        colorStateMap[colorState],
        className
      )}
    >
      <SectionTag title={title} description={description} type="big" />

      {showbutton && (
        <Button
          className="flex h-9 items-center justify-center py-0 text-sm"
          onClick={onClick}
        >
          {buttonName}
        </Button>
      )}
    </div>
  );
};

export default Notice;
