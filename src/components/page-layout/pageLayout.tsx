import classNames from 'classnames';
import PageLoading from 'components/ui/page-loading';
import React, { FC } from 'react';

interface IpageLayout {
  children: React.ReactNode;
  containerClassName?: string;
  layoutClassName?: string;
  isLoading?: boolean;
  px?: string;
}
const PageLayout: FC<IpageLayout> = ({
  children,
  containerClassName,
  layoutClassName,
  isLoading,
  px,
}) => {
  return (
    <section
      className={classNames('flex h-full w-full', !px ? 'layout-px' : px)}
    >
      <div
        className={classNames(
          'relative mx-auto mb-6 flex h-full w-full flex-wrap bg-white',
          { [layoutClassName as string]: layoutClassName }
        )}
      >
        <div
          className={classNames(
            'w-full  pb-10 pt-8',
            !px ? 'px-4 lg:px-8' : px
          )}
        >
          <div className="w-full">
            <div className="relative mx-auto h-full min-w-0 max-w-full">
              <div
                className={classNames('mx-auto flex w-full', {
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
