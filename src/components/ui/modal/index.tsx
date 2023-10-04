import { XMarkIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import useOutsideClick from 'components/clickoutside';
import React, { useEffect, useRef } from 'react';

type modalType = {
  children: React.ReactNode;
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
  active: boolean;
  close?: boolean;
  bg?: boolean;
  size?: string;
};

const Modal = ({
  children,
  onClick,
  active,
  close,
  bg = true,
  size,
}: modalType) => {
  const ref = useRef(null);
  const buttonClickedOutside = useOutsideClick(ref);

  useEffect(() => {
    if (buttonClickedOutside && active) {
      onClick(!active);
    }
  }, [buttonClickedOutside, onClick, active]);

  return (
    <>
      <div
        // tabindex="-1"
        className={classNames(
          'modal hide-scrollbar fixed bottom-0 left-0 right-0 top-0 z-[9999] flex flex-col items-center overflow-x-scroll overflow-y-scroll  bg-gray-200 bg-opacity-50 px-4 py-24 backdrop-blur-[0.7px] transition-opacity duration-300 sm:py-32',
          active ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
      >
        <div
          ref={ref}
          className={classNames(
            'mx-auto w-11/12 origin-bottom transform rounded-[10px] transition-all delay-200 duration-500 ',
            active
              ? 'translate-y-0 scale-100 opacity-100'
              : 'translate-y-10 scale-90 opacity-0',
            { ['bg-white']: bg },
            size ? size : 'max-w-lg'
          )}
        >
          {close && (
            <button
              onClick={() => onClick(!active)}
              className="absolute right-0 flex h-6 w-6 -translate-y-[1.5rem] translate-x-4 rounded-full border-none bg-gray-300  outline-none transition-all duration-500 ease-in-out hover:bg-red-500 hover:text-white xl:h-7 xl:w-7 xl:-translate-y-[1.8rem] xl:translate-x-7"
            >
              <XMarkIcon className="m-auto h-4 w-4" />
            </button>
          )}

          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
