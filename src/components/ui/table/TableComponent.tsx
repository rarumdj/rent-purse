import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Checkbox } from '../input/atom/Checkbox';

const PageSize = 10;
const nextprevBtn =
  'py-2 px-4 rounded-md w-auto bg-white text-primary-700 border border-gray-200 active:border-primary-700 active:text-white outline-none focus:outline-none ease-linear transition-all duration-150 cursor-pointer';
const pageLink =
  'w-auto px-1 hover:border-b-2 hover:border-blue-700 ease-linear transition-all duration-150 cursor-pointer ';
const containerClass =
  'h-full w-full flex justify-between gap-3 lg:text-base text-sm';
const ativeClass = 'border-b-2 border-blue-700';

export type TableProps = {
  thead: string[];
  resourceName: string;
  itemComponent: React.FunctionComponent<any>;
  paginate?: boolean;
  totalCount?: number;
  setPage: React.Dispatch<React.SetStateAction<any>>;
  loading?: boolean;
  success?: boolean;
  data?: any;
  handleRowClick?: (row: any) => void;
  res?: any;
  getSelected?: any;
};

const TableComponent = ({
  thead,
  resourceName,
  itemComponent: ItemComponent,
  paginate,
  totalCount,
  setPage,
  loading,
  success,
  data,
  handleRowClick,
  getSelected,
  ...res
}: TableProps) => {
  //   const [currentItems, setCurrentItems] = useState(null);
  const [pageCounts, setPageCount] = useState<number>(0);
  //   const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    if (!totalCount) {
      return;
    }
    setPageCount(Math.ceil(totalCount / PageSize));
  }, [totalCount]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    // const newOffset = (event.selected * PageSize) % totalCount;

    setPage(event.selected + 1);
    // (
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    // setItemOffset(newOffset);
  };

  const [selectedRows, setSelectedRows] = useState<any[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);

  const handleRowSelection = (item: any) => {
    const isSelected = selectedRows?.includes(item);
    let updatedRows: any[] = [];

    if (isSelected) {
      updatedRows = selectedRows?.filter(row => row !== item);
    } else {
      updatedRows = [...selectedRows, item];
    }

    getSelected && getSelected(updatedRows);
    setSelectedRows(updatedRows);
  };

  const handleSelectAll = () => {
    if (selectAll) {
      getSelected && getSelected([]);
      setSelectedRows([]);
    } else {
      getSelected && getSelected(data);
      setSelectedRows(data);
    }

    setSelectAll(!selectAll);
  };

  const handleRowClicks = (event: any, row: any) => {
    if (event.target.tagName.toLowerCase() !== 'input') {
      handleRowClick && handleRowClick(row);
    }
  };
  return (
    <div className="relative">
      <div className="block w-full overflow-x-auto">
        <table className="w-full border-collapse items-center overflow-x-scroll">
          <thead>
            {(loading || data?.length > 0) && (
              <tr>
                {getSelected && (
                  <th
                    key="select-all"
                    className="whitespace-nowrap bg-gray-50 px-6 py-5 text-left align-middle text-sm font-medium text-gray-500"
                  >
                    <div className="flex items-center">
                      <Checkbox
                        disabled={loading || !data?.length}
                        checked={selectedRows?.length === data?.length}
                        onChange={handleSelectAll}
                      />
                    </div>
                  </th>
                )}

                {thead?.map((th: any, i: any) => (
                  <th
                    key={i}
                    className="whitespace-nowrap bg-gray-50 px-6 py-5 text-left align-middle text-sm font-medium text-gray-500"
                  >
                    {th}
                  </th>
                ))}
              </tr>
            )}
          </thead>
          <tbody className="bg-white">
            {loading && (
              <>
                {Array(5)
                  .fill(0)
                  .map((item, index) => (
                    <tr className="w-full" key={index}>
                      {thead?.map((th: any, i: any) => (
                        <td
                          key={i}
                          className={`whitespace-nowrap border-b border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle `}
                        >
                          <div className="h-4 w-full animate-pulse bg-gray-200"></div>
                        </td>
                      ))}
                    </tr>
                  ))}
              </>
            )}

            {success && data?.length > 0 && !loading && (
              <>
                {data?.map((item: any, i: any) => (
                  <tr
                    className={classNames('h-20 w-full', {
                      ['cursor-pointer']: handleRowClick,
                    })}
                    key={i}
                    onClick={
                      handleRowClick
                        ? (e: any) => handleRowClicks(e, item)
                        : undefined
                    }
                  >
                    <ItemComponent
                      index={i}
                      isSelected={selectedRows?.includes(item)}
                      onSelectRow={handleRowSelection}
                      {...{ [resourceName]: item }}
                      {...res}
                    />
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>

      {paginate && data?.length > 0 && (
        <div className="mt-5 flex w-full">
          <ReactPaginate
            nextLabel={
              <div className="flex items-center gap-2 text-primary-700">
                Next
                <ArrowRightIcon className="h-5 w-5 text-primary-700 " />
              </div>
            }
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCounts}
            previousLabel={
              <div className="flex items-center gap-2 text-primary-700">
                <ArrowLeftIcon className="h-5 w-5 text-primary-700 lg:snap-start" />{' '}
                Previous
              </div>
            }
            pageClassName={pageLink}
            // pageLinkClassName="page-link"
            previousClassName={nextprevBtn}
            // previousLinkClassName="page-link"
            nextClassName={nextprevBtn}
            // nextLinkClassName="page-link"
            breakLabel="..."
            // breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName={containerClass}
            activeClassName={ativeClass}
            renderOnZeroPageCount={undefined}
          />
        </div>
      )}
    </div>
  );
};

export default TableComponent;
