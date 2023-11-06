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
  Link,
  MoneySend,
  Moneys,
  RefreshLeftSquare,
  Trash,
} from 'iconsax-react';
import React, { useEffect } from 'react';
import { resetBlockCommon, setBreadcrumbs } from 'redux/slices/commonSlice';
import { buildPaymentHistoryTableData } from 'utils/tables/tableBuilders';
import { paymentHistory, paymentHistoryData } from 'utils/tables/tableColumns';
import CustomPopover from 'components/ui/CustomMenu';

const PlanDetails = () => {
  const dispatch = useAppDispatch();
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
    { name: 'Create payment link', icon: Link },
    { name: 'Withdraw funds', icon: MoneySend },
    { name: 'Delete plan', icon: Trash },
  ];
  const dropDown = (
    <div className="flex h-11 transform cursor-pointer items-center gap-2 rounded-md border border-gray-300 bg-transparent px-4 py-3 text-sm font-medium text-black duration-200  focus:outline-none disabled:opacity-50">
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
          <div className="flex flex-wrap items-center gap-3">
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
          <div className="relative my-8 grid w-full items-center justify-between rounded-lg bg-main-header bg-star_bg bg-cover p-4 md:grid-cols-12">
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
              className="mt-3 flex h-9 w-fit items-center justify-center gap-2 py-0 text-sm text-white md:col-start-11 md:col-end-13 md:mt-0"
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
          <div className="mt-6 grid gap-4 md:grid-cols-2"></div>

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

      {/* <Modal px={false} active={isOpen} onClick={() => setIsOpen(false)}>
        <LinkCard />
      </Modal> */}
    </PageLayout>
  );
};

export default PlanDetails;
