import classNames from 'classnames';
import { DocumentUpload } from 'iconsax-react';
import { ReactComponent as ImageUploadICon } from '../../../assets/icons/upload.svg';
import Button from 'components/button/button';

interface UploadLabel {
  dragActive?: any;
  onButtonClick?: () => void;
  postion?: 'row' | 'column';
  type?: 'div' | 'button';
  buttonName?: string;
}
export const CustomUploadLabel = ({
  dragActive,
  onButtonClick,
  postion = 'row',
  type = 'div',
  buttonName,
}: UploadLabel) => {
  const column = postion === 'column';

  const uploadDiv = () => (
    <label
      id="label-file-upload"
      htmlFor="input-file-upload"
      className={classNames(
        'flex h-full w-full cursor-pointer items-center rounded-lg border border-dashed border-gray-200 bg-white px-4 py-4 text-gray-500 transition-colors ease-in-out hover:border-gray-900 active:border-gray-900 active:outline-none active:ring-4 active:ring-gray-400 active:ring-opacity-30',
        dragActive ? 'bg-white' : ''
      )}
    >
      <div
        className={classNames(
          column ? 'flex-col' : 'flex-row',
          'flex h-full w-full items-center justify-center gap-2 text-sm'
        )}
      >
        {column ? (
          <ImageUploadICon className="mr-2 h-10 w-10 text-primary-700" />
        ) : (
          <DocumentUpload className="mr-2 h-6 w-6 text-primary-700" />
        )}

        <div className="">
          <div
            className={classNames(
              'flex  text-center text-base font-medium',
              column
                ? 'items-center justify-center'
                : 'flex-row-reverse items-end justify-end'
            )}
          >
            <button
              type="button"
              className="cursor-pointer bg-transparent  text-primary-700 underline"
              onClick={onButtonClick}
            >
              {column ? 'Click to upload' : 'Browse'}
            </button>
            <p
              className={classNames('text-gray-500', column ? 'px-1' : 'pr-1')}
            >
              {' '}
              {column ? 'or drag and drop' : 'Drag and drop your file here or'}
            </p>
          </div>
          <p className="text-xs">
            Supported file types: JPEG, PNG, PDF. Max file size: 2mb
          </p>
        </div>
      </div>
    </label>
  );
  return (
    <>
      {type === 'div' ? (
        uploadDiv()
      ) : (
        <Button
          type="button"
          btnType="withoutbg"
          className="flex h-9 w-fit items-center justify-center py-0 text-sm"
          border
          onClick={onButtonClick}
        >
          {buttonName}
        </Button>
      )}
    </>
  );
};
