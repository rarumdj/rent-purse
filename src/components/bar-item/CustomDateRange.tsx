import classNames from 'classnames';
import { addDays, format } from 'date-fns';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { setSelectedRange } from 'redux/slices/dateSlice';
import CustomPopover from 'components/ui/CustomMenu';
import Button from 'components/button/button';
import { ArrowDown2 } from 'iconsax-react';
import PopoverButton from 'components/button/PopoverButton';

const days = [
  'Today',
  'Last 7 days',
  'Last 30 days',
  'This month',
  'This year',
];
const CustomDateRange = ({ handleOnChange, showDays = true }: any) => {
  const dispatch = useAppDispatch();

  const { selectedDateRange: getDate } = useAppSelector(({ dates }) => dates);

  const selectedDateRange = {
    ...getDate,
    range: getDate.range.map(range => ({
      ...range,
      startDate: new Date(range.startDate),
      endDate: new Date(range.endDate),
    })),
  };

  const [showPicker, setShowPicker] = useState(false);
  const handleInputFocus = () => {
    setShowPicker(!showPicker);
  };

  const handleDateChange = (item: any) => {
    dispatch(
      setSelectedRange({ ...selectedDateRange, range: [item.selection] })
    );
    const from = format(new Date(item.selection.startDate), 'yyyy-MM-dd');
    const to = format(new Date(item.selection.endDate), 'yyyy-MM-dd');
    if (handleOnChange) handleOnChange({ from, to });
    // setShowPicker(false);
  };

  const handleSelectRange = (title: any, date: any) => {
    const from = format(new Date(date[0].startDate), 'yyyy-MM-dd');
    const to = format(new Date(date[0].endDate), 'yyyy-MM-dd');
    if (handleOnChange) handleOnChange({ from, to });
  };

  const handleOptionClick = (value: any) => {
    const today = new Date();
    switch (value) {
      case 'Today':
        dispatch(
          setSelectedRange({
            value,
            range: [{ startDate: today, endDate: today, key: 'selection' }],
          })
        );
        return handleSelectRange(value, [
          { startDate: today, endDate: today, key: 'selection' },
        ]);
      case 'Last 7 days':
        dispatch(
          setSelectedRange({
            value,
            range: [
              {
                startDate: addDays(new Date(), -7),
                endDate: today,
                key: 'selection',
              },
            ],
          })
        );
        return handleSelectRange(value, [
          {
            startDate: addDays(new Date(), -7),
            endDate: today,
            key: 'selection',
          },
        ]);
      case 'Last 30 days':
        dispatch(
          setSelectedRange({
            value,
            range: [
              {
                startDate: addDays(new Date(), -30),
                endDate: today,
                key: 'selection',
              },
            ],
          })
        );
        return handleSelectRange(value, [
          {
            startDate: addDays(new Date(), -30),
            endDate: today,
            key: 'selection',
          },
        ]);
      default:
        dispatch(
          setSelectedRange({
            value,
            range: [{ startDate: today, endDate: today, key: 'selection' }],
          })
        );
        return handleSelectRange(value, today);
    }
  };

  const linkList = days.map(item => ({
    name: item,
    action: () => handleOptionClick(item),
  }));

  return (
    <div className={classNames(!showDays ? 'relative' : 'block')}>
      <div
        className={classNames(
          !showDays ? 'flex w-full items-center gap-2 xl:flex-wrap' : ''
        )}
      >
        {showDays ? (
          <div className="flex gap-3">
            {days.map((item, index) => (
              <span
                key={index}
                className="cursor-pointer text-xs"
                onClick={() => handleOptionClick(item)}
              >
                {item}
              </span>
            ))}
          </div>
        ) : (
          <CustomPopover
            button={
              <PopoverButton
                className="flex h-8 items-center gap-2 whitespace-nowrap py-0 text-xs"
                border
                btnType="withoutbg"
                animate={false}
              >
                {getDate.value}
                <ArrowDown2 className="h-5 w-5 text-primary-700" />
              </PopoverButton>
            }
            list={linkList}
          />
        )}

        <div
          className={classNames('flex justify-center', !showDays ? '' : 'mt-4')}
        >
          <span
            onClick={handleInputFocus}
            className={classNames(
              'rounded-l-md border p-2 text-center text-xs',
              !showDays ? 'w-fit' : 'w-full'
            )}
          >
            {selectedDateRange.range[0].startDate.toDateString()}
          </span>
          <span
            onClick={handleInputFocus}
            className={classNames(
              'rounded-r-md border p-2 text-center text-xs',
              !showDays ? 'w-fit' : 'w-full'
            )}
          >
            {selectedDateRange.range[0].endDate.toDateString()}
          </span>
        </div>
      </div>
      {showPicker && (
        <div className={classNames(!showDays ? 'absolute z-10 ' : '')}>
          <DateRange
            showDateDisplay={false}
            editableDateInputs={true}
            onChange={handleDateChange}
            moveRangeOnFirstSelection={false}
            ranges={selectedDateRange.range as any}
            showPreview={true}
            months={1}
            maxDate={new Date()}
            direction="horizontal"
            rangeColors={['#000712']}
          />
        </div>
      )}
    </div>
  );
};

export default CustomDateRange;
