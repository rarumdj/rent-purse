import { ErrorMessage } from '@hookform/error-message';
import * as lodash from 'lodash';
import { omit } from 'lodash';
import { FC } from 'react';
import { Controller } from 'react-hook-form';
import Select, { Props } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { FormErrorMessage } from './atom/form-error-msg';
import { theStyle } from './MultipleSelectCheckbox';

type SelectProps = Props & {
  id: string;
  label: string | React.ReactNode;
  createable?: boolean;
  control: any;
  name: any;
  errors: any;
  rules: any;
  width?: { minWidth: string; maxWidth: string };
};

const CustomSelect: FC<SelectProps> = props => {
  const { id, label, createable, control, name, errors, rules, width } = props;
  const idx = id || Math.random().toString();
  const res = omit(props, ['label', 'className']);
  const errorMessages = lodash.get(errors, name as string);

  const hasError = !!(errors && errorMessages);
  return (
    <div className="w-full">
      <label htmlFor={idx} className="text-sm text-gray-600">
        {label}
      </label>

      <Controller
        name={name as string}
        control={control}
        rules={rules}
        render={({ field: { onChange, value } }) => {
          return (
            <div className="mt-1">
              {createable ? (
                <CreatableSelect
                  isClearable
                  onChange={onChange}
                  value={value}
                  styles={theStyle(hasError, {
                    minWidth: width?.minWidth,
                    maxWidth: width?.maxWidth,
                  })}
                  components={{
                    DropdownIndicator: () => null,
                    IndicatorSeparator: () => null,
                  }}
                  {...res}
                />
              ) : (
                <Select
                  onChange={onChange}
                  value={value}
                  styles={theStyle(hasError, {
                    minWidth: width?.minWidth,
                    maxWidth: width?.maxWidth,
                  })}
                  {...res}
                />
              )}
            </div>
          );
        }}
      />
      <ErrorMessage
        errors={errors}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        name={`${name}.value`}
        render={({ message }) => (
          <FormErrorMessage className="mt-1">{message}</FormErrorMessage>
        )}
      />
    </div>
  );
};

export default CustomSelect;
