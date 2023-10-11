import Button from 'components/button/button';
import { AuthSuccessCard } from 'components/cards/AuthSuccessCard';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { FC, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import OtpInput from 'react18-input-otp';
import { authActions, authState } from 'redux/slices/authSlice';
import { ReactComponent as VerifySvg } from '../../assets/icons/verify-image.svg';
import './auth.css';
import { calculateTimeLeft, timeLeft } from 'utils';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const VerifyEmail: FC = () => {
  const [token, setToken] = useState('');
  const [hasError, setHasError] = useState(false);
  const [gotToDashboard, setGotToDashboard] = useState(false);
  const [verified, setVerified] = useState(false);
  const location = useLocation<{ authEmail: string; otpTime: number }>();
  const history = useHistory();
  const [timeLeft, setTimeLeft] = useState<timeLeft | Record<string, never>>(
    {}
  );

  const timerComponents: any = [];

  const otpTime = location?.state?.otpTime;
  const dispatch = useAppDispatch();

  const email = location?.state?.authEmail;

  const currentTime = new Date();
  const setTokenTime = currentTime.setTime(
    currentTime.getTime() + 10 * 60 * 1000
  );

  // useEffect(() => {
  //   if (!location?.state?.authEmail) history.push('/login');
  //   if (new Date().getTime() > location?.state?.otpTime) {
  //     const state = { ...location.state };
  //     state.otpTime = setTokenTime;
  //     history.replace({ ...location, state });
  //   }
  // }, [location]);

  const handleVerify = () => {
    if (token.length < 6) return setHasError(true);
  };

  const handleChange = (enteredOtp: any) => {
    setToken(enteredOtp);
    setHasError(false);
  };

  const handleResend = () => {
    console.log();
  };

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft(otpTime));
    }, 1000);
  });

  Object.keys(timeLeft).forEach(interval => {
    const time: any = timeLeft;
    if (!time[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {time[interval]} {interval}{' '}
      </span>
    );
  });

  return (
    <div className="p-4 !pt-0 md:p-8">
      <h1 className="mb-3 font-duplicate-san text-2xl font-medium text-gray-900 md:text-3xl">
        Verify email
      </h1>
      <p className="mb-5  text-gray-30 ">
        We sent a one-time password (OTP) to <br />
        <span className="font-medium italic text-black">{email}</span>
      </p>
      <p className="mb-5 text-gray-30">Please enter OTP to proceed. </p>
      <div className="mx-auto w-full space-y-5 ">
        <div className="mb-5 flex w-full flex-col items-center justify-center">
          <OtpInput
            value={token}
            onChange={handleChange}
            numInputs={6}
            separator={<span className="font-bold leading-none">-</span>}
            isInputSecure
            separateAfter={3}
            hasErrored={hasError}
            isInputNum
            placeholder="000000"
            shouldAutoFocus
            errorStyle="focus:!ring-red-500 focus:!border-red-500"
            inputStyle="!h-full !w-full !p-1 !mx-1 rounded-lg !leading-none text-xl md:text-3xl focus:ring-primary focus:border-primary placeholder:text-gray-300"
          />

          <div className="mt-5 flex w-full items-center justify-between">
            <div className="flex cursor-pointer items-center gap-2 text-sm md:text-base">
              <QuestionMarkCircleIcon className="h-5 w-5" />
              Resend email?
            </div>
            {/* <Button
              type="button"
              btnType="withoutbg"
              className="rounded-lg border border-gray-300 text-xs"
              onClick={handleResend}
              animate={false}
              // disabled={!!timerComponents.length || resendLoading}
              // loading={resendLoading}
            >
              Resend OTP
            </Button> */}
            <div className="text-xs md:text-base">
              {timerComponents.length ? (
                <>
                  OTP expires in{' '}
                  <span className="text-red-600">
                    {timeLeft.minutes}:{timeLeft.seconds}
                  </span>
                </>
              ) : (
                <span className="text-red-600">OTP expired!</span>
              )}
            </div>
          </div>
        </div>

        <Button type="button" onClick={handleVerify} fullWidth>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default VerifyEmail;
