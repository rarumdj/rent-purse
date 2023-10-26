import { ErrorMessage } from '@hookform/error-message';
import * as lodash from 'lodash';
import { FC, useState } from 'react';
import { Controller } from 'react-hook-form';
import Select, { components } from 'react-select';
import { FormErrorMessage } from './atom/form-error-msg';
import './styles.css';
import classNames from 'classnames';

const InputOption: FC<any> = ({
  getStyles,
  isDisabled,
  isFocused,
  isSelected,
  children,
  innerProps,
  ...rest
}) => {
  const [isActive, setIsActive] = useState(false);
  const onMouseDown = () => setIsActive(true);
  // const onMouseUp = () => setIsActive(false);
  const onMouseLeave = () => setIsActive(false);

  // styles
  let bg = 'transparent';
  if (isFocused) bg = '#eee';
  if (isActive) bg = '#B2D4FF';

  const style = {
    alignItems: 'center',
    backgroundColor: bg,
    color: 'inherit',
    display: 'flex ',
  };

  // prop assignment
  const props = {
    ...innerProps,
    onMouseDown,
    // onMouseUp,
    onMouseLeave,
    style,
  };

  return (
    <components.Option
      {...rest}
      isDisabled={isDisabled}
      isFocused={isFocused}
      isSelected={isSelected}
      getStyles={getStyles}
      innerProps={props}
    >
      <input
        type="checkbox"
        checked={isSelected}
        className="relative mr-2 inline-flex h-4 w-4 cursor-pointer rounded  border border-gray-300 text-indigo-500 checked:border-gray-800  checked:bg-gray-100 checked:text-gray-200 focus:ring-gray-800 focus:ring-opacity-25"
        readOnly
      />
      {children}
    </components.Option>
  );
};

interface MultiSelectProp {
  options?: {
    id?: string;
    label?: string;
    value?: string;
  }[];
  onChange?: any;
  placeholder?: string;
  label?: string;
  value?: any;
  control?: any;
  name: string;
  errors?: any;
  rules?: any;
  className?: string;
  width?: { minWidth: string; maxWidth: string };
}

interface styleWidth {
  minWidth?: string;
  maxWidth?: string;
}

export const theStyle = (error: any, { minWidth, maxWidth }: styleWidth) => {
  const style = {
    control: (base: any, state: any) => ({
      ...base,
      //   border: state.isFocused ? '#000' : base.color,
      // This line disable the blue border
      minHeight: '45px',
      minWidth,
      maxWidth,
      padding: '4px 4px',
      borderRadius: '8px',
      backgroundColor: 'rgb(249 250 251 /1)',
      borderColor: state.isFocused
        ? '#000'
        : error
        ? 'rgb(220 38 38 /100)'
        : base.color,
      ring: state.isFocused ? '#000' : '#000',
      color: state.isSelected ? '#000' : base.color,
      boxShadow: state.isFocused ? '0 0 0 0.2rem rgba(208, 213, 221, .7)' : 0,
      '&:hover': {
        borderColor: state.isFocused ? '#000' : '#000',
        ring: state.isFocused ? '#000' : '#000',
      },

      '*': {
        boxShadow: 'none !important',
        borderColor: '#000',
      },
    }),
    option: (base: any, state: any) => ({
      ...base,
      color: state.isSelected ? '#FFF' : '#6B7280',
      backgroundColor: state.isSelected ? '#000' : base.color,
      borderBottom: '1px solid rgba(0, 0, 0, 0.125)',
      '&:hover': {
        color: '#6B7280',
        backgroundColor: '#F1F5F9',
      },
    }),

    indicatorSeparator: () => ({ display: 'none' }),
    placeholder: (defaultStyles: any) => {
      return {
        ...defaultStyles,
        textAlign: 'start',
        fontSize: 14,
      };
    },
  };

  return style;
};

export const MultipleSelectCheckbox: FC<MultiSelectProp> = ({
  options,
  placeholder,
  label,
  control,
  name,
  errors,
  rules,
  onChange,
  value,
  className,
  width,
}) => {
  const errorMessages = lodash.get(errors, name as string);
  const hasError = !!(errors && errorMessages);
  return (
    <div className="w-full">
      <label htmlFor="email" className="text-sm leading-7 text-gray-600">
        {label}
      </label>
      {control ? (
        <>
          <Controller
            name={name as string}
            control={control}
            rules={rules}
            render={({
              field: { onChange: controlOnChange, value: controlValue },
            }) => {
              return (
                <Select
                  isMulti
                  placeholder={placeholder}
                  closeMenuOnSelect={false}
                  hideSelectedOptions={false}
                  onChange={controlOnChange}
                  options={options}
                  components={{
                    Option: InputOption,
                  }}
                  value={controlValue}
                  // className={classNames(hasError ? 'rounded-lg border-2 border-red-500' : '')}
                  className={classNames({ [className as string]: className })}
                  styles={theStyle(hasError, {
                    minWidth: width?.minWidth,
                    maxWidth: width?.maxWidth,
                  })}
                />
              );
            }}
          />
          <ErrorMessage
            errors={errors}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            name={name as any}
            render={({ message }) => (
              <FormErrorMessage className="mt-1">{message}</FormErrorMessage>
            )}
          />
        </>
      ) : (
        <Select
          name={name as string}
          isMulti
          placeholder={placeholder}
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          onChange={onChange}
          options={options}
          components={{
            Option: InputOption,
          }}
          value={value}
          // className={classNames(hasError ? 'rounded-lg border-2 border-red-500' : '')}
          styles={theStyle(hasError, {
            minWidth: width?.minWidth,
            maxWidth: width?.maxWidth,
          })}
        />
      )}
    </div>
  );
};
