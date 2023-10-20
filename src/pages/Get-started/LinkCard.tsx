import ModalHeader from 'components/ui/modal/ModalHeader';
import React from 'react';
import { ReactComponent as VerveLogo } from 'assets/image/cards/verve.svg';
import { ReactComponent as QuestionMark } from 'assets/icons/question-mark.svg';
import { useForm } from 'react-hook-form';
import { FormInput } from 'components/ui/input/FormInput';

interface IForms {
  monthly_income: { amount: string; currency: string };
  annual_rent: { amount: string; currency: string };
  amount: { amount: string; currency: string };
  frequency: 'daily' | 'weekly' | 'monthly';
  automation_status: string;
  rent_due: string;
  target_date: string;
}
const LinkCard = () => {
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
        title="Link a card"
        subtitle="Securely connect your bank account to enable you make faster transactions."
      />

      <div className="mt-8">
        <div className="flex h-44 w-full flex-col rounded-lg bg-card_bg bg-cover p-4 md:h-64 md:p-6">
          <VerveLogo className="ml-auto" />
          <div className="mt-auto h-fit w-full ">
            <h4 className="mb-2 text-sm text-white md:mb-3 md:text-md">
              CARD NUMBER
            </h4>
            <h1 className="text-lg text-white md:text-2xl">
              1234 5678 9012 3456
            </h1>
            <div className="mt-3 flex items-center justify-between md:mt-6">
              <h4 className="text-sm text-white md:text-md">CARD NUMBER</h4>
              <div className="flex items-center gap-2">
                <p className="text-[11px] leading-none text-white ">
                  VALID
                  <br />
                  THRU
                </p>
                <span className="text-sm text-white md:text-md">08/24</span>
              </div>
            </div>
          </div>
        </div>

        <form className="mt-6">
          <FormInput<IForms>
            id="rent_due"
            type="text"
            name="rent_due"
            label="Card Holder Name"
            placeholder="Enter name"
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
            label="Card Number"
            placeholder="0000 0000 0000 0000"
            className="mb-3"
            register={register}
            rules={{
              required: true,
            }}
            errors={errors}
          />

          <div className="flex w-full flex-col md:flex-row md:gap-3">
            <FormInput<IForms>
              id="first_name"
              type="text"
              name="rent_due"
              label={
                <span className="flex items-center gap-2">
                  CVV <QuestionMark className="p-0.5" />
                </span>
              }
              placeholder="123"
              className="col-span-12 mb-3 w-full md:col-span-6"
              register={register}
              rules={{ required: true }}
              errors={errors}
            />
            <FormInput<IForms>
              id="last_name"
              type="text"
              name="rent_due"
              label={
                <span className="flex items-center gap-2">
                  Expiry date <QuestionMark className="p-0.5" />
                </span>
              }
              placeholder="08/24"
              className="col-span-12 mb-3 w-full md:col-span-6"
              register={register}
              rules={{ required: true }}
              errors={errors}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LinkCard;
