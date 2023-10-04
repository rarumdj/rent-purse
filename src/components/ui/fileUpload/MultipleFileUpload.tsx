import { Input } from 'components/ui/input/atom/Input';
import FileUpload from 'components/ui/fileUpload/FileUpload';
import React, { FC, useState } from 'react';
import { CustomUploadLabel } from './customLabels';
interface IFileUpload {
  value: IuploadItem[] | undefined;
  setValue: React.Dispatch<React.SetStateAction<IuploadItem[] | undefined>>;
  setUploadingFile?: React.Dispatch<React.SetStateAction<boolean>>;
  uploadingFile?: boolean;
  setFileChange: React.Dispatch<React.SetStateAction<boolean>>;
  fileChange: boolean;
}

export interface IuploadItem {
  document?: string;
  name?: string;
  requirementId?: number;
  requirementType?: 'number' | 'text' | 'file';
  type?: string;
  NID?: string;
  required?: boolean;
}

const MultipleFileUpload: FC<IFileUpload> = ({
  value,
  setValue,
  setUploadingFile,
  uploadingFile,
  setFileChange,
  fileChange,
}) => {
  const [indx, setIndex] = useState<number | undefined>();
  const handleSetValue = (event: IuploadItem) => {
    const allItems = value as any;

    const findItemIndex = allItems?.findIndex(
      (item: any) => item.requirementId === event.requirementId
    ) as number;
    allItems[findItemIndex] = event;
    setValue(allItems);
    setFileChange(!fileChange);
  };

  const handleFile = ({
    requirementType,
    type,
    document,
    requirementId,
    name,
    required,
  }: IuploadItem) => {
    handleSetValue({
      requirementType,
      requirementId,
      document,
      type,
      name,
      required,
    });
  };

  return (
    <div>
      {value?.map(
        ({ requirementType, requirementId, type, name, required }, index) => (
          <div className="mb-2" key={requirementId}>
            {requirementType === 'file' ? (
              <FileUpload
                key={requirementId}
                type="file"
                name={name}
                disabled={uploadingFile}
                group={name}
                customLabel={({ dragActive, onButtonClick }) =>
                  CustomUploadLabel({
                    dragActive,
                    onButtonClick,
                    postion: 'row',
                  })
                }
                setUploadingFile={setUploadingFile}
                setFile={({ url }: any) =>
                  handleFile({
                    requirementType,
                    type,
                    document: url,
                    requirementId,
                    name,
                    required,
                  })
                }
              />
            ) : (
              <Input
                key={index}
                id="xs"
                name="file"
                type={requirementType as any}
                label={name}
                className="h-14"
                groupClassName="!w-7/12 !max-w-3xl "
                onChange={e =>
                  handleFile({
                    requirementType,
                    type,
                    document: e.target.value,
                    requirementId,
                    name,
                    required,
                  })
                }
              />
            )}
          </div>
        )
      )}
    </div>
  );
};

export default MultipleFileUpload;
