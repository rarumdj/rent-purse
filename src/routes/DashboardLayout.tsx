import ProfilePicCard from 'components/cards/ProfilePic';
import FloatingSupport from 'components/flaotingsupport';
import SideBar from 'components/sidebar/sidebar';
import { useAppSelector } from 'hooks/redux-hooks';
import {
  ArrowLeft,
  Gift,
  NotificationBing,
  Setting3,
  Star,
  TransmitSqaure2,
  UserSquare,
} from 'iconsax-react';
import React from 'react';
import { useHistory } from 'react-router-dom';

export const NavLinks = [
  {
    header: null,
    navs: [
      {
        name: 'Get started',
        link: '/get-started',
        icon: Star,
        iconColor: {
          hover: 'group-hover:text-orange-600',
          color: 'text-orange-600',
        },
      },
    ],
  },
  {
    header: 'Navigation',
    navs: [
      {
        name: 'My plan',
        link: '/',
        icon: UserSquare,
        iconColor: {
          hover: 'group-hover:text-blue-gray-600',
          color: 'text-blue-gray-600',
        },
      },
      {
        name: 'Transactions',
        link: '/transactions',
        icon: TransmitSqaure2,
      },
      {
        name: 'Rewards',
        link: '/rewards',
        icon: Gift,
        iconColor: {
          hover: 'group-hover:text-blue-gray-600',
          color: 'text-blue-gray-600',
        },
      },
      {
        name: 'Settings',
        link: '/settings',
        icon: Setting3,
        iconColor: {
          hover: 'group-hover:text-blue-gray-600',
          color: 'text-blue-gray-600',
        },
      },
    ],
  },
];

const DashboardLayout = ({ children }: any) => {
  const { push } = useHistory();
  const {
    breadcrumbs: { currentPage, previousPages, previousRoute },
  } = useAppSelector(({ common }) => common);
  const goBack = () => {
    push(previousRoute);
  };

  const formattedPage = previousPages.map(item => (
    <React.Fragment key={item}>
      {item}
      {' / '}
    </React.Fragment>
  ));
  return (
    <div className="relative flex min-h-screen flex-col bg-white md:flex-row">
      <aside className="sticky left-0 right-0 top-0 z-50 h-fit flex-initial overflow-x-clip md:flex md:h-screen">
        <SideBar links={NavLinks} />
      </aside>
      <main className="min-h-screen flex-1 overflow-y-scroll">
        <div className="fixed inset-0 z-40 hidden h-[89px] w-full bg-white px-8 md:flex">
          {currentPage && (
            <div className="mr-auto flex h-full  translate-x-64 items-center gap-2 text-xl font-semibold text-main-header">
              <span
                onClick={goBack}
                className="flex cursor-pointer items-center gap-2 text-gray-400"
              >
                <ArrowLeft className="h-5 w-5 text-black" />
                {formattedPage}
              </span>{' '}
              {currentPage}
            </div>
          )}
          <div className="ml-auto flex h-full items-center gap-8">
            <div>
              <NotificationBing className="h-5 w-5 text-black" />
            </div>
            <ProfilePicCard nameInitials="A" success />
          </div>
        </div>
        {/* <DashboardNavbar links={DriverLink} /> */}
        <section className="relative mx-auto min-h-screen max-w-[110rem] pb-8 pt-4 md:pt-24">
          {children}
        </section>
      </main>
      <FloatingSupport />
    </div>
  );
};
//pl-2 pr-2 sm:pl-4 sm:pr-4 md:pl-8 md:pr-8 lg:pl-8 lg:pr-8

export default DashboardLayout;
