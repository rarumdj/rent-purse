import React, { useState } from 'react';

const usePhoneNumber = () => {
  const [phoneInfo, setPhoneInfo] = useState({
    localFormat: '',
    internationalFormat: '',
    countryCode: '',
  });

  const handlePhoneNumberChange = (
    localFormat: any,
    internationalFormat: any,
    countryCode: any
  ) => {
    setPhoneInfo({
      ...phoneInfo,
      internationalFormat,
      localFormat,
      countryCode,
    });
  };

  return {
    handlePhoneNumberChange,
    ...phoneInfo,
  };
};

export default usePhoneNumber;
