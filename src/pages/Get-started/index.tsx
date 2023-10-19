import classNames from 'classnames';
import PageLayout from 'components/page-layout/pageLayout';
import Badge from 'components/ui/badge/Badge';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import React, { useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getStatus } from 'utils';
import { ReactComponent as Check } from 'assets/icons/check.svg';

export interface IMenus {
  title: string;
  subTitle: string;
  buttonName: string;
  isActive: boolean;
  isComplete: boolean;
  link: string;
}

const learnMore = [
  {
    title: 'Fee collection system',
    subTitle: 'Seamlessly collect and manage school fees',
    buttonName: 'Learn More',
    link: '/',
    background: 'bg-fee-collection',
  },
  {
    title: 'Short term loans',
    subTitle: `Get access to working capital to run your operations efficiently`,
    buttonName: 'Learn More',
    link: '/',
    background: 'bg-short-loan',
  },
  {
    title: 'Revenue based financing',
    subTitle: `Access your school’s future revenue in 24-48 hours`,
    buttonName: 'Learn More',
    link: '/',
    background: 'bg-revenue-base',
  },
  {
    title: 'Payroll management / salary advance',
    subTitle: `Automate and customise your employee’s pay, and much more.`,
    buttonName: 'Learn More',
    link: '/',
    background: 'bg-payroll',
  },
];

const support = [
  {
    title: 'Join our WhatsApp Community',
    subTitle: 'Join our WhatsApp community to interact with us today',
    buttonName: 'Join now',
    link: '/',
    background: 'bg-whatsapp',
  },
  {
    title: 'FAQS',
    subTitle: `Access our frequently asked questions for help `,
    buttonName: 'See FAQs',
    link: '/',
    background: 'bg-faqs',
  },
];

const GetStarted = () => {
  const [menus, setMenus] = useState<IMenus[]>([]);
  const { push } = useHistory();

  //   const {
  //     getSchoolProfile: { data: schoolProfile, loading: profileLoading, success },
  //   } = useAppSelector(({ onboarding }) => onboarding);

  //   const {
  //     getUser: { data, loading },
  //   } = useAppSelector(({ auth }) => auth);

  const fullName = 'David';

  const completeInfo = 0;
  const completeContact = 0;
  const completeOwner = 0;
  const completeDocument = 0;

  useMemo(() => {
    setMenus([
      {
        title: 'School info',
        subTitle: 'Give us more information about your School',
        isActive: true,
        isComplete: !!completeInfo,
        buttonName: 'Update details',
        link: '/get-started/school-info',
      },
      {
        title: 'School contact',
        subTitle: `Provide us with your School's contact information`,
        isActive: false,
        isComplete: !!completeContact,
        buttonName: 'Update details',
        link: '/get-started/school-contact',
      },
      {
        title: 'Owners profile',
        subTitle:
          'Provide details of the school director or major shareholder of the School',
        isActive: false,
        isComplete: !!completeOwner,
        buttonName: 'Update details',
        link: '/get-started/owners-profile',
      },
      {
        title: 'Verification documents',
        subTitle:
          'Please upload the documents you were issued when your School was formed',
        isActive: false,
        isComplete: !!completeDocument,
        buttonName: 'verifiy documents',
        link: '/get-started/documents',
      },
    ]);
  }, []);

  const steps =
    completeInfo + completeContact + completeDocument + completeOwner;

  return (
    <PageLayout title="Getting Started">
      <div className="relative w-full bg-white">
        <div className="w-full bg-main-surface px-5 py-8 rounded-xl">
          <h1 className="text base font-duplicate-san font-medium md:text-2xl">
            Welcome to Steward, {fullName} 🤩
          </h1>
          <p className="mt-1 text-sm text-gray-600 md:text-base">
            {completeDocument
              ? `Learn more about our product offerings.`
              : `Let’s get your account up and running.`}
          </p>
        </div>

        {!completeDocument && (
          <div className="mt-8 flex flex-col">
            <div className="flex items-center justify-between bg-gray-100 p-3">
              <h1 className="text-sm md:text-base">Profile completeness</h1>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white p-2 text-sm font-medium">
                {steps}/<span className="text-gray-500">4</span>
              </div>
            </div>
            <div className="grid md:grid-cols-4">
              {menus.map((item, index) => (
                <div
                  key={index}
                  className="border-1 flex flex-col border border-gray-100 p-4"
                >
                  <h4 className="mb-4 text-sm font-medium">{item.title}</h4>
                  <p className="mb-2 text-xs text-gray-500">{item.subTitle}</p>
                  <div className="mt-auto pt-4">
                    {item.isComplete ? (
                      <Badge
                        status={getStatus('completed')}
                        icon={Check}
                        title="Completed"
                      />
                    ) : (
                      <span
                        onClick={() => push(item.link)}
                        className="cursor-pointer text-xs font-medium text-purple-700"
                      >
                        {item.buttonName}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10">
          {!completeDocument && <h3>Learn more about our product offerings</h3>}

          <div className="mt-6 grid gap-3 md:grid-cols-4">
            {learnMore.map((item, index) => (
              <div
                key={index}
                className="flex h-full flex-col overflow-hidden border border-gray-100"
              >
                <div
                  className={classNames(
                    'h-24 w-full  bg-cover bg-no-repeat',
                    item.background
                  )}
                />
                <div className="px-4 pt-4">
                  <h4 className="mb-4 font-duplicate-san text-sm font-medium">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500">{item.subTitle}</p>
                </div>
                <div className="mt-auto p-4">
                  <span className="text-xs font-medium text-purple-700">
                    {item.buttonName}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3>Support</h3>

          <div className="mt-6 grid gap-3 md:grid-cols-4">
            {support.map((item, index) => (
              <div
                key={index}
                className="flex h-full flex-col overflow-hidden border border-gray-100"
              >
                <div
                  className={classNames(
                    'h-24 w-full  bg-cover bg-no-repeat',
                    item.background
                  )}
                />
                <div className="px-4 pt-4">
                  <h4 className="mb-4 font-duplicate-san text-sm font-medium">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500">{item.subTitle}</p>
                </div>
                <div className="mt-auto p-4">
                  <span className="cursor-pointer text-xs font-medium text-purple-700">
                    {item.buttonName}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default GetStarted;
