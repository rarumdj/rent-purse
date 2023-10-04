import React from 'react';

const SelectCheckbox = ({ name, active, setActive, link, formName }: any) => {
  const handleClick = () => {
    if (active[formName])
      return setActive({ ...active, [formName]: undefined });
    return setActive({ ...active, [formName]: link });
  };
  return (
    <div
      className={`relative flex h-40 w-full cursor-pointer items-center justify-center rounded-2xl border-2 p-8 transition-all duration-500 ease-in-out hover:bg-gray-100 ${
        active[formName] ? 'border-blue-400 ' : 'border-gray-400 '
      }`}
      onClick={handleClick}
    >
      <div
        className={`absolute right-5 top-4 h-5 w-5 rounded-full border-2 border-blue-400 ${
          active[formName] ? 'bg-blue-400' : ''
        }`}
      />
      <div className="text-center text-sm font-medium md:text-lg">{name}</div>
    </div>
  );
};

export default SelectCheckbox;
