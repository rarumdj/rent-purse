import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'components/button/button';
import AuthCard from 'components/cards/AuthCard';
import { FormInput } from 'components/ui/input/FormInput';
import CheckPasswordStrength from 'components/ui/password-strength';
import usePhoneNumber from 'hooks/usePhoneNumber';
import { ArrowLeft2 } from 'iconsax-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { RegistrationFormFields } from '../../models/authModels';
import { signUpScheme } from './authSchema';

const ResetPassword = () => {
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

  return (
    <AuthCard>
      <div className="hidden items-center gap-2 md:flex">
        <ArrowLeft2 className="h-5 w-5" /> Go back
      </div>
      <div className="mt-5">
        <h1 className="text-xl font-bold md:text-3xl">Reset your password</h1>
      </div>
      <p className="mb-8 mt-5 text-sm md:text-base">
        Welcome back! Please create a new password
      </p>

      <form onSubmit={onSubmit}>
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
          autoComplete="off"
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
          autoComplete="off"
          errors={errors}
        />

        <Button className="mt-8" fullWidth>
          Save
        </Button>
      </form>
    </AuthCard>
  );
};

export default ResetPassword;
