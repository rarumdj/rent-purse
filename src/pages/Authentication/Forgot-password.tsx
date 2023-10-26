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
import { useHistory, useLocation } from 'react-router-dom';
import AuthCard from 'components/cards/AuthCard';
import Modal from 'components/ui/modal';
import VerifyPasswordReset from './Verify-password-reset';

const ForgotPassword = () => {
  const { push } = useHistory();
  const { pathname } = useLocation();

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
  const isVerify = pathname === '/verify-password-reset';
  const handleBack = () => {
    push('/login');
  };
  return (
    <AuthCard goBack={handleBack}>
      <div className="hidden items-center gap-2 md:flex cursor-pointer" onClick={handleBack}>
        <ArrowLeft2 className="h-5 w-5" /> Go back
      </div>
      <div className="mt-5">
        <h1 className="text-xl font-bold md:text-3xl">Forgot password</h1>
      </div>
      <p className="mt-5 text-sm md:text-base">
        Provide your email address so we can send reset instructions to your
        mail account.
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

        <Button fullWidth className="mt-10">
          Recover account
        </Button>
        <div
          className="mx-auto mt-5 w-full text-center text-sm  text-gray-500 md:text-base"
          onClick={() => push('register')}
        >
          Don’t have an account yet?{' '}
          <span className="cursor-pointer text-primary-700">Sign up</span>
        </div>
      </form>
      <Modal active={isVerify} onClick={() => null} position="center">
        <VerifyPasswordReset />
      </Modal>
    </AuthCard>
  );
};

export default ForgotPassword;
