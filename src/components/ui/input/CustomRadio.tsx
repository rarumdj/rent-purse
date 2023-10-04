import classNames from 'classnames';
import React, { FC } from 'react';

interface IRadiolist {
  value: string;
  label: string;
}

interface IcustomRadio {
  value: string[];
  setValue: React.Dispatch<React.SetStateAction<string[]>>;
  className?: string;
  data: IRadiolist[];
  type: 'checkbox' | 'radio';
  name?: string;
  hasError?: boolean;
}

const CustomRadio: FC<IcustomRadio> = ({
  value,
  setValue,
  className,
  data,
  type,
  name,
  hasError,
}) => {
  const handleSetValue = (event: string) => {
    let selectedValue = [...value, event];
    if (value.includes(event)) {
      selectedValue = selectedValue.filter(item => item !== event);
    }
    if (type === 'checkbox') setValue(selectedValue);
    if (type === 'radio') setValue([event]);
  };

  return (
    <div
      className={classNames('flex h-fit flex-wrap gap-3 ', {
        [className as string]: className,
      })}
    >
      {data.map((item, index) => (
        <div
          className={classNames(
            'w-fit cursor-pointer rounded-lg border border-gray-200 bg-white p-4 text-gray-500 transition-colors ease-in-out hover:border-gray-900 active:border-gray-900 active:outline-none active:ring-gray-400 active:ring-opacity-30 active:ring-4',
            {
              'border-red-600 transition-colors hover:border-red-600 focus:border-red-600 focus:outline-none focus:ring-red-600 focus:ring-opacity-50 focus:ring-2':
                hasError,
            }
          )}
          role="alert"
          key={index}
          onClick={() => handleSetValue(item.value)}
        >
          <div className="flex items-center gap-2">
            <input
              name={name}
              type={type}
              className={classNames(
                'rousnded relative mr-2 inline-flex h-5 w-5 cursor-default  border  border-gray-300 text-indigo-500   checked:border-success-800 checked:bg-success-100  checked:text-green-200 hover:!border-success-800 focus:ring-success-800 focus:ring-opacity-25',
                type === 'radio' ? 'rounded-full' : 'rounded'
              )}
              disabled
              checked={value.includes(item.value)}
            />
            <h3 className="text-sm">{item.label}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomRadio;
