import { DollarCoin } from 'assets/image';
import Button from 'components/button/button';
import SectionTag from 'components/cards/SectionTag';
import CustomInputLabel from 'components/ui/input/CustomInputLabel';
import CustomSelect from 'components/ui/input/CustomSelect';
import { FormInput } from 'components/ui/input/FormInput';
import ModalHeader from 'components/ui/modal/ModalHeader';
import { ArrowRight2, Award, InfoCircle } from 'iconsax-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ReactComponent as QuestionMark } from 'assets/icons/question-mark.svg';
import { FormCheckbox } from 'components/ui/input/FormCheckbox';
import { BankList } from 'utils/formOptions';

interface IForms {
  plan_name: string;
  target_amount: { amount: string; currency: string };
  annual_rent: { amount: string; currency: string };
  amount: { amount: string; currency: string };
  frequency: 'daily' | 'weekly' | 'monthly';
  automation_status: string;
  rent_due: string;
  target_date: string;
}

const UpdateAccount = () => {
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
        className="pb-6"
        title="Update destination account"
        subtitle="Please note you might only be allowed to change these details a couple of times for this saving plan"
      />

      <form action="">
        <div className="py-6">
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

          <Button className="mt-6" fullWidth>
            Update
          </Button>
          <div className="mt-4 w-fit gap-4 space-y-2">
            <div className="flex  w-fit items-center gap-2 rounded-lg bg-success-100 px-2 py-1 text-sm text-green-950">
              <Award className="h-5 w-5" />
              You will lose 78% of your credit score
            </div>
            <div className="flex w-fit items-center gap-2 rounded-lg bg-error-50 px-2 py-1 text-sm text-gray-600">
              <InfoCircle className="h-5 w-5" />
              Learn about credit score
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateAccount;
