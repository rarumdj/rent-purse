import Button from 'components/button/button';
import CustomInputLabel from 'components/ui/input/CustomInputLabel';
import CustomSelect from 'components/ui/input/CustomSelect';
import CustomToggle from 'components/ui/input/CustomToggle';
import { FormCheckbox } from 'components/ui/input/FormCheckbox';
import { FormInput } from 'components/ui/input/FormInput';
import ModalHeader from 'components/ui/modal/ModalHeader';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BankList } from 'utils/formOptions';
import { ReactComponent as WrapedInfoIcon } from 'assets/icons/wrapped-info-icon.svg';
interface IForms {
  plan_name: string;
  target_amount: { amount: string; currency: string };
  annual_rent: { amount: string; currency: string };
  amount: { amount: string; currency: string };
  frequency: 'daily' | 'weekly' | 'monthly';
  automation_status: boolean;
  rent_due: string;
  target_date: string;
  duration: boolean;
}
const CreatePlan = () => {
  const [isChecked, setIsChecked] = useState(false);

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
        className="px-4 pb-6 md:px-8"
        title="Create a new savings plan"
        subtitle="Create a plan to help you track your progress towards your goal."
      />
      <form action="">
        <div className="border-b px-4 py-6 md:px-8">
          <h3 className="mb-6 text-lg font-semibold text-main-header md:text-2xl">
            Personalize plan
          </h3>

          <FormInput<IForms>
            id="plan_name"
            type="text"
            name="plan_name"
            className="my-4"
            placeholder="Plan name"
            label={
              <CustomInputLabel
                title="Plan Name"
                subtitle="Customize your plan by giving it a name."
              />
            }
            register={register}
            rules={{
              required: true,
            }}
            errors={errors}
          />

          <FormInput<IForms>
            id="plan_name"
            type="text"
            name="plan_name"
            className="my-4"
            placeholder="Rent amount"
            label={
              <CustomInputLabel
                title="Target amount"
                subtitle="How much is your rent?"
              />
            }
            register={register}
            rules={{
              required: true,
            }}
            errors={errors}
          />

          {/* <FormCheckbox<IForms>
            id="duration"
            name="duration"
            label={
              <CustomInputLabel
                title="Plan duration"
                subtitle="Include plan duration a start and end date."
              />
            }
            type="checkbox"
            className="!mt-6 w-full"
            wrapperClass="!flex !items-start"
            register={register}
            rules={{
              required: true,
            }}
            errors={errors}
          /> */}
        </div>

        <div className="border-b px-4 py-6 md:px-8">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-main-header md:text-2xl">
              Savings duration
            </h3>
            <CustomToggle isChecked={isChecked} setIsChecked={setIsChecked} />
          </div>
          <div className="mb-6 text-sm text-gray-700">
            Include plan duration a start and end date.
          </div>

          <FormInput<IForms>
            disabled={!isChecked}
            id="plan_name"
            type="date"
            name="plan_name"
            className="my-4"
            placeholder="Plan name"
            label={
              <CustomInputLabel
                disabled={!isChecked}
                title="Start Date"
                subtitle="Specify the start date for your plan payment."
              />
            }
            register={register}
            rules={{
              required: true,
            }}
            errors={errors}
          />

          <FormInput<IForms>
            disabled={!isChecked}
            id="plan_name"
            type="date"
            name="plan_name"
            className="my-4"
            placeholder="Rent amount"
            label={
              <CustomInputLabel
                disabled={!isChecked}
                title="End Date"
                subtitle="When do you aim to reach your plan savings goal"
              />
            }
            register={register}
            rules={{
              required: true,
            }}
            errors={errors}
          />

          <div className="my-4 mt-6 flex items-center gap-3 rounded-lg border border-green-200 bg-success-50 p-3">
            <div>
              <WrapedInfoIcon />
            </div>
            <div className="text-sm">
              This your saving plan will take approximately 10 months 3 weeks
              and ten days to save with regular N100
            </div>
          </div>
        </div>
        <div className="border-b px-4 py-6 md:px-8">
          <h3 className="mb-6 text-lg font-semibold text-main-header md:text-2xl">
            Savings Plan and Automation
          </h3>

          <div>
            <CustomInputLabel
              title="Saving Frequency"
              subtitle="Choose how often you would like to save."
            />
            <div className="mt-2 flex gap-3">
              <FormCheckbox<IForms>
                id="frequency"
                name="frequency"
                label="Daily"
                type="radio"
                value="daily"
                // defaultChecked={notifications?.transactions.notifyInflow.includes(
                //   'email'
                // )}
                className="!mb-4 w-full"
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
                className="!mb-4 w-full"
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
                className="!mb-4 w-full"
                wrapperClass="!flex !items-start"
                register={register}
                rules={{
                  required: true,
                }}
                errors={errors}
              />
            </div>
          </div>

          <FormInput<IForms>
            id="plan_name"
            type="text"
            name="plan_name"
            className="mb-4"
            placeholder="Enter amount"
            label={<CustomInputLabel title="Enter amount" />}
            register={register}
            rules={{
              required: true,
            }}
            errors={errors}
          />

          <FormCheckbox<IForms>
            id="automation_status"
            name="automation_status"
            label={
              <CustomInputLabel
                title="Savings Automation Status"
                subtitle=" Enable for automatic contributions to make savings easy and
                effortless."
              />
            }
            type="checkbox"
            className="!mt-6 w-full"
            wrapperClass="!flex !items-start"
            register={register}
            rules={{
              required: true,
            }}
            errors={errors}
          />
        </div>

        <div className="px-4 py-6 md:px-8">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-main-header md:text-2xl">
              Auto payout
            </h3>
            <p className="text-sm text-gray-600">
              Automatically pay savings at the end of the saving period
            </p>
          </div>
          <div className="mb-3">
            <CustomSelect
              id="bank"
              label={<CustomInputLabel title="Bank name" />}
              placeholder="Select bank"
              options={BankList}
              control={control}
              name="bank"
              errors={errors}
              rules={{ required: 'Select a bank' }}
            />
          </div>
          <FormInput<IForms>
            id="plan_name"
            type="text"
            name="plan_name"
            className="my-4"
            placeholder="Enter account number"
            label={<CustomInputLabel title="Account number" />}
            register={register}
            rules={{
              required: true,
            }}
            errors={errors}
          />

          <FormInput<IForms>
            id="plan_name"
            type="text"
            name="plan_name"
            className="my-4"
            placeholder="Enter phone number"
            label={<CustomInputLabel title="Phone number" />}
            register={register}
            rules={{
              required: true,
            }}
            errors={errors}
          />

          <FormCheckbox<IForms>
            id="automation_status"
            name="automation_status"
            label={
              <CustomInputLabel
                subtitle="Allow automatic payment as soon as savings is complete?"
              />
            }
            type="checkbox"
            className="!mt-6 w-full"
            wrapperClass="!flex !items-start"
            register={register}
            rules={{
              required: true,
            }}
            errors={errors}
          />

          <Button className="mt-6" fullWidth>
            Create plan
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreatePlan;
