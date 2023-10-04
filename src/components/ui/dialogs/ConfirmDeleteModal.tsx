import { ReactComponent as AlertCircle } from 'assets/icons/alert-circle.svg';
import Button from 'components/button/button';
import Modal from 'components/ui/modal';
interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  deleteFunc: (arg: any) => any;
  isLoading?: boolean;
}

const ConfirmDeleteModal = ({
  isOpen,
  onClose,
  title,
  subtitle,
  deleteFunc,
  isLoading,
}: Props) => {
  return (
    <Modal active={isOpen} onClick={onClose}>
      <div className="rounded-xl bg-white p-6">
        <div className="flex gap-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-error-50">
            <AlertCircle />
          </div>

          <div>
            <h3 className="mb-2 text-xl font-medium text-primary-700 ">
              {title}
            </h3>
            <p className="whitespace-break-spaces text-sm font-normal text-gray-700 ">
              {subtitle}
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-3 text-base">
          <Button
            btnType="withoutbg"
            className="my-4 flex h-11 items-center justify-center py-0 text-sm shadow-xs"
            onClick={onClose}
            border
            animate={false}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button
            onClick={deleteFunc}
            className="my-4 flex h-11 items-center justify-center bg-error-600 py-0 text-sm shadow-xs"
            animate={false}
            loading={isLoading}
            disabled={isLoading}
          >
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmDeleteModal;
