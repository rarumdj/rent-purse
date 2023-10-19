import React, { useState } from 'react';
import { ReactComponent as AppLogo } from 'assets/logo/app-logo.svg';
import { ArrowLeft2 } from 'iconsax-react';
import { useForm } from 'react-hook-form';
import {
  LoginFormFields,
  RegistrationFormFields,
} from '../../models/authModels';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginFormScheme, signUpScheme } from './authSchema';
import { FormInput } from 'components/ui/input/FormInput';
import { FormCheckbox } from 'components/ui/input/FormCheckbox';
import Button from 'components/button/button';
import { useHistory, useLocation } from 'react-router-dom';
import CheckPasswordStrength from 'components/ui/password-strength';
import PhoneInputs from 'components/ui/input/PhoneInputs';
import usePhoneNumber from 'hooks/usePhoneNumber';
import AuthCard from 'components/cards/AuthCard';
import Modal from 'components/ui/modal';
import VerifyEmail from './Verify-email';

const Register = () => {
  const { push } = useHistory();
  const [validatePassword, setValidatePassword] = useState(false);
  const { handlePhoneNumberChange, internationalFormat } = usePhoneNumber();
  const { pathname } = useLocation();
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<RegistrationFormFields>({
    resolver: yupResolver(signUpScheme),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    criteriaMode: 'firstError',
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });

  const onSubmit = handleSubmit(data => {
    console.log(data);
  });

  const isVerify = pathname === '/verify-email';

  return (
    <AuthCard>
      <div className="hidden items-center gap-2 md:flex">
        <ArrowLeft2 className="h-5 w-5" /> Go back
      </div>
      <div className="mt-5">
        <h1 className="text-xl font-bold md:text-3xl">Sign up</h1>
      </div>
      <p className="mb-8 mt-5 text-sm md:text-base">
        Welcome to the future of Savings & Investments
      </p>

      <form onSubmit={onSubmit}>
        <div className="flex w-full flex-col md:flex-row md:gap-3">
          <FormInput<RegistrationFormFields>
            id="first_name"
            type="text"
            name="first_name"
            label="First Name"
            placeholder="First Name"
            className="col-span-12 mb-2 w-full md:col-span-6"
            register={register}
            rules={{ required: true }}
            errors={errors}
          />
          <FormInput<RegistrationFormFields>
            id="last_name"
            type="text"
            name="last_name"
            label="Last Name"
            placeholder="Last Name"
            className="col-span-12 mb-2 w-full md:col-span-6"
            register={register}
            rules={{ required: true }}
            errors={errors}
          />
        </div>

        <FormInput<RegistrationFormFields>
          id="email"
          type="email"
          name="email"
          label="Email"
          placeholder="Enter your email here"
          className="mb-2"
          register={register}
          rules={{
            required: true,
          }}
          errors={errors}
        />

        <PhoneInputs
          name="phone_number"
          errors={errors}
          control={control}
          placeholder="(555) 000-0000"
          label="Phone number"
          classNames="my-2"
          setValue={(localFormat: any, international: any, countryCode: any) =>
            handlePhoneNumberChange(localFormat, international, countryCode)
          }
          value={internationalFormat}
        />

        <FormInput<RegistrationFormFields>
          id="password"
          type="password"
          name="password"
          label="Password"
          placeholder="••••••••"
          className="mb-2"
          register={register}
          rules={{
            required: true,
          }}
          errors={errors}
        />
        <CheckPasswordStrength
          password={watch().password}
          validated={validatePassword}
          validate={setValidatePassword}
        />

        <FormInput<RegistrationFormFields>
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          label="Confirm password"
          placeholder="••••••••"
          className="mb-2"
          register={register}
          rules={{
            required: true,
          }}
          errors={errors}
        />

        <FormInput<RegistrationFormFields>
          id="email"
          type="email"
          name="referral"
          label="Referrer Phone or Promo code (Optional)"
          placeholder="Referrer Phone or Code"
          className="mb-2"
          register={register}
          rules={{
            required: true,
          }}
          errors={errors}
        />

        <FormInput<RegistrationFormFields>
          id="email"
          type="email"
          name="heard_from"
          label="How did you hear about us? (Optional)"
          placeholder="tell us"
          className="mb-6"
          register={register}
          rules={{
            required: true,
          }}
          errors={errors}
        />

        <div className="my-3 flex w-full items-center justify-between">
          <div className="flex items-center">
            <FormCheckbox<RegistrationFormFields>
              id="acceptTerms"
              name="acceptTerms"
              label={
                <div className="space-x-1 text-xs font-normal">
                  <span>I have read and agree to signmaleap</span>
                  <span className="cursor-pointer text-blue-gray-600 underline">
                    Terms of Service
                  </span>
                  <span>and</span>
                  <span className="cursor-pointer text-blue-gray-600 underline">
                    Privacy Policy.
                  </span>
                </div>
              }
              rules={{
                required: true,
              }}
              register={register}
              errors={errors}
            />
          </div>
        </div>
        <Button className="mt-8" fullWidth>
          Submit
        </Button>
        <div
          className="mx-auto mt-5 w-full text-center text-sm  text-gray-500 md:text-base"
          onClick={() => push('login')}
        >
          Don’t have an account?{' '}
          <span className="cursor-pointer text-primary-700">Sign in</span>
        </div>
      </form>
      <Modal active={isVerify} onClick={() => null}>
        <VerifyEmail />
      </Modal>
    </AuthCard>
  );
};

export default Register;
