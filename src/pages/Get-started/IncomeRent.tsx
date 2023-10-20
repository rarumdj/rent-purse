import Button from 'components/button/button';
import { CustomAmount } from 'components/ui/input/CustomAmount';
import ModalHeader from 'components/ui/modal/ModalHeader';
import React from 'react';
import { useForm } from 'react-hook-form';
import { currencyOptions } from 'utils/formOptions';

interface IForms {
  monthly_income: { amount: string; currency: string };
  annual_rent: { amount: string; currency: string };
}
const IncomeRent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    resetField,
  } = useForm<IForms>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    criteriaMode: 'firstError',
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });
  return (
    <div>
      <ModalHeader
        title="Income and rent Details"
        subtitle="Provide information about your income and rent to help us customize
      your financial plan."
      />
      <form className="mt-8">
        <CustomAmount
          currency={currencyOptions}
          name="monthly_income"
          label="Expected Monthly Income *"
          control={control}
          defaultValue=""
          errors={errors}
          rules={{ required: 'Enter an amount' }}
          id="monthly_income"
          className="mb-3"
          placeholder="0.00"
        />

        <CustomAmount
          currency={currencyOptions}
          name="annual_rent"
          label="Annual house rent *"
          control={control}
          defaultValue=""
          errors={errors}
          rules={{ required: 'Enter an amount' }}
          id="annual_rent"
          className="mb-3"
          placeholder="0.00"
        />

        <div className="pt-4">
          <Button fullWidth>Save</Button>
        </div>
      </form>
    </div>
  );
};

export default IncomeRent;
