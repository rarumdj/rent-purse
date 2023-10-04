import classNames from 'classnames';
import React, { FC } from 'react';
import { ReactComponent as Loading } from '../../assets/icons/loading.svg';

type buttonProps = {
  children: React.ReactNode;
  btnType?: 'withbg' | 'withoutbg' | 'outline' | 'outline-red';
  fullWidth?: boolean;
  className?: string;
  border?: boolean;
  animate?: boolean;
  loading?: boolean;
  onClick?: () => void;
  disabled?: boolean;
};

const PopoverButton: FC<buttonProps> = props => {
  const {
    btnType,
    fullWidth,
    children,
    border,
    animate,
    className,
    loading,
    disabled,
    ...rest
  } = props;

  const withoutbg = btnType === 'withoutbg';
  const outline = btnType === 'outline';
  const outlineRed = btnType === 'outline-red';
  return (
    <div
      className={classNames(
        'flex transform items-center justify-center py-3 px-4 font-medium focus:outline-none disabled:opacity-50',

        {
          ['duration-200 hover:-translate-y-1 focus:translate-y-1']: animate,
        },
        { ['rounded-lg border border-gray-300']: border },
        withoutbg
          ? 'bg-transparent text-black'
          : outline
          ? 'rounded-md border border-[#D0D5DD] bg-transparent text-black '
          : outlineRed
          ? 'rounded-md border border-red-500 bg-transparent text-red-600'
          : 'rounded-lg  bg-black  text-white shadow-md',
        disabled ? 'cursor-not-allowed' : '',
        { [className as string]: className },
        { ['w-full']: fullWidth }
      )}
      {...rest}
    >
      {loading ? (
        <>
          <Loading className="mr-3 animate-spin" /> Please wait
        </>
      ) : (
        children
      )}
    </div>
  );
};

export default PopoverButton;
