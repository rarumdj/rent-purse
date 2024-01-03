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
const InviteMembers = () => {
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
        title="Invite members"
        subtitle="Invite your friends to join you in this savings plan"
      />

      <form action="">
        <div className="px-4 pb-6 md:px-8">
          <FormInput<IForms>
            id="plan_name"
            type="text"
            name="plan_name"
            className="my-4"
            placeholder="Johndoa@xyz.com"
            label="Email address"
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
            placeholder="Enter first name"
            label="First name"
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
            placeholder="Enter last name"
            label="Last name"
            register={register}
            rules={{
              required: true,
            }}
            errors={errors}
          />

          <div className="mb-3">
            <CustomSelect
              id="bank"
              label="Choose the savings plan"
              placeholder="Select plan"
              options={BankList}
              control={control}
              name="bank"
              isDisabled
              errors={errors}
              rules={{ required: 'Select a bank' }}
            />
          </div>
        </div>

        <div className="px-4 md:px-8">
          <Button fullWidth>Invite members</Button>
        </div>
      </form>
    </div>
  );
};

export default InviteMembers;
