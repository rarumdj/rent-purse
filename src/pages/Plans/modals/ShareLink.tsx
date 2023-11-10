import Button from 'components/button/button';
import SectionTag from 'components/cards/SectionTag';
import { FormTextarea } from 'components/ui/input/FormTextArea';
import ModalHeader from 'components/ui/modal/ModalHeader';
import { Copy } from 'iconsax-react';
import React from 'react';
import { useForm } from 'react-hook-form';

interface IForms {
  reason: string;
}

const ShareLink = () => {
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
        <div className="relative my-8 w-full items-center justify-between rounded-lg border border-gray-200 bg-gray-100 p-4 ">
          <h5 className="mb-2 text-sm font-semibold text-gray-600">
            House rent
          </h5>
          <h1 className="flex flex-col text-2xl font-bold text-main-header md:text-4xl">
            $20,000/
            <span className="text-md font-medium text-gray-600 md:text-xl">
              $4,000,000.01
            </span>
          </h1>
          <div className="relative mt-3 h-3 w-full overflow-hidden rounded-full bg-[#EEEDFB] md:h-5">
            <div className="absolute z-10 h-full w-2/6 rounded-full bg-[#554BDB]" />
            <div className="absolute h-full w-5/6 rounded-full bg-[#554bdb36]" />
          </div>
        </div>
      </div>

      <div className="px-4 py-6 md:px-8">
        <div className="mb-3 flex w-full flex-col items-center justify-center">
          <FormTextarea<IForms>
            id="reason"
            name="reason"
            rows={4}
            label="Add a description"
            placeholder="Add a description to invite friends to your savings plan"
            className="mb-3 w-full"
            register={register}
            rules={{
              required: true,
            }}
            errors={errors}
          />
        </div>

        <Button type="button" className="gap-2" fullWidth>
          Copy link <Copy className="text-white h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default ShareLink;
