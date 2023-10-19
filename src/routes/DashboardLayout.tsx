import ProfilePicCard from 'components/cards/ProfilePic';
import FloatingSupport from 'components/flaotingsupport';
import SideBar from 'components/sidebar/sidebar';
import {
  CardSend,
  DirectboxSend,
  Gift,
  Graph,
  HomeTrendUp,
  MoneyTick,
  Notepad2,
  NotificationBing,
  Receipt2,
  Receipt21,
  ReceiptText,
  Setting3,
  Star,
  TransmitSqaure2,
  UserSquare,
} from 'iconsax-react';

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
        link: '/plan',
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
  return (
    <div className="relative flex min-h-screen flex-col bg-white md:flex-row">
      <aside className="sticky left-0 right-0 top-0 z-50 h-fit flex-initial overflow-x-clip md:flex md:h-screen">
        <SideBar links={NavLinks} />
      </aside>
      <main className="min-h-screen flex-1 overflow-y-scroll">
        <div className="fixed inset-0 z-40 hidden h-[89px] w-full bg-white px-8 md:flex">
          <div className="ml-auto flex h-full items-center gap-8">
            <div>
              <NotificationBing className="h-5 w-5 text-black" />
            </div>
            <ProfilePicCard nameInitials="A" success />
          </div>
        </div>
        {/* <DashboardNavbar links={DriverLink} /> */}
        <section className="relative mx-auto min-h-screen max-w-[110rem] pb-8 pl-2 pr-2 pt-4 sm:pl-4 sm:pr-4 md:pl-0 md:pr-10 md:pt-24 lg:pl-8 lg:pr-8">
          {children}
        </section>
      </main>
      <FloatingSupport />
    </div>
  );
};

export default DashboardLayout;
