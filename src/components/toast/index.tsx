import { CloseCircle, TickSquare } from 'iconsax-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ItoastMsg {
  event: string;
  message: string;
  closeToast: () => void;
}
const SuccessToast = ({ event, message, closeToast }: ItoastMsg) => {
  return (
    <div className="flex flex-row gap-1">
      <div className="basis-1/12">
        <TickSquare className="h-5 w-5 text-success-700" />
      </div>
      <div className="basis-10/12">
        <h5 className="whitespace-nowrap text-sm font-medium text-white">
          {event}
        </h5>
        <p className="whitespace-nowrap text-xs text-gray-300">{message}</p>
      </div>
      <div className="basis-1/12">
        <CloseCircle
          className="h-5 w-5 cursor-pointer text-white"
          onClick={closeToast}
        />
      </div>
    </div>
  );
};

const WarningToast = ({ event, message, closeToast }: ItoastMsg) => {
  return (
    <div className="flex flex-row gap-1">
      <div className="basis-1/12">
        <TickSquare className="h-5 w-5 text-white" />
      </div>
      <div className="basis-10/12">
        <h5 className="whitespace-nowrap text-sm font-medium text-white">
          {event}
        </h5>
        <p className="whitespace-nowrap text-xs text-gray-300">{message}</p>
      </div>
      <div className="basis-1/12">
        <CloseCircle
          className="h-5 w-5 cursor-pointer text-white"
          onClick={closeToast}
        />
      </div>
    </div>
  );
};

const ErrorToast = ({ event, message, closeToast }: ItoastMsg) => {
  return (
    <div className="flex flex-row gap-1 ">
      <div className="basis-1/12">
        <TickSquare className="h-5 w-5 text-white" />
      </div>
      <div className="basis-10/12">
        <h5 className="whitespace-nowrap text-sm font-medium text-white">
          {event}
        </h5>
        <p className="whitespace-nowrap text-xs text-gray-300">{message}</p>
      </div>
      <div className="basis-1/12">
        <CloseCircle
          className="h-5 w-5 cursor-pointer text-white"
          onClick={closeToast}
        />
      </div>
    </div>
  );
};

export const notifySuccess = (event: string, message: string) =>
  toast.success(
    <SuccessToast message={message} event={event} closeToast={toast.dismiss} />,
    {
      closeButton: false,
      className: '!h-full !w-full !bg-gray-700 !font-sans',
    }
  );
export const notifyWarning = (event: string, message: string) =>
  toast.warning(
    <WarningToast message={message} event={event} closeToast={toast.dismiss} />,
    {
      closeButton: false,
      className: '!h-full !w-full !bg-warning-500 !font-sans',
    }
  );
export const notifyError = (event: string, message: string) =>
  toast.error(
    <ErrorToast message={message} event={event} closeToast={toast.dismiss} />,
    {
      closeButton: false,
      className: '!h-full !w-full !bg-error-600  !font-sans',
    }
  );
