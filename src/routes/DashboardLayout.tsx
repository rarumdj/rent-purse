import FloatingSupport from 'components/flaotingsupport';
import SideBar from 'components/sidebar/sidebar';
import {
  CardSend,
  DirectboxSend,
  Graph,
  Receipt2,
  Receipt21,
  ReceiptText,
  TransmitSqaure2,
  UserSquare,
} from 'iconsax-react';

export const NavLinks = [
  {
    header: null,
    navs: [
      {
        name: 'Overview',
        link: '/',
        icon: Graph,
      },
    ],
  },
  {
    header: 'PAYMENTS',
    navs: [
      {
        name: 'Transactions',
        link: '/transactions',
        icon: ReceiptText,
      },
      {
        name: 'Settlements',
        link: '/settlements',
        icon: TransmitSqaure2,
      },
      // {
      //   name: 'Payouts',
      //   link: '/payouts',
      //   icon: CardSend,
      // },
    ],
  },
  {
    header: 'CAPITAL',
    navs: [
      {
        name: 'School loans',
        link: '/loans',
        icon: DirectboxSend,
      },
    ],
  },
  {
    header: 'FEE & STUDENT MANAGEMENT',
    navs: [
      // {
      //   name: 'Fee transactions',
      //   link: '/loans',
      //   icon: Receipt21,
      // },
      {
        name: 'Fee management',
        link: '/fee-management',
        icon: Receipt2,
      },
      {
        name: 'Students',
        link: '/students',
        icon: UserSquare,
      },
    ],
  },
  // {
  //   name: 'Transactions',
  //   link: '/transactions',
  //   // subLink: [
  //   //   {
  //   //     name: 'All Transactions',
  //   //     link: '/transactions/all',
  //   //   },
  //   //   {
  //   //     name: 'School fees',
  //   //     link: '/transactions/school-fees',
  //   //   },
  //   // ],
  // },
  // {
  //   name: 'Loans',
  //   link: '/loans',
  // },
  // {
  //   name: 'Students',
  //   link: '/students',
  // },

  // // {
  // //   name: 'Payments',
  // //   link: '/payments',
  // // },
  // // {
  // //   name: 'Payroll',
  // //   link: 'payroll',
  // // },

  // {
  //   name: 'Settings',
  //   link: '/settings',
  // },
];

const DashboardLayout = ({ children }: any) => {
  return (
    <div className="relative flex min-h-screen flex-col bg-gray-50 md:flex-row">
      <aside className="sticky top-0 left-0 right-0 z-50 h-fit flex-initial md:flex md:h-screen">
        <SideBar links={NavLinks} />
      </aside>
      <main className="min-h-screen flex-1 overflow-y-scroll">
        {/* <DashboardNavbar links={DriverLink} /> */}
        <section className="relative mx-auto min-h-screen max-w-[110rem] py-8 pl-2 pr-2 sm:pl-4 sm:pr-4 md:pr-10 md:pl-0 lg:pl-8 lg:pr-8">
          {children}
        </section>
      </main>
      <FloatingSupport />
    </div>
  );
};

export default DashboardLayout;
