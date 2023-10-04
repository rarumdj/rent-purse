import { useState, useEffect, useRef } from 'react';
import { useForm, useController } from 'react-hook-form';
import Cleave from 'cleave.js';
import { CleaveOptions } from 'cleave.js/options';
import classNames from 'classnames';
import { Input, InputProps } from './atom/Input';
import { FormErrorMessage } from './atom/form-error-msg';
import { ErrorMessage } from '@hookform/error-message';
import * as lodash from 'lodash';

type CleaveControllerProps = {
  name: string;
  options: CleaveOptions;
  control: any;
  errors: any;
  defaultValue?: any;
} & Omit<InputProps, 'name'>;

export const CleaveController = ({
  name,
  options,
  control,
  defaultValue,
  errors,
  className,
  ...props
}: CleaveControllerProps) => {
  const { field } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue,
  });
  useEffect(() => {
    const instance = new Cleave(`#${name}`, options);

    return () => {
      instance.destroy();
    };
  }, [options, name]);

  const errorMessages = lodash.get(errors, name as string);

  const hasError = !!(errors && errorMessages);
  //   return <input id={name}  />;
  return (
    <div
      className={classNames({ [className as string]: className })}
      aria-live="polite"
    >
      <Input
        aria-invalid={hasError}
        className={classNames({
          'border-red-600 transition-colors hover:border-red-600 focus:border-red-600 focus:outline-none focus:ring-red-600 focus:ring-opacity-50 focus:ring-2':
            hasError,
        })}
        isError={hasError}
        type="text"
        // onlyNumber={onlyNumber}
        {...props}
        {...field}
      />
      <ErrorMessage
        errors={errors}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        name={name as any}
        render={({ message }) => (
          <FormErrorMessage className="mt-1">{message}</FormErrorMessage>
        )}
      />
    </div>
  );
};
