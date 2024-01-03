import React, { useState } from 'react';

const CustomToggle = ({ isChecked, setIsChecked }: any) => {
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <label className="flex cursor-pointer select-none items-center">
        <div className="relative">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="sr-only"
          />
          <div
            className={`box block h-7 w-12 rounded-full ${
              isChecked ? 'bg-primary' : 'bg-gray-500'
            }`}
          ></div>
          <div
            className={`absolute left-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white transition ${
              isChecked ? 'translate-x-full' : ''
            }`}
          ></div>
        </div>
      </label>
    </>
  );
};

export default CustomToggle;
