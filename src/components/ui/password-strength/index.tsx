import React, { FC, useEffect, useState } from 'react';
import PasswordLabel from './PasswordLabel';

interface ICheckerStrength {
  password: string;
  validated: boolean;
  validate: React.Dispatch<React.SetStateAction<boolean>>;
}
const CheckPasswordStrength: FC<ICheckerStrength> = ({
  password,
  validate,
  validated,
}) => {
  const [passwordStrength, setPasswordStrength] = useState({});

  const passwordStrengths = (password: string) => {
    const checkLength = password?.length > 7;
    const checkLowerCase = !!password?.match(/[a-z]+/);
    const checkUppercase = !!password?.match(/[A-Z]+/);
    const checkNumber = !!password?.match(/[0-9]+/);
    const checkCharacter = !!password?.match(/[!@#$%^&*~_+-]+/);

    const validatePassword =
      checkLowerCase &&
      checkUppercase &&
      checkNumber &&
      checkCharacter &&
      checkLength;
    validate(validatePassword);

    return {
      checkLowerCase,
      checkUppercase,
      checkNumber,
      checkCharacter,
      checkLength,
    };
  };

  const {
    checkLowerCase,
    checkUppercase,
    checkNumber,
    checkCharacter,
    checkLength,
  } = passwordStrength as any;

  useEffect(() => {
    setPasswordStrength(passwordStrengths(password));
  }, [password]);

  return (
    <div className="text-xs">
      {password && !validated ? (
        <div className=" my-4 space-y-2">
          <PasswordLabel
            checker={checkLength}
            label="Contains at least 8 characters"
          />
          <PasswordLabel
            checker={checkCharacter}
            label="Must have at least one symbol (!@#$%^&*~_+-)"
          />
          <PasswordLabel
            checker={checkLowerCase}
            label="Must have at least one lowercase letter"
          />
          <PasswordLabel
            checker={checkUppercase}
            label="Must have at least one uppercase letter"
          />
          <PasswordLabel
            checker={checkNumber}
            label="Must have at least one number"
          />
        </div>
      ) : null}
    </div>
  );
};

export default CheckPasswordStrength;
