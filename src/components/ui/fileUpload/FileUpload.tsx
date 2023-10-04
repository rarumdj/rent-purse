import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import { CloseCircle, Status } from 'iconsax-react';
import React, { FC, useEffect, useState } from 'react';
// import { uploadNewFile } from 'redux/api/fileUpload';

interface IFileUpload {
  type: 'text' | 'number' | 'file';
  group?: string;
  customLabel?: React.FunctionComponent<any>;
  setFile?: any;
  setUploadingFile?: React.Dispatch<React.SetStateAction<boolean>>;
  disabled?: boolean;
  success?: boolean;
  name?: string;
}
const FileUpload: FC<IFileUpload> = ({
  type,
  group,
  customLabel: CustomLabel,
  setFile,
  setUploadingFile,
  disabled,
  success,
  name = 'file',
}) => {
  // drag state
  const [dragActive, setDragActive] = React.useState(false);
  // ref
  const inputRef = React.useRef<any>(null);

  const [fileName, setFileName] = useState('');
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [uploadedDiv, setUploadedDiv] = useState(false);

  const getResult = async (data: any) => {
    setUploading(false);
    setFileName(data.fileName);
    if (setUploadingFile) setUploadingFile(false);
    await setFile(data);
  };
  const handleFileChange = async (file: any) => {
    setUploading(true);
    setUploadedDiv(true);
    if (setUploadingFile) setUploadingFile(true);
    setFileName(file.name);

    // const upload = await uploadNewFile(
    //   file,
    //   setProgress,
    //   setUploading,
    //   getResult
    // );

    // if (upload === 'error') {
    //   if (setUploadingFile) setUploadingFile(false);
    //   handleRemove();
    //   setFileName('');
    // }
  };

  const handleRemove = () => {
    setUploadedDiv(false);
    inputRef.current.value = '';
    setFileName('');
    setProgress(0);
    setFile({
      fileName: '',
      response: '',
      url: '',
    });
  };

  useEffect(() => {
    if (success) handleRemove();
  }, [success]);

  // handle drag events
  const handleDrag = function (e: any) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e: any) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFileChange(e.target.files[0]);
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };

  const UploadComponent = () => {
    return (
      <div className="relative">
        <div
          id="form-file-upload"
          className="relative w-full max-w-full"
          onDragEnter={handleDrag}
          onSubmit={e => e.preventDefault()}
        >
          <input
            ref={inputRef}
            type="file"
            id={name}
            className="hidden"
            disabled={disabled}
            name={name}
            multiple={false}
            accept="image/*,application/pdf"
            onChange={handleChange}
          />
          <div className="flex flex-col">
            {group && (
              <span className="inline-flex w-7/12 max-w-3xl items-center border-gray-300 py-1  text-sm text-gray-900">
                {group}
              </span>
            )}

            {CustomLabel ? (
              <>
                {!uploadedDiv && (
                  <CustomLabel
                    dragActive={dragActive}
                    onButtonClick={onButtonClick}
                  />
                )}
              </>
            ) : (
              <>
                {!uploadedDiv && (
                  <label
                    id={name}
                    htmlFor={name}
                    className={classNames(
                      'flex h-full w-full cursor-pointer items-center  rounded-r-lg border border-gray-200 bg-white px-4 py-3.5 text-gray-500 transition-colors ease-in-out hover:border-gray-900 active:border-gray-900 active:outline-none active:ring-gray-400 active:ring-opacity-30 active:ring-4',
                      dragActive ? 'bg-white' : '',
                      { ['disabled']: disabled }
                    )}
                  >
                    <div className="flex h-full w-full items-center justify-between text-sm">
                      <div className="flex items-center">
                        <ExclamationCircleIcon className="mr-2 h-6 w-6 text-warning-500" />
                        <p className="text-gray-500">
                          Drag and drop your file here or
                        </p>
                        <button
                          type="button"
                          className="cursor-pointer bg-transparent p-1 text-gray-800 underline"
                          onClick={onButtonClick}
                        >
                          Browse
                        </button>
                      </div>
                    </div>
                  </label>
                )}
              </>
            )}
            {uploadedDiv && (
              <div
                className={classNames(
                  'flex h-full w-full items-center justify-between rounded-lg border border-dotted border-gray-200 bg-white px-4 py-2 text-gray-500 transition-colors ease-in-out ',
                  { ['rounded-r-lg']: !CustomLabel }
                )}
              >
                <span className="overflow-hidden text-xs">{fileName}</span>
                {uploading ? (
                  <div className="rounded-lg bg-blue-50 p-2">
                    <Status className="h-6 w-6 animate-spin  text-blue-400" />
                  </div>
                ) : (
                  <div
                    onClick={handleRemove}
                    className="cursor-pointer rounded-lg bg-error-50 p-2"
                  >
                    <CloseCircle className="h-6 w-6 text-error-700" />
                  </div>
                )}
              </div>
            )}
          </div>

          {dragActive && (
            <div
              id="drag-file-element"
              className="absolute inset-0 h-full w-full rounded-sm"
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            ></div>
          )}
        </div>
      </div>
    );
  };

  return <>{UploadComponent()}</>;
};

export default FileUpload;
