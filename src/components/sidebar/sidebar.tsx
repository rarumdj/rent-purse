import { XMarkIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Button from 'components/button/button';
import ProfilePicCard from 'components/cards/ProfilePic';
import { notifySuccess } from 'components/toast';
import CustomPopover from 'components/ui/CustomMenu';
import copy from 'copy-text-to-clipboard';
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import {
  ArrowDown2,
  ArrowUp2,
  Copy,
  HambergerMenu,
  LampCharge,
  Setting,
} from 'iconsax-react';
import { FC, useEffect, useState } from 'react';
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom';
import { capitalizeString, getInitails } from 'utils';
import logo, { ReactComponent as LogoIcon } from '../../assets/logo/logo.svg';

interface link {
  header: string | null;
  navs: {
    name: string;
    link: string;
    icon?: any;
    subLink?: { name: string; link: string }[];
  }[];
}
interface NavLinks {
  links: link[];
}

const isActiveStyle =
  '!font-medium !text-primary-700 !bg-gray-50 !transition-all !duration-200 !easy-in-out !flex !flex-column';
const isNotActiveStyle =
  '!flex items-center px-10 gap-3 md:text-sm text-xs font-normal py-3 text-gray-500 hover:text-primary-700 group transition-all duration-200 easy-in-out !flex-column';

const SideBar: FC<NavLinks> = ({ links }) => {
  const { pathname } = useLocation();

  const dispatch = useAppDispatch();

  const locationArray = pathname.split('/');

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const variants = {
    open: {
      //   scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    closed: {
      //   scale: 0,
      opacity: 0,
      y: '-100%',
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: 'hidden',
      },
    },
  };

  const onLogout = () => {
    // dispatch(authActions.logout());
  };

  const schoolID = 'N/A';

  const SchoolID = () => {
    return (
      <div
        className="flex w-full justify-between"
        onClick={() => {
          if (schoolID != 'N/A') {
            copy(schoolID);
            notifySuccess('Copied', '');
          }
        }}
      >
        School ID: {schoolID}
        <Copy className="ml-2 h-5 w-5 cursor-pointer text-blue-gray-500" />
      </div>
    );
  };

  const linkList = [
    { name: <SchoolID /> },
    { name: 'Settings', link: '/settings' },
    { name: 'Log out', action: onLogout },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(
    () => JSON.parse(localStorage.getItem('isDropdownOpen') as string) || null
  );

  const toggleDropdown = (index: any) => {
    setIsDropdownOpen(() => {
      const newValue = +index;
      if (index === isDropdownOpen)
        return localStorage.setItem('isDropdownOpen', JSON.stringify(null));
      localStorage.setItem('isDropdownOpen', JSON.stringify(newValue));
      return newValue;
    });
  };

  const NavItems = ({ item, index, isSubLink }: any) => {
    const linkLocation = item?.link?.split('/')[1];
    const Icon = item.icon;

    return (
      <li>
        {item.subLink ? (
          <>
            <button
              className={classNames(
                '!flex w-full !justify-between',
                isNotActiveStyle
              )}
              onClick={() => toggleDropdown(index)}
            >
              <Icon className="h-4 w-4 md:h-5 md:w-5" />{' '}
              <span>{item.name}</span>
              {isDropdownOpen === index ? (
                <ArrowUp2 className="h-4 w-4 text-primary-700" />
              ) : (
                <ArrowDown2 className="h-4 w-4 text-primary-700" />
              )}
            </button>
            {isDropdownOpen === index && (
              <ul>{renderMenuItems(item.subLink, true)}</ul>
            )}
          </>
        ) : (
          <NavLink
            to={item.link}
            // exact
            activeClassName={classNames(
              {
                [isActiveStyle]: locationArray[1] === linkLocation,
              },
              {
                ['!pl-14']: isSubLink,
              }
            )}
            className={classNames(isNotActiveStyle, {
              ['!pl-14']: isSubLink,
            })}
          >
            <Icon className="h-4 w-4 md:h-5 md:w-5" /> {item.name}
          </NavLink>
        )}
      </li>
    );
  };
  const renderMenuItems = (links: link[], isSubLink: boolean) => {
    return links.map((item, index) => {
      return (
        <div key={index}>
          <h4
            className={classNames(
              'easy-in-out !flex-column !flex h-fit w-full items-center !justify-between gap-3 px-10 py-3 !text-xs font-medium text-gray-500'
            )}
          >
            {item.header}
          </h4>

          {item.navs.map((list, indexx) => (
            <NavItems
              item={list}
              key={indexx}
              index={indexx}
              isSubLink={isSubLink}
            />
          ))}
        </div>
      );
    });
  };

  const nameInitials = 'N/A';

  const imageurl = null;
  return (
    <header className="hide-scrollbar flex h-full min-w-[255px] flex-col justify-between overflow-y-scroll bg-white">
      <div className="hidden h-full flex-col md:flex">
        <Link
          to="/"
          className="hidden  w-full items-start gap-2 bg-gray-50 px-4 py-6 md:flex"
        >
          <LogoIcon className="w-32 object-scale-down" />
        </Link>

        <div className="flex h-full justify-center">
          <div className="flex w-full flex-col gap-1 whitespace-nowrap px-2 pt-10 md:pt-6 ">
            <div className=" flex items-center justify-between rounded-lg bg-gray-50 px-2 py-3">
              <ProfilePicCard
                name={'Card'}
                email={schoolID}
                avatar={imageurl}
                nameInitials={nameInitials}
                success
              />

              <CustomPopover
                button={<ArrowDown2 className="mr-2 h-5 w-5 text-gray-500" />}
                list={linkList}
                hover={false}
              />
            </div>
            <ul className="m-0 mt-6 w-full list-none p-0">
              {renderMenuItems(links, false)}
            </ul>

            <div className="mt-auto py-10">
              <NavLink
                to="/settings"
                // exact
                activeClassName={classNames({
                  [isActiveStyle]: locationArray[1] === 'settings',
                })}
                className={classNames(isNotActiveStyle)}
              >
                <Setting className="h-4 w-4 text-rose-700 md:h-5 md:w-5" />{' '}
                Settings
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <nav className="flex justify-between p-4 md:hidden">
        <div
          className={classNames(
            click ? 'z-0' : 'z-50',
            ' left-0 my-auto flex translate-x-2 space-x-4'
          )}
        >
          <button
            className={classNames(click ? 'z-0' : 'z-50')}
            onClick={handleClick}
          >
            <HambergerMenu size="32" className="text-gray-700" />
          </button>
          <h1 className="text-lg font-medium ">
            {locationArray[1] === ''
              ? 'Home'
              : capitalizeString(locationArray[1])}
          </h1>
        </div>

        <div className="flex -translate-x-2 items-center space-x-4">
          <Button
            btnType="withoutbg"
            className=" h-10 rounded-lg border px-3 py-0 text-sm"
            border
            animate={false}
          >
            <LampCharge />
          </Button>
          <ProfilePicCard
            success
            avatar={imageurl}
            nameInitials={nameInitials}
          />
        </div>
      </nav>
      <motion.nav
        initial={false}
        animate={click ? 'open' : 'closed'}
        variants={variants}
        className={`absolute bottom-0 left-0 right-0 top-0 block min-h-screen bg-white lg:hidden`}
      >
        <div className="relative flex flex-initial px-8  py-4">
          <Link to="/" className="flex w-full items-start">
            <img src={logo} alt={logo} className="w-32 object-scale-down" />
          </Link>
          <button
            onClick={handleClick}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300 p-2"
          >
            <XMarkIcon className="h-5 w-5 text-primary-700" />
          </button>
        </div>
        <div className="flex h-full w-full flex-1 flex-col items-center justify-center px-4">
          <div className="bg h-full w-full max-w-md">
            <div className="flex h-full justify-center">
              <div className="flex w-full flex-col gap-1 whitespace-nowrap px-2 pt-10 md:pt-6 ">
                <div className="mb-5 flex items-center justify-between rounded-lg bg-gray-50 px-2 py-3">
                  <ProfilePicCard
                    name={'Card'}
                    email={schoolID}
                    avatar={imageurl}
                    nameInitials={nameInitials}
                    success
                  />

                  <CustomPopover
                    button={
                      <ArrowDown2 className="mr-2 h-5 w-5 text-gray-500" />
                    }
                    list={linkList}
                    hover={false}
                  />
                </div>
                <ul
                  className={classNames(
                    'm-0 w-full list-none overflow-y-scroll p-0 pb-20',
                    click ? 'block' : 'hidden'
                  )}
                >
                  {renderMenuItems(links, false)}
                  <NavLink
                    to="/settings"
                    // exact
                    activeClassName={classNames({
                      [isActiveStyle]: locationArray[1] === 'settings',
                    })}
                    className={classNames(isNotActiveStyle)}
                  >
                    <Setting className="h-4 w-4 text-rose-700 md:h-5 md:w-5" />{' '}
                    Settings
                  </NavLink>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>
    </header>
  );
};

export default SideBar;
