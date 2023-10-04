import { notifyError } from 'components/toast';
import { useAppDispatch } from 'hooks/redux-hooks';
import Cookies from 'js-cookie';
import { useRef, useState } from 'react';
import { IdleTimerProvider } from 'react-idle-timer';
// import { logout } from 'redux/slices/authSlice';

let countdownInterval: any;
let timeout: any;

const SessionTimeout = ({ children }: any) => {
  const [timeoutModalOpen, setTimeoutModalOpen] = useState(false);
  const [timeoutCountdown, setTimeoutCountdown] = useState(0);
  const idleTimer = useRef(null);
  const dispatch = useAppDispatch();

  // const {
  //   getUser: { data },
  // } = useAppSelector(({ auth }) => auth);

  const token = Cookies.get('token');
  const isLoggedIn = Boolean(token);
  const tokenTime = Cookies.get('tokenExp') as any;

  const authExpired = () => {
    return isLoggedIn && new Date().getTime() > +tokenTime;
  };

  const clearSessionTimeout = () => {
    clearTimeout(timeout);
  };

  const clearSessionInterval = () => {
    clearInterval(countdownInterval);
  };

  const handleLogout = async (isTimedOut = '') => {
    try {
      const { pathname, search, hash } = window.location;
      Cookies.set('redirectPath', `${pathname}${search}${hash}` as any);
      // Cookies.set('lastLogin', data?.email as any);
      // dispatch(logout());
      setTimeoutModalOpen(false);
      clearSessionInterval();
      clearSessionTimeout();
    } catch (err) {
      console.error(err);
    }
  };

  const handleContinue = () => {
    setTimeoutModalOpen(false);
    clearSessionInterval();
    clearSessionTimeout();
  };

  const onActive = () => {
    if (!timeoutModalOpen) {
      clearSessionInterval();
      clearSessionTimeout();
    }
    // if (authExpired()) {
    //   handleLogout('active');
    //   toast('Session token expired', { type: 'error' });
    // }
  };

  const onAction = () => {
    if (authExpired()) {
      handleLogout('action');
      notifyError('Session Timeout', 'Session token expired');
    }
  };

  const onIdle = () => {
    if (authExpired()) {
      handleLogout('idle');
      notifyError('Session Timeout', 'Session token expired');
    }

    // const delay = 1000 * 1;
    // if (isAuthenticated && !timeoutModalOpen) {
    //   timeout = setTimeout(() => {
    //     let countDown = 10;
    //     setTimeoutModalOpen(true);
    //     setTimeoutCountdown(countDown);
    //     countdownInterval = setInterval(() => {
    //       if (countDown > 0) {
    //         setTimeoutCountdown(--countDown);
    //       } else {
    //         handleLogout(true);
    //       }
    //     }, 1000);
    //   }, delay);
    // }
  };

  //   const [state, setState] = useState<string>('Active');
  //   const [count, setCount] = useState<number>(0);
  //   const [remaining, setRemaining] = useState<number>(0);

  // const onIdle = () => {
  //   setState('Idle');
  //   console.log('idle')
  // };

  // const onActive = () => {
  //   setState('Active');
  //   console.log('active')
  // };

  // const onAction = () => {
  //   setCount(count + 1);
  //   console.log('action')
  // };

  // const { getRemainingTime } = useIdleTimer({
  //   onIdle,
  //   onActive,
  //   onAction,
  //   timeout: 1000,
  //   throttle: 500,
  // });

  return (
    <>
      <IdleTimerProvider
        onAction={onAction}
        onActive={onActive}
        onIdle={onIdle}
        timeout={2000}
        throttle={500}
      >
        {children}
      </IdleTimerProvider>
      {/* <SessionTimeoutDialog
        countdown={timeoutCountdown}
        onContinue={handleContinue}
        onLogout={() => handleLogout(false)}
        open={timeoutModalOpen}
      /> */}
    </>
  );
};

export default SessionTimeout;
