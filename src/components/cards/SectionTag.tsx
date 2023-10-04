import classNames from 'classnames';
import React from 'react';

interface IsectionTag {
  title: string;
  description?: string;
  type?: 'small' | 'big';
  className?: string;
  titleClass?: string;
}
const SectionTag = ({
  title,
  description,
  type = 'small',
  className,
  titleClass,
}: IsectionTag) => {
  return (
    <div className={className}>
      <h3
        className={classNames(
          'font-duplicate-san font-medium text-primary-700',
          type === 'big' ? 'text-lg' : 'text-sm',
          { [titleClass as string]: titleClass }
        )}
      >
        {title}
      </h3>
      <p className={classNames('text-sm text-gray-500')}>{description}</p>
    </div>
  );
};

export default SectionTag;
