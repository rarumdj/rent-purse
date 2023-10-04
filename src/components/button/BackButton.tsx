import React from 'react';
import Button from './button';
import { ArrowLeft } from 'iconsax-react';

interface props {
  onClick: () => void;
}
const BackButton = ({ onClick }: props) => {
  return (
    <Button
      className="my-4 flex h-11 items-center justify-center py-0 text-sm shadow-xs"
      btnType="withoutbg"
      border
      animate={false}
      onClick={onClick}
    >
      <ArrowLeft className="mr-2 h-5 w-5 text-primary-700" /> Go back
    </Button>
  );
};

export default BackButton;
