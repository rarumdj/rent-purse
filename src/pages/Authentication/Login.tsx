import React from 'react';
import { ReactComponent as AppLogo } from 'assets/logo/app-logo.svg';
import { ArrowLeft2 } from 'iconsax-react';
import { useForm } from 'react-hook-form';
import { LoginFormFields } from '../../models/authModels';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginFormScheme } from './authSchema';
import { FormInput } from 'components/ui/input/FormInput';
import { FormCheckbox } from 'components/ui/input/FormCheckbox';
import Button from 'components/button/button';
import { useHistory } from 'react-router-dom';
import AuthCard from 'components/cards/AuthCard';

const Login = () => {
  const { push } = useHistory();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormFields>({
    resolver: yupResolver(loginFormScheme),
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

  return (
    <AuthCard>
      <div className="hidden items-center gap-2 md:flex">
        <ArrowLeft2 className="h-5 w-5" /> Go back
      </div>
      <div className="mt-5">
        <h1 className="text-xl font-bold md:text-3xl">Sign in</h1>
      </div>
      <p className="mt-5 text-sm md:text-base">
        Provide your email address and password to continue
      </p>

      <form onSubmit={onSubmit} className="mt-6">
        <FormInput<LoginFormFields>
          id="email"
          type="email"
          name="email"
          label="Email"
          placeholder="Enter your email here"
          className="mb-3"
          register={register}
          rules={{
            required: true,
          }}
          errors={errors}
        />
        <FormInput<LoginFormFields>
          id="password"
          type="password"
          name="password"
          label="Password"
          placeholder="••••••••"
          className="mb-3"
          register={register}
          rules={{
            required: false,
          }}
          errors={errors}
        />
        <div className="my-3 flex w-full items-center justify-between">
          <div className="flex w-full items-center justify-between">
            <FormCheckbox<LoginFormFields>
              id="Remember"
              name="Remember"
              label="Remember me"
              register={register}
              rules={{
                required: false,
              }}
              errors={errors}
            />
            <div
              className="cursor-pointer text-sm"
              onClick={() => push('forgot-password')}
            >
              Forgot password
            </div>
          </div>
        </div>
        <Button className="mt-8" fullWidth>
          Sign in
        </Button>
        <div
          className="mx-auto mt-5 w-full text-center text-sm  text-gray-500 md:text-base"
          onClick={() => push('register')}
        >
          Don’t have an account yet?{' '}
          <span className="cursor-pointer text-primary-700">Sign up</span>
        </div>
      </form>
    </AuthCard>
  );
};

export default Login;
