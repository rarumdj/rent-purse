import Button from 'components/button/button';
import { CustomAmount } from 'components/ui/input/CustomAmount';
import { FormCheckbox } from 'components/ui/input/FormCheckbox';
import { FormInput } from 'components/ui/input/FormInput';
import ModalHeader from 'components/ui/modal/ModalHeader';
import React from 'react';
import { useForm } from 'react-hook-form';
import { currencyOptions } from 'utils/formOptions';

interface IForms {
  monthly_income: { amount: string; currency: string };
  annual_rent: { amount: string; currency: string };
  amount: { amount: string; currency: string };
  frequency: 'daily' | 'weekly' | 'monthly';
  automation_status: string;
  rent_due: string;
  target_date: string;
}
const BudgetGoal = () => {
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
        title="Budget and Financial Goal"
        subtitle="Create a plan to help you track your progress towards your goal."
      />
      <form className="mt-8">
        <div>
          <h6 className="md:text-md text-sm font-medium text-main-header">
            Saving Frequency
          </h6>
          <p className="md:text-sm text-xs text-gray-600">
            Choose how often you would like to save.
          </p>

          <div className="flex gap-3">
            <FormCheckbox<IForms>
              id="frequency"
              name="frequency"
              label="Daily"
              type="radio"
              value="daily"
              // defaultChecked={notifications?.transactions.notifyInflow.includes(
              //   'email'
              // )}
              className="!my-4 w-full"
              wrapperClass="!flex !items-start"
              register={register}
              rules={{
                required: true,
              }}
              errors={errors}
            />
            <FormCheckbox<IForms>
              id="frequency"
              name="frequency"
              label="Weekly"
              type="radio"
              value="weekly"
              // defaultChecked={notifications?.transactions.notifyInflow.includes(
              //   'email'
              // )}
              className="!my-4 w-full"
              wrapperClass="!flex !items-start"
              register={register}
              rules={{
                required: true,
              }}
              errors={errors}
            />
            <FormCheckbox<IForms>
              id="frequency"
              name="frequency"
              label="Monthly"
              type="radio"
              value="monthly"
              // defaultChecked={notifications?.transactions.notifyInflow.includes(
              //   'email'
              // )}
              className="!my-4 w-full"
              wrapperClass="!flex !items-start"
              register={register}
              rules={{
                required: true,
              }}
              errors={errors}
            />
          </div>
        </div>
        <CustomAmount
          currency={currencyOptions}
          name="amount"
          label="Amount *"
          control={control}
          defaultValue=""
          errors={errors}
          rules={{ required: 'Enter an amount' }}
          id="amount"
          className="mb-3"
          placeholder="0.00"
        />

        <div className="mt-4">
          <h6 className="md:text-md text-sm font-medium text-main-header">
            Savings Automation Status
          </h6>
          <FormCheckbox<IForms>
            id="automation_status"
            name="automation_status"
            label={
              <div className="text-xs">
                Enable for automatic contributions to make savings easy and
                effortless.
              </div>
            }
            type="checkbox"
            className="!mb-4 mt-2 w-full"
            wrapperClass="!flex !items-start"
            register={register}
            rules={{
              required: true,
            }}
            errors={errors}
          />
        </div>

        <div className="mb-3">
          <h6 className="md:text-md text-sm font-medium text-main-header">
            Rent Due Date
          </h6>
          <p className="md:text-sm text-xs text-gray-600">
            Specify the due date for your upcoming rent payment.
          </p>
          <FormInput<IForms>
            id="rent_due"
            type="date"
            name="rent_due"
            className="my-3"
            register={register}
            rules={{
              required: true,
            }}
            errors={errors}
          />
        </div>

        <div className="mb-3">
          <h6 className="md:text-md text-sm font-medium text-main-header">
            Target Date
          </h6>
          <p className="md:text-sm text-xs text-gray-600">
            When do you aim to reach your rent savings goal
          </p>
          <FormInput<IForms>
            id="target_date"
            type="date"
            name="target_date"
            className="my-3"
            register={register}
            rules={{
              required: true,
            }}
            errors={errors}
          />
        </div>

        <div className="pt-4">
          <Button fullWidth>Save</Button>
        </div>
      </form>
    </div>
  );
};

export default BudgetGoal;
