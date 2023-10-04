import { useEffect, useState } from 'react';

const useOutsideClick = (ref: any) => {
  const [outsieClick, setOutsideClick] = useState<boolean | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (!ref.current?.contains(e.target)) {
        setOutsideClick(true);
      } else {
        setOutsideClick(false);
      }

      setOutsideClick(null);
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return outsieClick;
};

export default useOutsideClick;
