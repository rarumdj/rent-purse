import FileUpload from 'components/ui/fileUpload/FileUpload';
import { CustomUploadLabel } from 'components/ui/fileUpload/customLabels';
import { FormCheckbox } from 'components/ui/input/FormCheckbox';
import ModalHeader from 'components/ui/modal/ModalHeader';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface IForms {
  document_type: 'nin' | 'passport' | 'dl' | 'vc';
}

const DocumentUpload = () => {
  const [file, setFile] = useState('');
  const [uploadingFile, setUploadingFile] = useState(false);

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
        title="Document Upload"
        subtitle="For Verification, Please Upload ID Image (NIN, Intl. passport, Drivers license, or Voters card)."
      />
      <form className="mt-8">
        <div>
          <p className="text-xs text-gray-600 md:text-sm">
            Please select which of these documents you intend to upload.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <FormCheckbox<IForms>
              id="document_type"
              name="document_type"
              label="NIN"
              type="radio"
              value="nin"
              className="w-full"
              wrapperClass="!flex !items-start"
              register={register}
              rules={{
                required: true,
              }}
              errors={errors}
            />
            <FormCheckbox<IForms>
              id="document_type"
              name="document_type"
              label="Intl. Passport"
              type="radio"
              value="passport"
              className="w-full"
              wrapperClass="!flex !items-start"
              register={register}
              rules={{
                required: true,
              }}
              errors={errors}
            />
            <FormCheckbox<IForms>
              id="document_type"
              name="document_type"
              label="Drivers License"
              type="radio"
              value="dl"
              className="w-full"
              wrapperClass="!flex !items-start"
              register={register}
              rules={{
                required: true,
              }}
              errors={errors}
            />
            <FormCheckbox<IForms>
              id="document_type"
              name="document_type"
              label="Voters Card"
              type="radio"
              value="vc"
              className="w-full"
              wrapperClass="!flex !items-start"
              register={register}
              rules={{
                required: true,
              }}
              errors={errors}
            />
          </div>
          <div className="mt-6 h-60">
            <FileUpload
              type="file"
              setUploadingFile={setUploadingFile}
              customLabel={({ dragActive, onButtonClick }) =>
                CustomUploadLabel({
                  dragActive,
                  onButtonClick,
                  postion: 'column',
                })
              }
              setFile={({ url }: any) => setFile(url)}
              file={file}
              preview
              fullHeight
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default DocumentUpload;
