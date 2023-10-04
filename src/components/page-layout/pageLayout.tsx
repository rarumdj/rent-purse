import classNames from 'classnames';
import Button from 'components/button/button';
import PageLoading from 'components/ui/page-loading';
import { ArrowLeft } from 'iconsax-react';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as LampCharge } from '../../assets/icons/lamp-charge.svg';

interface IpageLayout {
  title: string;
  count?: number;
  showCount?: boolean;
  children: React.ReactNode;
  content?: React.ReactNode;
  containerClassName?: string;
  layoutClassName?: string;
  showInfo?: boolean;
  showBackBtn?: boolean;
  isLoading?: boolean;
  hideTitle?: boolean;
}
const PageLayout: FC<IpageLayout> = ({
  title,
  children,
  count,
  showCount,
  content,
  containerClassName,
  layoutClassName,
  showInfo = true,
  showBackBtn,
  isLoading,
  hideTitle,
}) => {
  const { goBack } = useHistory();

  return (
    <section className="flex h-full px-4">
      <div
        className={classNames(
          'relative mx-auto mb-6 flex h-full w-full flex-wrap bg-white',
          { [layoutClassName as string]: layoutClassName }
        )}
      >
        <div className="top-0 z-30 flex w-full items-center justify-between bg-gray-25 py-4 px-4 md:sticky md:px-8 ">
          <h4 className="flex items-center font-duplicate-san text-lg font-medium text-gray-900">
            {title}
            {showCount && (
              <span className="ml-2 flex items-center justify-center rounded-full bg-primary-50 px-2 py-1 text-xs">
                {count}
              </span>
            )}
          </h4>
          <div className="flex justify-center gap-4">
            {content}
            {showInfo && (
              <Button
                btnType="withoutbg"
                className="hidden h-10 items-center justify-center rounded-lg border py-0 text-sm md:flex"
                border
                animate={false}
              >
                <LampCharge />
              </Button>
            )}
          </div>
        </div>
        <div className="w-full px-4 pt-4 pb-10 lg:px-8 ">
          <div className="w-full">
            <div className="relative mx-auto h-full min-w-0 max-w-full">
              {showBackBtn && (
                <Button
                  className="my-4 flex h-11 items-center justify-center py-0 text-sm shadow-xs"
                  btnType="withoutbg"
                  border
                  animate={false}
                  onClick={() => goBack()}
                >
                  <ArrowLeft className="mr-2 h-5 w-5 text-primary-700" /> Go
                  back
                </Button>
              )}
              <div
                className={classNames('mx-auto flex w-full pt-4', {
                  [containerClassName as string]: containerClassName,
                })}
              >
                {isLoading ? (
                  <div className="flex h-[60vh] w-full items-center justify-center">
                    <PageLoading />
                  </div>
                ) : (
                  children
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageLayout;
