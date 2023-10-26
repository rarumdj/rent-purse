import React, { useEffect, useState } from 'react';
import * as lodash from 'lodash';
import './styles.css';
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  getCountryCallingCode,
  isValidPhoneNumber,
  parsePhoneNumber,
} from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { FormErrorMessage } from './atom/form-error-msg';
import cs from 'classnames';
import { CountryCode, PhoneNumber } from 'libphonenumber-js';

const PhoneInputs = ({
  name,
  errors,
  value,
  setValue,
  classNames,
  label,
  control,
  required = true,
  ...rest
}: any) => {
  const [focused, setFocused] = useState(false);

  const errorMessages = lodash.get(errors, name);
  const hasError = !!(errors && errorMessages);

  const [phoneCountryIso, setPhoneCountryIso] = useState<CountryCode>('UG');
  const international: PhoneNumber | undefined = parsePhoneNumber(
    formatPhoneNumberIntl(value)
  );
  const countryCode =
    value && isValidPhoneNumber(value)
      ? getCountryCallingCode(phoneCountryIso)
      : undefined;

  const [onChangeValue, setOnChangeValue] = useState<any>();

  useEffect(() => {
    if (international) {
      setPhoneCountryIso(international?.country as any);
    }
  }, [value]);

  useEffect(() => {
    if (countryCode && !onChangeValue) return;
    return setValue(
      formatPhoneNumber(onChangeValue),
      onChangeValue,
      countryCode
    );
  }, [onChangeValue, countryCode]);

  return (
    <div className={cs({ [classNames]: classNames })}>
      <div className={cs('phone')}>
        <label htmlFor={name} className="text-sm text-gray-600">
          {label}
        </label>
        <Controller
          name={name}
          control={control}
          rules={{
            validate: value =>
              !required
                ? true
                : isValidPhoneNumber(value) || 'invalid phone number',
            required: required ? 'Please enter a valid phone.' : false,
          }}
          render={({ field: { onChange, value } }) => {
            return (
              <PhoneInput
                onCountryChange={(value: any) => setPhoneCountryIso(value)}
                onFocus={(e: boolean) => setFocused(e)}
                onBlur={() => setFocused(false)}
                defaultCountry={phoneCountryIso}
                value={value}
                // countries=
                countries={['NG']}
                addInternationalOption={false}
                countrySelectProps={{ unicodeFlags: true }}
                countryCallingCodeEditable={false}
                // addInternationalOption={false}
                international={false}
                focusInputOnCountrySelection
                limitMaxLength
                onChange={e => {
                  onChange(e), setOnChangeValue(e);
                }}
                
                style={{
                  boxShadow: `${
                    focused ? '0 0 0 0.2rem rgba(208, 213, 221, .7)' : ''
                  }`,
                  border: `${focused ? '1px solid #242628' : ''}`,
                }}
                id={name}
                className={cs(
                  'relative mt-1 inline-flex w-full rounded-lg border border-gray-300 !bg-gray-50 px-4 py-0.5 leading-none text-gray-700 placeholder-gray-500 transition-colors ease-in-out placeholder:text-sm hover:border-gray-900 focus:border-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-opacity-30',
                  {
                    'border-red-600 transition-colors hover:border-red-600 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50':
                      hasError,
                  }
                )}
                {...rest}
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
        {/* // {errors['phone-input'] && <p className="error-message">Invalid Phone</p>} */}
      </div>
    </div>
  );
};

export default PhoneInputs;
