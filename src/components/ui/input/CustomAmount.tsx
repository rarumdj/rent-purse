import { ErrorMessage } from '@hookform/error-message';
import classNames from 'classnames';
import Cleave from 'cleave.js/react';
import * as lodash from 'lodash';
import React from 'react';
import { Controller } from 'react-hook-form';
import { FormErrorMessage } from './atom/form-error-msg';

export type InputSize = 'medium' | 'large';

type CleaveControllerProps = {
  name: string;
  control: any;
  errors: any;
  size?: InputSize;
  label?: string;
  group?: any;
  rules: any;
  id: string;
  defaultValue?: any;
  className?: string;
  groupClassName?: string;
  disabled?: boolean;
  currency: any;
  placeholder?: string;
};

const sizeMap: { [key in InputSize]: string } = {
  medium: 'p-3 text-base',
  large: 'p-4 text-base',
};

export const CustomAmount = ({
  name,
  control,
  errors,
  label,
  size = 'medium',
  group = true,
  rules,
  id,
  className,
  disabled,
  currency,
  placeholder,
  groupClassName,
}: CleaveControllerProps) => {
  const idx = id || Math.random().toString();
  // If the name is in a FieldArray, it will be 'fields.index.fieldName' and errors[name] won't return anything, so we are using lodash get
  const errorMessages = lodash.get(errors, name);
  const hasError = !!(errors && errorMessages);
  const [selectedOption, setSelectedOption] = React.useState(currency[0]);

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const option =
      currency.find((option: any) => option.value === value) ?? currency[0];
    setSelectedOption(option);
  };
  //   console.log(errors, selectedOption);
  return (
    <div className={classNames(className, 'w-full')}>
      <label
        htmlFor={idx as string}
        className="text-sm leading-7 text-gray-600"
      >
        {label}
      </label>

      {/* )} */}
      <Controller
        name={name as string}
        control={control}
        rules={rules}
        render={({ field: { onChange, value } }) => {
          return (
            <div className="flex">
              <span
                className={classNames(
                  'inline-flex max-w-xs items-center rounded-l-lg border border-r-0 border-gray-300 px-2 text-sm text-gray-900',
                  { [groupClassName as string]: groupClassName }
                )}
              >
                <select
                  onChange={event => {
                    handleOptionChange(event),
                      onChange({
                        currency: event.target.value,
                        amount: value?.amount,
                      });
                  }}
                  className="appearance-none border-0 focus:outline-none focus:ring-0"
                >
                  {currency.map((option: any) => (
                    <option key={option.value} value={option.value}>
                      {option.value}
                    </option>
                  ))}
                </select>
              </span>
              <Cleave
                className={classNames([
                  'relative inline-flex w-full border border-gray-300 bg-transparent leading-none text-gray-700 placeholder-gray-500 transition-colors ease-in-out hover:border-gray-900 focus:border-gray-900 focus:outline-none focus:ring-gray-400 focus:ring-opacity-30 focus:ring-4',

                  sizeMap[size],
                  { ['rounded-r-lg']: group, ['rounded-lg']: !group },
                  {
                    ['!hover:border-none !border-gray-200 !text-[#929090]']:
                      disabled,
                  },
                  {
                    'border-red-600 transition-colors hover:border-red-600 focus:border-red-600 focus:outline-none focus:ring-red-600 focus:ring-opacity-50 focus:ring-2':
                      hasError,
                  },
                ])}
                onChange={e =>
                  onChange({
                    currency: selectedOption.value,
                    amount: e.target.rawValue,
                  })
                }
                placeholder={placeholder}
                value={value?.amount}
                options={{
                  numeral: true,
                  numeralThousandsGroupStyle: 'thousand',
                  numeralPositiveOnly: true,
                }}
                disabled={disabled}
              />
            </div>
          );
        }}
      />
      <ErrorMessage
        errors={errors}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        name={`${name}.amount`}
        render={({ message }) => (
          <FormErrorMessage className="mt-1">{message}</FormErrorMessage>
        )}
      />
    </div>
  );
};
