import ProfilePicCard from 'components/cards/ProfilePic';
import { useAppSelector } from 'hooks/redux-hooks';
import { Link } from 'react-router-dom';
import { getInitails } from 'utils';
import { ReactComponent as Logo } from '../../assets/logo/logo.svg';

const OnboardingNavbar = () => {
  const nameInitials = 'N/A';

  const imageurl = null;
  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 flex h-20 justify-center border-b border-gray-300 bg-white px-6 py-4 lg:px-16 lg:py-4`}
    >
      <div className="container flex w-screen flex-row items-center justify-between">
        <div className="z-50">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="z-50 md:flex">
          <div className="hidden md:ml-auto md:mr-auto md:flex">
            <button
              className="absolute z-50 block -translate-x-8 -translate-y-4 md:hidden"
              //   onClick={handleClick}
            ></button>
          </div>
          <div className="flex flex-row items-center space-x-4 font-medium md:ml-16">
            <ProfilePicCard
              name={'Loan'}
              email={'loan'}
              avatar={imageurl}
              nameInitials={nameInitials}
              success
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default OnboardingNavbar;
