import classNames from 'classnames';
import React from 'react';

interface IsectionTag {
  title: string | React.ReactNode;
  description?: string;
  type?: 'small' | 'big';
  className?: string;
  titleClass?: string;
  descClass?: string;
  image?: React.ReactNode;
}
const SectionTag = ({
  title,
  description,
  type = 'small',
  className,
  titleClass,
  image,
  descClass,
}: IsectionTag) => {
  return (
    <div
      className={classNames('flex flex-wrap items-center gap-2', {
        [className as string]: className,
      })}
    >
      {image}
      <div>
        <h3
          className={classNames(
            'font-duplicate-san font-medium text-primary-700',
            type === 'big' ? 'text-lg' : 'text-sm',
            { [titleClass as string]: titleClass }
          )}
        >
          {title}
        </h3>
        <p
          className={classNames('text-sm text-gray-500', {
            [descClass as string]: descClass,
          })}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default SectionTag;
