import { DollarCoin } from 'assets/image';
import Button from 'components/button/button';
import SectionTag from 'components/cards/SectionTag';
import CustomInputLabel from 'components/ui/input/CustomInputLabel';
import CustomSelect from 'components/ui/input/CustomSelect';
import { FormInput } from 'components/ui/input/FormInput';
import ModalHeader from 'components/ui/modal/ModalHeader';
import { ArrowRight2 } from 'iconsax-react';
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

const PaymentLink = () => {
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
        title="Share payment link"
        subtitle="Please note you might only be allowed to change these details a couple of times for this saving plan"
      />

      <div className="border-b px-4 pb-2 md:px-8">
        <div className="relative my-8 w-full items-center justify-between rounded-lg bg-main-header bg-star_bg bg-cover p-4 ">
          <SectionTag
            className="md:col-start-1 md:col-end-11"
            image={<img src={DollarCoin} alt="coin" className="h-fit w-fit" />}
            title="We reduce the effects of inflation on your savings"
            description="We help you save your rent in dollars this helps to mitigate the cost of inflation by a wholesome 25%😋"
            type="small"
            descClass="!text-white"
            titleClass="!text-white"
          />
          <Button
            className="!mt-4 flex h-9 w-fit items-center justify-center gap-2 py-0 text-sm text-white md:col-start-11 md:col-end-13 md:mt-0"
            btnType="withoutbg"
            border
            animate={false}
          >
            Learn More <ArrowRight2 className="h-3 w-3 text-white" />
          </Button>
        </div>
      </div>

      <form action="">
        <div className="border-b px-4 py-6 md:px-8">
          <div className="mb-3">
            <CustomSelect
              id="bank"
              label={
                <CustomInputLabel title="Choose the savings plan to fund" />
              }
              placeholder="House rent"
              options={[]}
              control={control}
              name="house_rent"
              errors={errors}
              rules={{ required: 'Select a plan' }}
            />
          </div>
        </div>

        <div className="px-4 py-6 md:px-8">
          <h3 className="mb-6 text-lg font-semibold text-main-header md:text-2xl">
            Card details
          </h3>

          <div className="mb-3">
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
          </div>

          <FormCheckbox<IForms>
            id="automation_status"
            name="automation_status"
            label={
              <CustomInputLabel subtitle="Save card details for next time?" />
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
            Fund plan
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PaymentLink;
