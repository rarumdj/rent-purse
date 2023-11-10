import Button from 'components/button/button';
import { FormInput } from 'components/ui/input/FormInput';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ReactComponent as QuestionMark } from 'assets/icons/question-mark.svg';
import { Award, InfoCircle } from 'iconsax-react';
import { FormTextarea } from 'components/ui/input/FormTextArea';

interface IForms {
  reason: string;
}

const DeletePlan = () => {
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
    <div className="p-4 md:p-8">
      <h1 className="mb-3 text-center font-duplicate-san text-2xl font-medium text-gray-900 md:text-3xl">
        Delete plan?
      </h1>
      <p className="mb-5 text-center text-gray-30 ">
        But you dey okay sha??, Okay oh
      </p>
      <div className="mx-auto w-full space-y-5 ">
        <div className="mb-5 flex w-full flex-col items-center justify-center">
          <FormTextarea<IForms>
            id="reason"
            name="reason"
            rows={4}
            label={
              <span className="mb-1 flex items-center gap-2 text-main-header">
                Reason for withdrawal <QuestionMark className="p-0.5" />
              </span>
            }
            placeholder="Let us know why you are doing this"
            className="mb-3 w-full"
            register={register}
            rules={{
              required: true,
            }}
            errors={errors}
          />
        </div>

        <Button type="button" className="bg-red-500" fullWidth>
          Delete plan
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
    </div>
  );
};

export default DeletePlan;
