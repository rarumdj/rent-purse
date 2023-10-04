import { useState } from 'react';

const useDisclosure = (initial: any) => {
  const [isOpen, setIsOpen] = useState(initial);

  const changeState = (state: any) => setIsOpen(state);

  return { isOpen, changeState };
};

export default useDisclosure;
