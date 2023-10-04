import React from 'react';

const SectionTitle = ({
  title,
  content,
}: {
  title?: string;
  content?: React.ReactNode;
}) => {
  return (
    <>
      <div className="flex flex-wrap items-center ">
        <div className="w-full max-w-full flex-1 flex-grow justify-between">
          <h5 className="font-duplicate-san text-sm font-medium text-primary-700 md:text-base">
            {title}
          </h5>
        </div>
        {content}
      </div>
    </>
  );
};

export default SectionTitle;
