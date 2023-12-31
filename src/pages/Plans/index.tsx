import Button from 'components/button/button';
import SectionTag from 'components/cards/SectionTag';
import PageLayout from 'components/page-layout/pageLayout';
import {
  Add,
  AddCircle,
  ArrowLeft,
  ArrowRight,
  ArrowRight2,
  Award,
  InfoCircle,
  Link,
  Moneys,
  RefreshLeftSquare,
  TickCircle,
} from 'iconsax-react';
import React, { useState } from 'react';
import { ReactComponent as DollarCoins } from 'assets/image/dollar-coins.svg';
import { ReactComponent as Calendar } from 'assets/icons/calendar.svg';
import { ReactComponent as PlusUser } from 'assets/icons/user-plus.svg';
import { ReactComponent as NoSavings } from 'assets/image/no-savings.svg';
import Table from 'components/ui/table/Table';
import { paymentHistory, paymentHistoryData } from 'utils/tables/tableColumns';
import { buildPaymentHistoryTableData } from 'utils/tables/tableBuilders';
import { DollarCoin } from 'assets/image';
import { CircularProgressbar } from 'react-circular-progressbar';
import EmptyCard from 'components/cards/EmptyCard';
import Modal from 'components/ui/modal';
import CreatePlan from './modals/CreatePlan';
import LinkCard from './modals/LinkCard';
import { useHistory } from 'react-router-dom';
import PaymentLink from './modals/PaymentLink';

