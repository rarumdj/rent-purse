import classNames from 'classnames';
import PageLayout from 'components/page-layout/pageLayout';
import Modal from 'components/ui/modal';
import { Calendar2, Home, RecordCircle } from 'iconsax-react';
import { useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import IncomeRent from './IncomeRent';
import BudgetGoal from './BudgetGoal';
import LinkCard from './LinkCard';
import DocumentUpload from './DocumentUpload';
import HouseOwner from './HouseOwner';

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

const onboarding = [
  {
    title: 'Income and Rent Details',
    subTitle: 'Share details to help customize your plan.',
    buttonName: 'Update Information',
    link: '/',
    background: 'bg-[#CAC7F4]',
    border: 'border-purple-300',
    color: 'text-[#1E1A4D]',
  },
  {
    title: 'Budget and Financial Goal',
    subTitle: 'Create a plan and monitor your progress.',
    buttonName: 'Update Information',
    link: '/',
    background: 'bg-[#EEEDFB]',
    border: 'border-purple-200',
    color: 'text-[#554BDB]',
  },
  {
    title: 'Link Bank Account',
    subTitle: 'Link bank account for faster transactions.',
    buttonName: 'Update Information',
    link: '/',
    background: 'bg-[#EAF9F1]',
    border: 'border-green-300',
    color: 'text-[#0E4629]',
  },
  {
    title: 'Document Upload',
    subTitle: 'Please upload the required documents.',
    buttonName: 'Update Information',
    link: '/',
    background: 'bg-gray-50',
    border: 'border-gray-100',
    color: 'text-gray-500',
  },
  {
    title: 'House Owner/Manager Info',
    subTitle: 'Provide info for a smooth payment process.',
    buttonName: 'Update Information',
    link: '/',
    background: 'bg-[#FFEFBD]',
    border: 'border-yellow-300',
    color: 'text-[#966334]',
  },
];

const GetStarted = () => {
  const [menus, setMenus] = useState<IMenus[]>([]);
  const { push } = useHistory();
  const [isOpen, setIsOpen] = useState<number | null>(null);
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

  const FormComponents = (index: number | null) => {
    switch (index) {
      case 1:
        return <IncomeRent />;
      case 2:
        return <BudgetGoal />;
      case 3:
        return <LinkCard />;
      case 4:
        return <DocumentUpload />;
      case 5:
        return <HouseOwner />;
    }
  };
  return (
    <PageLayout>
      <div className="relative w-full bg-white">
        <div className="w-full rounded-xl bg-main-surface px-5 py-8">
          <h1 className="font-duplicate-san text-base font-medium text-main-header md:text-2xl">
            Welcome to Rent purse, {fullName} 🤩
          </h1>
          <p className="mt-1 text-sm text-gray-600 md:text-base">
            {completeDocument
              ? `Learn more about our product offerings.`
              : `Let’s get your account up and running.`}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="flex items-center justify-center gap-2 rounded-md bg-white px-3 py-2 text-sm text-gray-900">
              <Home variant="Bold" className="h-5 w-5" />
              Plan name
            </span>
            <span className="flex items-center justify-center gap-2 rounded-md bg-white px-3 py-2 text-sm text-gray-900">
              <RecordCircle variant="Bold" className="h-5 w-5" />
              Target
            </span>
            <span className="flex items-center justify-center gap-2 rounded-md bg-white px-3 py-2 text-sm text-gray-900">
              <Calendar2 variant="Bold" className="h-5 w-5" />
              Duration
            </span>
          </div>

          <h4 className="mt-4 text-xl font-bold text-main-header">
            Profile completeness (0/5)
          </h4>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {onboarding.map((item, index) => (
            <div
              key={index}
              className={classNames(
                'rounded-xl border p-6',
                item.background,
                item.border
              )}
            >
              <div className={classNames(item.color)}>
                <h5 className="mb-1 text-md font-medium">{item.title}</h5>
                <p className="mb-6 text-sm">{item.subTitle}</p>
              </div>
              <div
                className="cursor-pointer text-sm"
                onClick={() => setIsOpen(index + 1)}
              >
                {item.buttonName}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal active={!!isOpen} onClick={() => setIsOpen(null)}>
        {FormComponents(isOpen)}
      </Modal>
    </PageLayout>
  );
};

export default GetStarted;
