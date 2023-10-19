import { XMarkIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import { notifySuccess } from 'components/toast';
import CustomPopover from 'components/ui/CustomMenu';
import copy from 'copy-text-to-clipboard';
import { useAppDispatch } from 'hooks/redux-hooks';
import { ArrowDown2, ArrowUp2, Copy, HambergerMenu } from 'iconsax-react';
import { FC, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
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
  '!font-medium !text-primary !transition-all !duration-200 !easy-in-out !flex !flex-column';
const isNotActiveStyle =
  '!flex items-center px-2 gap-3 md:text-sm text-xs font-normal py-3.5 text-gray-500 hover:text-primary group transition-all duration-200 easy-in-out !flex-column';

const SideBar: FC<NavLinks> = ({ links }) => {
  const { pathname } = useLocation();

  const dispatch = useAppDispatch();

  const locationArray = pathname.split('/');

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
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
       David J
        <Copy className="ml-2 h-5 w-5 cursor-pointer text-blue-gray-500" />
      </div>
    );
  };

  const linkList = [
    // { name: <SchoolID /> },
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
              'easy-in-out !flex-column !flex h-fit w-full items-center !justify-between gap-3 px-2 py-3 !text-xs font-medium text-gray-500'
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
    <header className="hide-scrollbar  flex h-full min-w-[255px] flex-col justify-between overflow-y-scroll border-b border-gray-200 bg-white md:border-r md:bg-main-surface">
      <div className="hidden h-full flex-col md:flex">
        <Link
          to="/"
          className="hidden  w-full items-start gap-2  px-4 py-6 md:flex"
        >
          <LogoIcon className="w-32 object-scale-down" />
        </Link>

        <div className="flex h-full justify-center">
          <div className="flex w-full flex-col gap-1 whitespace-nowrap px-4 pt-10 md:pt-6 ">
            <div className="broder-gray-200 flex items-center justify-between rounded-lg border bg-white px-2.5 py-1.5">
              <div className="flex flex-col">
                <span className="text-md text-[#0A024E]">House Rent</span>
                <span className="text-sm text-gray-500">2 Members</span>
              </div>
              <CustomPopover
                button={<ArrowDown2 className="mr-1 h-5 w-5 text-gray-500" />}
                list={linkList}
                hover={false}
              />
            </div>
            <ul className="m-0 mt-6 w-full list-none p-0">
              {renderMenuItems(links, false)}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <nav className="flex justify-between p-4 md:hidden">
        <div
          className={classNames(
            isOpen ? 'z-0' : 'z-50',
            ' left-0 my-auto flex w-full translate-x-2 items-center justify-between space-x-4'
          )}
        >
          <Link to="/" className="w-full items-start gap-2">
            <LogoIcon className="w-32 object-scale-down" />
          </Link>
          <button
            className={classNames(isOpen ? 'z-0' : 'z-50', 'pr-4')}
            onClick={handleToggle}
          >
            <HambergerMenu size="26" className="text-gray-700" />
          </button>
        </div>
      </nav>

      {/* transition */}
      <div
        className={classNames(
          isOpen ? 'block' : 'hidden',
          'fixed inset-0 z-0 transform bg-black/60 transition-all duration-500 ease-in-out'
        )}
        onClick={handleToggle}
      ></div>
      <div
        className={classNames(
          '!absolute bottom-0 left-0 right-0 top-0 z-50 ml-auto block min-h-screen max-w-xs transform bg-main-surface duration-500 ease-in-out lg:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-[100%]'
        )}
      >
        <div className="relative flex flex-initial px-8  py-4">
          <Link to="/" className="flex w-full items-start">
            <img src={logo} alt={logo} className="w-28 object-scale-down" />
          </Link>
          <button onClick={handleToggle}>
            <XMarkIcon className="h-5 w-5 text-primary-700" />
          </button>
        </div>
        <div className="flex h-full w-full flex-1 flex-col items-center justify-center px-4">
          <div className="bg h-full w-full max-w-md">
            <div className="flex h-full justify-center">
              <div className="flex w-full flex-col gap-1 whitespace-nowrap px-2 pt-10 md:pt-6 ">
                <div className="broder-gray-200 flex items-center justify-between rounded-lg border bg-white px-2.5 py-1.5">
                  <div className="flex flex-col">
                    <span className="text-sm text-[#0A024E]">House Rent</span>
                    <span className="text-xs text-gray-500">2 Members</span>
                  </div>
                  <CustomPopover
                    button={
                      <ArrowDown2 className="mr-1 h-5 w-5 text-gray-500" />
                    }
                    list={linkList}
                    hover={false}
                  />
                </div>
                <ul
                  className={classNames(
                    'm-0 block w-full list-none overflow-y-scroll p-0 pb-20'
                  )}
                >
                  {renderMenuItems(links, false)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SideBar;
