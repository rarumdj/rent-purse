import Button from 'components/button/button';
import { CustomAmount } from 'components/ui/input/CustomAmount';
import CustomInputLabel from 'components/ui/input/CustomInputLabel';
import CustomSelect from 'components/ui/input/CustomSelect';
import { FormCheckbox } from 'components/ui/input/FormCheckbox';
import { FormInput } from 'components/ui/input/FormInput';
import PhoneInputs from 'components/ui/input/PhoneInputs';
import ModalHeader from 'components/ui/modal/ModalHeader';
import usePhoneNumber from 'hooks/usePhoneNumber';
import React from 'react';
import { useForm } from 'react-hook-form';
import { BankList, currencyOptions } from 'utils/formOptions';

interface IForms {
  monthly_income: { amount: string; currency: string };
  annual_rent: { amount: string; currency: string };
  amount: { amount: string; currency: string };
  frequency: 'daily' | 'weekly' | 'monthly';
  automation_status: string;
  rent_due: string;
  target_date: string;
}
const HouseOwner = () => {
  const { handlePhoneNumberChange, internationalFormat } = usePhoneNumber();

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
        title="House Owner/Manager Info"
        subtitle="Provide information about your landlord or Property Mgt Co. for a smooth rent payment process."
      />
      <form className="mt-8">
        <FormInput<IForms>
          id="rent_due"
          type="text"
          name="rent_due"
          label={
            <CustomInputLabel title="Landlord’s or Property Mgt Co. Name" />
          }
          placeholder="Enter name"
          className="mb-3"
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
          placeholder="(234) 000-0000"
          label={
            <CustomInputLabel title="Landlord’s or Property Mgt Co. Contact Number" />
          }
          classNames="mb-3"
          setValue={(localFormat: any, international: any, countryCode: any) =>
            handlePhoneNumberChange(localFormat, international, countryCode)
          }
          value={internationalFormat}
        />

        <FormInput<IForms>
          id="rent_due"
          type="text"
          name="rent_due"
          className="mb-3"
          label={
            <CustomInputLabel title="Landlord’s or Property Mgt Co. Address" />
          }
          placeholder="Enter address"
          register={register}
          rules={{
            required: true,
          }}
          errors={errors}
        />

        <div className="mb-3">
          <CustomSelect
            id="bank"
            label={
              <CustomInputLabel title="Landlord’s or Property Mgt Co. Bank" />
            }
            placeholder="Select bank"
            options={BankList}
            control={control}
            name="bank"
            errors={errors}
            rules={{ required: 'Select a bank' }}
          />
        </div>

        <FormInput<IForms>
          id="rent_due"
          type="text"
          name="rent_due"
          className="my-3"
          label={
            <CustomInputLabel title="Landlord’s or Property Mgt Co. Account Number" />
          }
          placeholder="Enter account number"
          register={register}
          rules={{
            required: true,
          }}
          errors={errors}
        />
        <div className="pt-4">
          <Button fullWidth>Save</Button>
        </div>
      </form>
    </div>
  );
};

export default HouseOwner;
