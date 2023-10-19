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
        <div className="w-full px-4 pb-10 pt-4 lg:px-8 ">
          <div className="w-full">
            <div className="relative mx-auto h-full min-w-0 max-w-full">
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
