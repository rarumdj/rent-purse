import React, { FC, useRef } from 'react';
import { ArrowDown2, ArrowUp2 } from 'iconsax-react';

interface IAccodion {
  title: string;
  active: boolean;
  onToggle: () => void;
  length: number;
  index: number;
  children: React.ReactNode;
}
const Accodion: FC<IAccodion> = ({
  title,
  active,
  onToggle,
  length,
  index,
  children,
}) => {
  const contentEl = useRef<any>(null);
  return (
    <div>
      <div className={`${active ? 'space-y-5 px-0 ' : 'px-0'}  w-full`}>
        <div className="flex items-center bg-gray-50 p-3" onClick={onToggle}>
          <h5
            className={`w-full text-sm ${
              active
                ? ' font-semibold text-gray-500'
                : 'font-medium text-[#A9A29D]'
            }`}
          >
            {title}
          </h5>
          <span className="ml-auto">
            {active ? (
              <ArrowUp2
                size="24"
                color="#292D32"
                className="transition-all duration-300 ease-in-out"
              />
            ) : (
              <ArrowDown2
                size="24"
                color="#292D32"
                className="transition-all duration-300 ease-in-out "
              />
            )}
          </span>
        </div>
        <div
          ref={contentEl}
          style={
            active
              ? { height: contentEl?.current?.scrollHeight }
              : { height: '0px' }
          }
          className="h-0 overflow-hidden transition-all duration-200 ease-in-out"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accodion;