const Plans = () => {
  const percentage = 66;
  const { push } = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [isFund, setIsFund] = useState(false);
  const [isPaymentLink, setIsPaymentLink] = useState(false);

  const handleCreatePlan = () => {
    setIsOpen(true);
  };
  const handleManage = () => {
    push('/plan/details');
  };

  const handleGotoAll = () => {
    push('/plan/all');
  };
  const handleFund = () => {
    setIsFund(true);
  };
  const handlePaymentLink = () => {
    setIsPaymentLink(true);
  };
  return (
    <PageLayout px="px-0">
      <section className="w-full">
        <div className="layout-px w-full border-b pt-0">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 rounded-lg bg-success-100 px-2 py-1 text-sm text-green-950">
              <Award className="h-5 w-5" />
              Credit score : 78
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-error-50 px-2 py-1 text-sm text-gray-600">
              <InfoCircle className="h-5 w-5" />
              Learn about credit score
            </div>
          </div>
          <div className="my-5 space-y-2">
            <h1 className="text-xl font-bold text-main-header md:text-3xl">
              Hello, Daniel! 👋
            </h1>
            <p className="text-sm text-gray-600 md:text-lg">
              Let&apos;s save for your rent today.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button
              onClick={handleCreatePlan}
              className="flex h-11 min-w-full items-center justify-center gap-2 py-0 text-sm shadow-xs md:min-w-[200px]"
            >
              <AddCircle className="h-4 w-4 text-white" /> New plan
            </Button>
            <Button
              onClick={handleFund}
              className="flex h-11 min-w-full items-center justify-center gap-2 !bg-[#29C775] py-0 text-sm !text-black shadow-xs md:min-w-[200px]"
            >
              Fund account <ArrowRight className="h-4 w-4 text-black" />
            </Button>
          </div>
          <div className="relative my-8 flex w-full flex-wrap items-center justify-between gap-3 rounded-lg bg-main-header bg-star_bg bg-cover p-4 md:grid-cols-12">
            <SectionTag
              className="md:col-start-1 md:col-end-11"
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
              className="mt-3 flex h-9 w-fit items-center justify-center gap-2 whitespace-nowrap py-0 text-sm text-white md:col-start-11 md:col-end-13 md:mt-0"
              btnType="withoutbg"
              border
              animate={false}
            >
              Learn More <ArrowRight2 className="h-3 w-3 text-white" />
            </Button>
          </div>

          <div className="relative my-8 flex w-full flex-wrap justify-between gap-3 rounded-lg bg-profile_star_bg bg-cover p-4 md:grid-cols-12">
            <SectionTag
              className=""
              image={
                <div className="h-16 w-16">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
              }
              title={
                <span className="text-sm !leading-tight md:text-md">
                  Finish your payment set up to <br /> easily fund your account
                </span>
              }
              type="big"
              descClass="!text-white"
              titleClass="!leading-tight "
            />
            <Button
              onClick={() => push('/get-started')}
              className="mt-3 flex h-9 w-fit items-center justify-center gap-2 whitespace-nowrap py-0 text-sm text-white md:mt-0"
            >
              Complete profile <ArrowRight2 className="h-3 w-3 text-white" />
            </Button>
          </div>
        </div>
        <div className="layout-px w-full pt-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-2xl font-bold">
              <Moneys className="h-5 w-5" />
              Saving plans
            </div>
            <div
              onClick={handleGotoAll}
              className="flex cursor-pointer items-center gap-1 text-sm text-[#157B6F]"
            >
              See all <ArrowRight2 className="h-3.5 w-3.5 text-gray-600" />
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-1 rounded-md border border-gray-200 bg-[#F8F8F8] p-2 text-sm text-gray-900">
                  <TickCircle className="h-3.5 w-3.5 text-success-600" /> Plan
                  type
                </div>
                <div
                  onClick={handleManage}
                  className="flex cursor-pointer items-center gap-1 text-sm text-primary"
                >
                  Manage <ArrowRight2 className="h-3.5 w-3.5 text-gray-600" />
                </div>
              </div>

              <div className="rounded-lg border border-gray-100 p-2">
                <h5 className="mb-2 text-sm font-semibold text-gray-600">
                  House rent
                </h5>
                <h1 className="flex flex-col text-2xl font-bold text-main-header md:text-4xl">
                  $100/
                  <span className="text-md font-medium  text-gray-600 md:text-xl">
                    $4,000,000.01
                  </span>
                </h1>
                <div className="relative mt-3 h-3 w-full overflow-hidden rounded-full bg-[#EEEDFB] md:h-5">
                  <div className="absolute z-10 h-full w-2/6 rounded-full bg-[#554BDB]" />
                  <div className="absolute h-full w-5/6 rounded-full bg-[#554bdb36]" />
                </div>
                <div className="mt-3 flex items-center gap-2 rounded-full bg-error-50 px-2 py-1 text-xs text-gray-600 md:text-sm">
                  <div>
                    <InfoCircle className="h-5 w-5" />
                  </div>
                  You are a few payments behind schedule Recalculate
                </div>
                <div className="item-center mt-4 flex flex-wrap gap-3">
                  <div>
                    <span className="text-sm text-gray-600">Duration</span>
                    <div className="flex w-fit items-center gap-2 rounded-md border border-gray-100 bg-white p-2 text-sm text-gray-900">
                      <Calendar />
                      12 months
                    </div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Contributors</span>
                    <div className="flex -space-x-2 overflow-hidden">
                      <img
                        className="inline-block h-9 w-9 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <img
                        className="inline-block h-9 w-9 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <img
                        className="inline-block h-9 w-9 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                        alt=""
                      />
                      <img
                        className="inline-block h-9 w-9 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <a
                        className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-gray-700 text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800"
                        href="#"
                      >
                        +99
                      </a>
                    </div>
                  </div>
                  <div
                    onClick={handlePaymentLink}
                    className="mt-auto flex h-fit w-fit cursor-pointer items-center gap-2 rounded-md border border-gray-100 bg-white p-2 text-sm text-gray-900"
                  >
                    Create payment link
                    <Link className="h-4 w-4 text-success-600" />
                  </div>
                </div>
              </div>
            </div>

            {/*  */}

            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-1 rounded-md border border-gray-200 bg-[#F8F8F8] p-2 text-sm text-gray-900">
                  <TickCircle className="h-3.5 w-3.5 text-success-600" /> Plan
                  type
                </div>
                <div
                  onClick={handleManage}
                  className="flex cursor-pointer items-center gap-1 text-sm text-primary"
                >
                  Manage <ArrowRight2 className="h-3.5 w-3.5 text-gray-600" />
                </div>
              </div>

              <div className="rounded-lg border border-gray-100 p-2">
                <h5 className="mb-2 text-sm font-semibold text-gray-600">
                  House rent
                </h5>
                <h1 className="flex flex-col text-2xl font-bold text-main-header md:text-4xl">
                  $20,000/
                  <span className="text-md font-medium text-gray-600 md:text-xl">
                    $4,000,000.01
                  </span>
                </h1>
                <div className="relative mt-3 h-3 w-full overflow-hidden rounded-full bg-[#EEEDFB] md:h-5">
                  <div className="absolute z-10 h-full w-2/6 rounded-full bg-[#554BDB]" />
                  <div className="absolute h-full w-5/6 rounded-full bg-[#554bdb36]" />
                </div>
                <div className="mt-3 flex items-center gap-2 rounded-full bg-error-50 px-2 py-1 text-xs text-gray-600 md:text-sm">
                  <div>
                    <InfoCircle className="h-5 w-5" />
                  </div>
                  You are a few payments behind schedule Recalculate
                </div>
                <div className="item-center mt-4 flex flex-wrap gap-3">
                  <div>
                    <span className="text-sm text-gray-600">Duration</span>
                    <div className="flex w-fit items-center gap-2 rounded-md border border-gray-100 bg-white p-2 text-sm text-gray-900">
                      <Calendar />
                      12 months
                    </div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Contributors</span>
                    <div className="flex -space-x-2 overflow-hidden">
                      <img
                        className="inline-block h-9 w-9 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <img
                        className="inline-block h-9 w-9 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <img
                        className="inline-block h-9 w-9 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                        alt=""
                      />
                      <img
                        className="inline-block h-9 w-9 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <a
                        className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-gray-700 text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800"
                        href="#"
                      >
                        +99
                      </a>
                    </div>
                  </div>

                  <div
                    onClick={handlePaymentLink}
                    className="mt-auto flex h-fit w-fit cursor-pointer items-center gap-2 rounded-md border border-gray-100 bg-white p-2 text-sm text-gray-900"
                  >
                    Create payment link
                    <Link className="h-4 w-4 text-success-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* <EmptyCard
            icon={NoSavings}
              title="You have no savings yet"
              subtitle="Create a savings plan to get started on the amazing benefits"
              action={
                <div className="flex items-center gap-1 rounded-md border border-gray-100 bg-gray-200 px-3 py-2 text-sm">
                  Add plan <Add className='h-4 w-4' />
                </div>
              }
            /> */}
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

      <Modal px={false} active={isOpen} onClick={() => setIsOpen(false)}>
        <CreatePlan />
      </Modal>

      <Modal px={false} active={isFund} onClick={() => setIsFund(false)}>
        <LinkCard />
      </Modal>
      <Modal
        px={false}
        active={isPaymentLink}
        onClick={() => setIsPaymentLink(false)}
      >
        <PaymentLink />
      </Modal>
    </PageLayout>
  );
};

export default Plans;
