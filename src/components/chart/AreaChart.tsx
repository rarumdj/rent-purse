import classNames from 'classnames';
import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  LineChart,
} from 'recharts';
import { useMediaQuery } from 'react-responsive';
import { removeAmountFraction } from 'utils';

interface DataPoint {
  name?: string;
  inflow?: number;
  outflow?: number;
}

interface AreaChartProps {
  data: any[];
  keys?: { key1: string; key2: string };
  isAmount?: boolean;
}

const gradientOffset = () => {
  const data = [
    { offset: '0%', color: 'rgba(136, 84, 208, 0.2)' },
    { offset: '100%', color: 'rgba(136, 84, 208, 0)' },
  ];
  return data;
};

const noChartData = [
  { name: 'Jan', inflow: 0, outflow: 0 },
  { name: 'Feb', inflow: 0, outflow: 0 },
  { name: 'Mar', inflow: 0, outflow: 0 },
  { name: 'Apr', inflow: 0, outflow: 0 },
  { name: 'May', inflow: 0, outflow: 0 },
  { name: 'Jun', inflow: 0, outflow: 0 },
  { name: 'Jul', inflow: 0, outflow: 0 },
  { name: 'Aug', inflow: 0, outflow: 0 },
  { name: 'Sep', inflow: 0, outflow: 0 },
  { name: 'Oct', inflow: 0, outflow: 0 },
  { name: 'Nov', inflow: 0, outflow: 0 },
  { name: 'Dec', inflow: 0, outflow: 0 },
];

const AreaChartComponent: React.FC<AreaChartProps> = ({
  data,
  keys,
  isAmount,
}) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  const chartData = data.length ? data : noChartData;

  const renderCustomLegend = (props: any) => {
    const { payload } = props;
    return (
      <ul className="-translate-y-8 list-none pl-0">
        {payload.map((entry: any, index: number) => (
          <li key={`item-${index}`} className="mr-2.5 inline-block">
            <div
              className="mr-1.5 inline-block h-2 w-2 rounded-full "
              style={{
                backgroundColor: entry.color,
              }}
            ></div>
            <span className="text-sm">{entry.value}</span>
          </li>
        ))}
      </ul>
    );
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-md border border-gray-300 p-1.5 !outline-none !ring-0 md:p-3">
          <p className="m-0 text-sm text-black md:text-md">{label}</p>

          {payload?.map((item: any, index: number) => (
            <p
              className="my-1 text-xs md:my-0.5 md:text-sm"
              key={index}
              style={{ color: item.color }}
            >
              <span>{item.name} : </span>
              {removeAmountFraction(
                item.value,
                item.currency || undefined,
                isAmount
              )}
            </p>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <div className={classNames('relative w-full')}>
      {!data.length && (
        <div className="absolute z-[1] flex h-full w-full items-center justify-center text-center">
          <span className="bg-white p-2">No data to show</span>
        </div>
      )}

      <ResponsiveContainer width="100%" aspect={2} className="relative">
        <AreaChart
          width={500}
          height={300}
          data={chartData}
          margin={{
            top: 30,
            right: 0,
            left: isTabletOrMobile ? -60 : -45,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorValue1" x1="0" y1="0" x2="0" y2="1">
              {gradientOffset().map(item => (
                <stop
                  key={item.offset}
                  offset={item.offset}
                  stopColor={item.color}
                />
              ))}
            </linearGradient>
            <linearGradient id="colorValue2" x1="0" y1="0" x2="0" y2="1">
              {gradientOffset().map(item => (
                <stop
                  key={item.offset}
                  offset={item.offset}
                  stopColor={item.color}
                />
              ))}
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickFormatter={() => ''} tickLine={false} />
          <Tooltip content={CustomTooltip} wrapperStyle={{ outline: 'none' }} />
          <Legend
            content={renderCustomLegend}
            layout="radial"
            verticalAlign="top"
            align="right"
          />
          <Area
            type="linear"
            dataKey={keys?.key1 || 'inflow'}
            stroke="#12B76A"
            strokeWidth={2}
            fill="url(#colorValue1)"
          />
          <Area
            type="linear"
            dataKey={keys?.key2 || 'outflow'}
            stroke="#F04438"
            strokeWidth={2}
            fill="url(#colorValue2)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChartComponent;
