import React, { useEffect, useMemo } from 'react';
import { debounce } from 'lodash';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface SearchTerm {
  term?: string;
  setTerm: any;
}

const CustomSearchInput = ({ term, setTerm }: SearchTerm) => {
  const debouncedResults = useMemo(() => {
    const handleSearch = (e: any) => setTerm(e.target.value);

    return debounce(handleSearch, 500);
  }, [setTerm]);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });
  return (
    <>
      <div className="relative min-w-full md:min-w-[22rem]">
        <input
          className="relative inline-flex w-full rounded-lg border border-gray-300 bg-transparent pl-9 text-sm leading-none text-gray-700 placeholder-gray-500 transition-colors ease-in-out hover:border-gray-900 focus:border-gray-900 focus:outline-none focus:ring-gray-400 focus:ring-opacity-30 focus:ring-4 "
          type="search"
          onChange={debouncedResults}
          placeholder="Search..."
        />
        <span className="absolute left-2 top-0 ml-2 mt-2.5">
          <MagnifyingGlassIcon className="m-auto h-4 w-4 text-gray-500" />
        </span>
      </div>
    </>
  );
};

export default CustomSearchInput;
