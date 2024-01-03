import { XMarkIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import useOutsideClick from 'components/clickoutside';
import { ArrowLeft } from 'iconsax-react';
import React, { useEffect, useRef } from 'react';

type modalType = {
  children: React.ReactNode;
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
  active: boolean;
  close?: boolean;
  bg?: boolean;
  size?: string;
  position?: 'side' | 'center';
  px?: boolean;
};

const Modal = ({
  children,
  onClick,
  active,
  close,
  bg = true,
  size,
  position = 'side',
  px = true,
}: modalType) => {
  const ref = useRef(null);
  const buttonClickedOutside = useOutsideClick(ref);

  useEffect(() => {
    if (buttonClickedOutside && active) {
      onClick(!active);
    }
  }, [buttonClickedOutside, onClick, active]);

  useEffect(() => {
    if (active) {
      document.body.classList.add('overflow-hidden'); // Add the class to disable scrolling
    } else {
      document.body.classList.remove('overflow-hidden'); // Remove the class to re-enable scrolling
    }

    return () => {
      document.body.classList.remove('overflow-hidden'); // Make sure to remove the class on unmount
    };
  }, [active]);

  const SideModal = (
    <>
      <div
        className={classNames(
          active ? 'opacity-100' : 'pointer-events-none opacity-0',
          'fixed inset-0 z-50 transform bg-black/60 backdrop-blur-[0.7px] transition-all duration-500 ease-in-out'
        )}
      ></div>
      <div
        // tabindex="-1"
        className={classNames(
          'hide-scrollbar fixed bottom-0 right-0 top-0 z-[9999] flex h-full w-full transform flex-col items-center overflow-x-scroll  overflow-y-scroll bg-white bg-opacity-50 transition-all duration-300 md:w-fit',
          active
            ? 'transform md:translate-x-0'
            : 'pointer-events-none translate-x-0 translate-y-[100%] md:translate-x-[100%] md:translate-y-0'
        )}
      >
        <div
          ref={ref}
          className={classNames(
            'hide-scrollbar relative mx-auto h-full w-full max-w-[30rem] origin-bottom overflow-scroll py-4 pt-20 min-w-[30rem]',
            { ['bg-white']: bg },
            { ['px-4 md:px-8']: px }
          )}
        >
          <div className="fixed z-50 left-0 right-0 top-0 block w-full border-b bg-white py-6 md:hidden">
            <ArrowLeft
              onClick={() => onClick(!active)}
              className="ml-4 cursor-pointer"
            />
          </div>

          <button
            onClick={() => onClick(!active)}
            className="absolute left-0 hidden h-6 w-6 -translate-y-[2.2rem] translate-x-5 rounded-full border outline-none  transition-all duration-500 ease-in-out hover:bg-red-500 hover:text-white md:flex xl:h-7 xl:w-7 xl:-translate-y-[2.8rem] xl:translate-x-8"
          >
            <XMarkIcon className="m-auto h-4 w-4" />
          </button>

          <div className="py-4 w-full">{children}</div>
        </div>
      </div>
    </>
  );

  const CenteredModal = (
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
            'mx-auto w-11/12 origin-bottom transform rounded-[10px] pt-6 transition-all delay-200 duration-500 xl:pt-10 ',
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
              className="absolute right-0 flex h-6 w-6 -translate-x-5 -translate-y-[0.4rem] rounded-full border  outline-none transition-all duration-500 ease-in-out hover:bg-red-500 hover:text-white xl:h-7 xl:w-7 xl:-translate-x-8 xl:-translate-y-[0.7rem]"
            >
              <XMarkIcon className="m-auto h-4 w-4" />
            </button>
          )}

          {children}
        </div>
      </div>
    </>
  );
  return <>{position === 'center' ? CenteredModal : SideModal}</>;
};

export default Modal;
