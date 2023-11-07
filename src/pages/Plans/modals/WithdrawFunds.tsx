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

const WithdrawFunds = () => {
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
        title="Withdraw funds"
        subtitle="You might miss your scheduled saving goal because of this action, do you want to continue?"
      />

      <form action="">
        <div className="py-6">
          <div className="mb-3">
            <FormInput<IForms>
              id="rent_due"
              type="text"
              name="rent_due"
              label={
                <CustomInputLabel
                  title="Enter amount"
                  subtitle="We will charge you a percentage, because, Wetin really dey worry you?"
                />
              }
              placeholder="$1000"
              className="mb-3"
              register={register}
              rules={{
                required: true,
              }}
              errors={errors}
            />

            <FormInput<IForms>
              id="rent_due"
              type="text"
              name="rent_due"
              label={
                <span className="mb-1 flex items-center gap-2 text-main-header">
                  Reason for withdrawal <QuestionMark className="p-0.5" />
                </span>
              }
              placeholder="Let us know why you are doing this"
              className="mb-3"
              register={register}
              rules={{
                required: true,
              }}
              errors={errors}
            />
          </div>

          <Button className="mt-6" fullWidth>
            Withdraw
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

export default WithdrawFunds;
