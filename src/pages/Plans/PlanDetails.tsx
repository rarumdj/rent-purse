import { DollarCoin } from 'assets/image';
import Button from 'components/button/button';
import SectionTag from 'components/cards/SectionTag';
import PageLayout from 'components/page-layout/pageLayout';
import { Input } from 'components/ui/input/atom/Input';
import CustomSearchInput from 'components/ui/search-input/CustomSearchInput';
import Table from 'components/ui/table/Table';
import { useAppDispatch } from 'hooks/redux-hooks';
import {
  AddCircle,
  ArrowDown2,
  ArrowRight,
  ArrowRight2,
  Award,
  Calendar,
  Edit2,
  Link,
  MoneySend,
  Moneys,
  RefreshLeftSquare,
  Send2,
  TickCircle,
  Trash,
} from 'iconsax-react';
import React, { useEffect, useState } from 'react';
import { resetBlockCommon, setBreadcrumbs } from 'redux/slices/commonSlice';
import { buildPaymentHistoryTableData } from 'utils/tables/tableBuilders';
import { paymentHistory, paymentHistoryData } from 'utils/tables/tableColumns';
import CustomPopover from 'components/ui/CustomMenu';
import { ReactComponent as Kuda } from 'assets/image/kuda.svg';
import { ReactComponent as QuestionMark } from 'assets/icons/question-mark.svg';
import Modal from 'components/ui/modal';
import WithdrawFunds from './modals/WithdrawFunds';
import DeletePlan from './modals/DeletePlan';
import UpdateAccount from './modals/UpdateAccount';
import ShareLink from './modals/ShareLink';
const PlanDetails = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isShareLink, setIsShareLink] = useState(false);
  const [isEditPay, setIsEditPay] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const handleCreatePlan = () => {
    setIsOpen(true);
  };

  const handleDeletePlan = () => {
    setIsDelete(true);
  };

  const handleEditPay = () => {
    setIsEditPay(true);
  };

  const handleShare = () => {
    setIsShareLink(true);
  };
  useEffect(() => {
    dispatch(
      setBreadcrumbs({
        currentPage: 'House rent',
        previousPages: ['My plans'],
        previousRoute: '/',
      })
    );

    return () => {
      dispatch(resetBlockCommon({ blockType: 'breadcrumbs' }));
    };
  }, []);

  const linkList = [
    { name: 'Create payment link', icon: Link, action: handleShare },
    { name: 'Withdraw funds', icon: MoneySend, action: handleCreatePlan },
    { name: 'Delete plan', icon: Trash, action: handleDeletePlan },
  ];
  const dropDown = (
    <div className="flex h-11 w-full transform cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-300 bg-transparent px-4 py-3 text-sm font-medium text-black duration-200  focus:outline-none disabled:opacity-50">
      Quick actions <ArrowDown2 className="h-5 w-5 text-primary-700" />
    </div>
  );
  return (
    <PageLayout px="px-0">
      <section className="w-full">
        <div className="layout-px w-full border-b pt-0">
          <div className="my-5 space-y-2">
            <h1 className="text-xl font-bold text-main-header md:text-3xl">
              Hello, Daniel! 👋
            </h1>
            <p className="text-sm text-gray-600 md:text-lg">
              Manage your savings
            </p>
          </div>
          <div className="w-full flex-wrap items-center gap-3 space-y-3 md:flex md:space-y-0">
            <Input
              id="email"
              name="email"
              placeholder="john@xyz.com"
              className="w-full md:w-80"
            />
            <Button className="flex h-11 min-w-full items-center justify-center gap-2 py-0 text-sm shadow-xs md:min-w-[200px]">
              <AddCircle className="h-4 w-4 text-white" /> Invite member
            </Button>
            <CustomPopover button={dropDown} list={linkList} />
          </div>
          <div className="relative my-8 flex w-full flex-wrap items-center justify-between rounded-lg bg-main-header bg-star_bg bg-cover p-4 md:grid-cols-12">
            <SectionTag
              image={
                <img src={DollarCoin} alt="coin" className="h-fit w-fit" />
              }
              title="We reduce the effects of inflation on your savings"
              description="We help you save your rent in dollars this helps to mitigate the cost of inflation by a wholesome 25%😋"
              type="small"
              descClass="!text-white"
              titleClass="!text-white"
            />
            <Button
              className="mt-3 flex h-9 w-fit items-center justify-center gap-2 py-0 text-sm text-white md:mt-0"
              btnType="withoutbg"
              border
              animate={false}
            >
              Learn More <ArrowRight2 className="h-3 w-3 text-white" />
            </Button>
          </div>
        </div>
        <div className="layout-px w-full pt-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-2xl font-bold">
              <Moneys className="h-5 w-5" />
              Plan breakdown
            </div>
          </div>
          <div className="mt-6 space-y-4">
            <div className="space-y-3 rounded-lg border border-gray-200 bg-gray-50 p-2 md:w-fit">
              <div
                onClick={handleEditPay}
                className="flex w-fit cursor-pointer items-center gap-1 rounded-md border border-gray-200 bg-[#F8F8F8] p-2 text-sm text-gray-900"
              >
                <Send2 className="h-3.5 w-3.5 text-success-600" /> Pay to{' '}
                <Edit2 className="h-3.5 w-3.5 text-gray-600" />
              </div>
              <div className="flex items-center  rounded-md border  border-gray-200 bg-white p-2 md:w-[317px]">
                <div className="p-1">
                  <Kuda />
                </div>
                <div className="">
                  <h6 className="text-md text-gray-600">
                    Kuda microfinance bank
                  </h6>
                  <h6 className="text-md text-gray-600">2003017546</h6>
                </div>
              </div>
            </div>

            <div className="grid gap-2 rounded-2xl border border-gray-200 bg-white px-3 py-3 md:grid-cols-3">
              <div className="space-y-4 border-b border-r-0 border-gray-200 p-4 px-0 md:border-b-0 md:border-r md:p-0 md:px-4">
                <Input
                  id="rent"
                  name="rent"
                  value="House rent"
                  disabled
                  label="Plan title"
                />
                <Input
                  id="target"
                  name="target"
                  label="Saving target"
                  disabled
                  value="$5,000,000.01"
                />

                <div>
                  <p className="mb-1 text-sm text-gray-600">Amount saved</p>
                  <h4 className="text-xl">$100</h4>
                </div>

                <div>
                  <p className="mb-1 text-sm text-gray-600">Savings plan</p>
                  <div className="flex w-fit items-center gap-1 rounded-md border border-gray-200 bg-[#F8F8F8] p-2 text-sm text-gray-900">
                    <TickCircle className="h-3.5 w-3.5 text-success-600" />
                    Fixed plan
                  </div>
                </div>
              </div>

              <div className="space-y-4 border-b border-r-0 border-gray-200 p-4 px-0 md:border-b-0 md:border-r md:p-0 md:px-4">
                <div>
                  <p className="mb-1 text-sm text-gray-600">Duration</p>
                  <div className="flex w-fit items-center gap-1 rounded-md border border-gray-200 bg-[#F8F8F8] p-2 text-sm text-gray-900">
                    <Calendar className="h-4 w-4 text-gray-600" />
                    12 months
                  </div>
                </div>

                <div>
                  <p className="mb-1 text-sm text-gray-600">Contributors</p>
                  <div className="flex -space-x-2 overflow-hidden">
                    <img
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <a
                      className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gray-700 text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800"
                      href="#"
                    >
                      +99
                    </a>
                  </div>
                </div>

                <div>
                  <p className="mb-1 text-sm text-gray-600">Credit score</p>
                  <div className="flex w-fit items-center gap-2 rounded-lg bg-success-100 px-2 py-1 text-sm text-green-950">
                    <Award className="h-5 w-5" />
                    Credit score : 78
                  </div>
                </div>

                <div>
                  <p className="mb-1 text-sm text-gray-600">Savings plan</p>
                  <div className="flex w-fit items-center gap-1 rounded-md border border-gray-200 bg-[#F8F8F8] p-2 text-sm text-gray-900">
                    <Calendar className="h-4 w-4 text-gray-600" />
                    Monthly
                    <ArrowDown2 className="h-4 w-4 text-gray-600" />
                  </div>
                </div>
              </div>

              <div className="space-y-4 p-4 px-0 md:p-0 md:px-4">
                <div>
                  <p className="mb-1 text-sm text-gray-600">Start date</p>
                  <div className="flex w-fit items-center gap-1 rounded-md border border-gray-200 bg-[#F8F8F8] p-2 text-sm text-gray-900">
                    <Calendar className="h-4 w-4 text-gray-600" />
                    21 jul 23, 9:30am
                  </div>
                </div>
                <div>
                  <p className="mb-1 text-sm text-gray-600">End date</p>
                  <div className="flex w-fit items-center gap-1 rounded-md border border-gray-200 bg-[#F8F8F8] p-2 text-sm text-gray-900">
                    <Calendar className="h-4 w-4 text-gray-600" />
                    21 jul 23, 9:30am
                  </div>
                </div>

                <div>
                  <p className="mb-1 text-sm text-gray-600">
                    Dollar effect (Inflation)
                  </p>
                  <h4 className="text-xl">25%</h4>
                </div>

                <div>
                  <p className="mb-1 flex items-center gap-1 text-sm text-gray-600">
                    Bonus <QuestionMark className="p-0.5" />
                  </p>
                  <h4 className="text-xl">$4,000,000.01</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="my-6 flex items-center justify-between">
            <div className="flex items-center gap-2 text-2xl font-bold">
              <RefreshLeftSquare className="h-5 w-5" />
              Payment history
            </div>
            <div className="flex cursor-pointer items-center gap-1 text-sm text-[#157B6F]">
              See all <ArrowRight2 className="h-3.5 w-3.5 text-gray-600" />
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 p-4">
            <Table
              column={paymentHistory}
              data={buildPaymentHistoryTableData(paymentHistoryData)}
            />
            {/* <EmptyCard
              title="You have not made any payments"
              subtitle="Create a savings plan to get started on the amazing benefits"
            /> */}
          </div>
        </div>
      </section>

      <Modal active={isOpen} onClick={() => setIsOpen(false)}>
        <WithdrawFunds />
      </Modal>
      <Modal active={isEditPay} onClick={() => setIsEditPay(false)}>
        <UpdateAccount />
      </Modal>
      <Modal
        px={false}
        active={isShareLink}
        onClick={() => setIsShareLink(false)}
      >
        <ShareLink />
      </Modal>

      <Modal
        position="center"
        active={isDelete}
        onClick={() => setIsDelete(false)}
        close
      >
        <DeletePlan />
      </Modal>
    </PageLayout>
  );
};

export default PlanDetails;
