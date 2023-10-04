import React from 'react';
import { ReactComponent as MoreVertical } from '../../assets/icons/more-vertical.svg';
import SingleAreaChart from 'components/chart/SingleAreaChart';
import { ArrowUp } from 'iconsax-react';

const noChartData = [
  { name: 'Jan', inflow: 3 },
  { name: 'Feb', inflow: 5 },
  { name: 'Mar', inflow: 6 },
  { name: 'Apr', inflow: 8 },
  { name: 'May', inflow: 9 },
  { name: 'Jun', inflow: 10 },
  { name: 'Jul', inflow: 14 },
  { name: 'Aug', inflow: 18 },
  { name: 'Sep', inflow: 20 },
  { name: 'Oct', inflow: 22 },
  { name: 'Nov', inflow: 25 },
  { name: 'Dec', inflow: 30 },
];

const AnalyticsCard = ({ tag, currency, amount }: any) => {
  return (
    <>
      <div className="relative mb-6 flex min-w-0 cursor-pointer flex-col break-words rounded-lg border bg-white shadow-gray-200/50 shadow-lg xl:mb-0">
        <div className="flex-auto p-4">
          <div className="flex flex-col">
            <div className="inline-flex items-center justify-between text-center">
              <p className=" whitespace-break-spaces break-words text-sm text-[#66789C] md:text-md">
                {tag}
              </p>
              <MoreVertical />
            </div>
            <div className="inline-flex justify-between text-center">
              <div className="mt-4 space-y-4 ">
                <h2 className="text-lg font-bold">
                  {currency} {amount}
                </h2>
                {/* <div className="flex gap-1 text-xs">
                  <ArrowUp className="h-3.5 w-3.5 font-bold text-success-600" />{' '}
                  100% vs last month
                </div> */}
              </div>
              {/* <div className="relative hidden w-1/2 md:block">
                <SingleAreaChart data={noChartData} />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalyticsCard;
