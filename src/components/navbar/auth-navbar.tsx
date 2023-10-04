import { Link, useHistory } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo/logo.svg';

const AuthNavbar = () => {
  const { push } = useHistory();
  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 flex h-20 justify-center border-b border-gray-300 bg-white px-6 py-4 lg:px-16 lg:py-4`}
    >
      <div className="container flex w-screen flex-row items-center justify-between">
        <div className="z-50 flex space-x-10">
          <Link to="/">
            <Logo />
          </Link>

          <div className="hidden md:ml-auto md:mr-auto md:flex">
            <button
              className="absolute z-50 block -translate-x-8 -translate-y-4 md:hidden"
              //   onClick={handleClick}
            ></button>
            {/* <nav
              className={`flex flex-row items-center gap-8 space-x-1 text-sm font-medium text-gray-30 lg:text-base`}
            >
              <a className="cursor-pointer hover:text-gray-900">Payments</a>
              <a className="cursor-pointer hover:text-gray-900">Loans</a>
              <a className="flex cursor-pointer items-center hover:text-gray-900">
                About Us
              </a>
            </nav> */}
          </div>
        </div>

        <div className="z-50 md:flex">
          <div className="flex flex-row items-center space-x-4 font-medium md:ml-16">
            {/* <button
              className={`flex h-11 items-center justify-center px-3 text-xs font-medium text-gray-30 md:px-6 md:text-base`}
              onClick={() => push('/login')}
            >
              Sign In
            </button> */}
            {/* <button
              className={`flex h-11 items-center justify-center gap-2 rounded-lg bg-black px-3 text-center text-xs font-medium text-white md:px-6 md:text-base`}
              onClick={() => push('/sign-up')}
            >
              Create an account
            </button> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AuthNavbar;
