import Button from 'components/button/button';
import { FC, FunctionComponent, SVGProps } from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Success } from '../../assets/icons/success.svg';

interface IverfiedView {
  title: string;
  loading?: boolean;
  subTitle: string | React.ReactNode;
  buttonName: string;
  link?: string;
  icon?: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string | undefined }
  >;
  onClick?: () => void;
}
export const AuthSuccessCard: FC<IverfiedView> = ({
  title,
  subTitle,
  buttonName,
  link,
  onClick,
  icon: Icon = Success,
  loading,
}) => {
  const { push } = useHistory();
  return (
    <>
      <Icon className="mb-4" />
      <h1 className="mb-3 text-center font-duplicate-san text-2xl font-medium text-gray-900 md:text-3xl">
        {title}
      </h1>
      <div className="mb-5 text-center text-gray-30  ">{subTitle}</div>
      <Button
        type="button"
        onClick={() => (onClick ? onClick() : push(link as string))}
        fullWidth
        loading={loading}
        disabled={loading}
      >
        {buttonName}
      </Button>
    </>
  );
};
