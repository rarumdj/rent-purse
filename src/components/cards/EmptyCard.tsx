import React from 'react';

interface IEmptyData {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
}

const EmptyCard = ({ title, subtitle, icon: Icon, action }: IEmptyData) => {
  return (
    <div className="flex h-[22rem] w-full items-center justify-center">
      <div className="flex flex-col items-center space-y-2">
        <Icon className="h-20 w-20 object-scale-down" />
        <h1 className="w-full text-center font-duplicate-san text-base font-medium md:text-xl">
          {title}
        </h1>
        <p className="w-full text-center text-xs text-gray-500  md:text-sm">
          {subtitle}
        </p>
        {action}
      </div>
    </div>
  );
};

export default EmptyCard;
