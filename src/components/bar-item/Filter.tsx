import Button from 'components/button/button';
import { MultipleSelectCheckbox } from 'components/ui/input/MultipleSelectCheckbox';
import { useAppDispatch } from 'hooks/redux-hooks';
import React, { useState } from 'react';
import { resetBlockDate } from 'redux/slices/dateSlice';
import CustomDateRange from './CustomDateRange';

const Filter = ({
  filterData,
  handleFilterSelect,
  handleFilterApply,
  handleToggleFilterPopover,
  withDate,
  setSelectedValue,
  selectedValue,
}: any) => {
  const dispatch = useAppDispatch();
  const [date, setDate] = useState({
    from: '',
    to: '',
  });

  const [selectedFilters, setSelectedFilters] = useState({});
  //   const [selectedValue, setSelectedValue] = useState<any>({});

  const handleChange = (value: any, title: any) => {
    setSelectedFilters(prevFilters => ({
      ...prevFilters,
      [title?.toLowerCase()]: value.map((item: any) => item.value),
    }));
    setSelectedValue((prevFilters: any) => ({
      ...prevFilters,
      [title]: value,
    }));
  };

  const handleApply = () => {
    if (withDate) {
      if (date.from)
        setSelectedFilters({ ...selectedFilters, from: date.from });
      if (date.to) setSelectedFilters({ ...selectedFilters, to: date.to });
    }
    handleFilterApply(selectedFilters);
    handleToggleFilterPopover();
  };

  return (
    <>
      {withDate && <CustomDateRange handleOnChange={setDate} />}
      {filterData?.map((item: any, index: number) => {
        return (
          <div className="my-2" key={index}>
            <MultipleSelectCheckbox
              options={item.list}
              name={item.title}
              label={item.title}
              value={selectedValue[item.title]}
              onChange={(value: any) => handleChange(value, item.title)}
              placeholder={`Select ${item.title}`}
            />
          </div>
        );
      })}

      <div className="mt-4 flex w-full justify-end gap-3">
        <Button
          className="flex h-9 items-center justify-center !border-error-600 py-0 text-sm text-error-600 "
          btnType="withoutbg"
          border
          animate={false}
          onClick={() => {
            setSelectedValue({});
            handleToggleFilterPopover();
            dispatch(resetBlockDate({ blockType: 'selectedDateRange' }));
          }}
        >
          Clear filter
        </Button>
        <Button
          onClick={handleApply}
          className="flex h-9 items-center justify-center py-0 text-sm "
          animate={false}
        >
          Apply filter
        </Button>
      </div>
    </>
  );
};

export default Filter;
