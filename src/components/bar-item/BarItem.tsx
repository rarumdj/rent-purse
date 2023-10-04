import Button from 'components/button/button';
import Popover from 'components/popover/Popover';
import CustomPopover from 'components/ui/CustomMenu';
import CustomSearchInput from 'components/ui/search-input/CustomSearchInput';
import { ArrowDown2 } from 'iconsax-react';
import React, { FC, useState } from 'react';
import { CSVLink } from 'react-csv';
import Filter from './Filter';
import { currency, method, status } from './listHelper';

// import { DateRange } from 'react-date-range';

interface barItem {
  name?: string;
  count?: number;
  setTerm?: any;
  dropdownName?: string;
  dropdownList?: any;
  ShowFilters?: boolean;
  showExport?: boolean;
  csvData?: any;
  exportName?: string;
  customButtom?: React.ReactNode;
}

const BarItem: FC<barItem> = ({
  name,
  count,
  setTerm,
  dropdownName,
  dropdownList,
  csvData,
  exportName,
  showExport = true,
  ShowFilters = true,
  customButtom,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopover = (nextOpenState: boolean) => {
    setIsOpen(nextOpenState);
  };

  const [selectedValue, setSelectedValue] = useState<any>({});
  const filterData = [...status, ...method, ...currency];
  return (
    <div className="mb-10 mt-1 flex w-full flex-wrap justify-between gap-4">
      {name && (
        <div className="flex items-center text-lg font-medium text-gray-900">
          {name}

          <span className="ml-2 flex items-center justify-center rounded-full bg-primary-50 px-2 py-1 text-xs">
            {count}
          </span>
        </div>
      )}

      <>
        {ShowFilters && <CustomSearchInput setTerm={setTerm} />}
        <div className="relative flex flex-wrap items-center gap-3">
          {ShowFilters && (
            <Popover
              togglePopover={togglePopover}
              isOpen={isOpen}
              content={
                <div className="min-w-[360px]">
                  <div className="border-b border-gray-200 p-4 text-sm">
                    Transaction details
                  </div>
                  <div className="border-b border-gray-200 p-4">
                    <Filter
                      filterData={filterData}
                      setSelectedValue={setSelectedValue}
                      selectedValue={selectedValue}
                      withDate
                      handleFilterApply={(y: any) => console.log(y)}
                      handleToggleFilterPopover={() => togglePopover(!isOpen)}
                    />
                  </div>
                </div>
              }
              button={
                <Button
                  className="flex h-9 items-center justify-center py-0 text-sm "
                  btnType="withoutbg"
                  border
                  animate={false}
                >
                  Add filter
                </Button>
              }
            />
          )}
          {showExport && (
            <>
              {!!csvData && (
                <CSVLink
                  data={csvData}
                  className="flex h-9 transform items-center justify-center rounded-lg border border-gray-300 bg-transparent py-0 py-3 px-4 text-sm font-medium text-black focus:outline-none disabled:opacity-50"
                  filename={`${exportName}-${new Date().getTime()}.csv`}
                >
                  Export
                </CSVLink>
              )}
            </>
          )}

          {dropdownName && (
            <CustomPopover
              button={
                <div className="flex h-9 items-center justify-center gap-2 rounded-lg bg-black py-0 px-4 text-xs  text-white lg:text-sm">
                  {dropdownName}
                  <ArrowDown2 className="h-3.5 w-3.5 text-white lg:h-4 lg:w-4" />
                </div>
              }
              list={dropdownList}
            />
          )}

          {customButtom && <>{customButtom}</>}
        </div>
      </>
    </div>
  );
};

export default BarItem;
