import PageLayout from 'components/page-layout/pageLayout';
import {
  Add,
  ArrowRight2,
  Calendar,
  InfoCircle,
  TickCircle,
} from 'iconsax-react';
import React, { useEffect } from 'react';
import { ReactComponent as PlusUser } from 'assets/icons/user-plus.svg';
import { useHistory } from 'react-router-dom';
import { resetBlockCommon, setBreadcrumbs } from 'redux/slices/commonSlice';
import { useAppDispatch } from 'hooks/redux-hooks';

const AllPlans = () => {
  const { push } = useHistory();
  const dispatch = useAppDispatch();

  const handleManage = () => {
    push('/plan/details');
  };

  useEffect(() => {
    dispatch(
      setBreadcrumbs({
        currentPage: 'All plans',
        previousPages: ['My plans'],
        previousRoute: '/',
      })
    );

    return () => {
      dispatch(resetBlockCommon({ blockType: 'breadcrumbs' }));
    };
  }, []);
  return (
    <PageLayout px="px-0">
      <section className="w-full">
        <div className="layout-px w-full pt-0">
          <div className="my-5 space-y-2">
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
                    <div className="flex w-fit items-center gap-2 rounded-md border border-gray-100 bg-white p-2 text-sm text-gray-900">
                      <PlusUser />
                      No contributors
                      <Add className="h-5 w-5 text-success-600" />
                    </div>
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
                    <div className="flex w-fit items-center gap-2 rounded-md border border-gray-100 bg-white p-2 text-sm text-gray-900">
                      <PlusUser />
                      No contributors
                      <Add className="h-5 w-5 text-success-600" />
                    </div>
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
                    <div className="flex w-fit items-center gap-2 rounded-md border border-gray-100 bg-white p-2 text-sm text-gray-900">
                      <PlusUser />
                      No contributors
                      <Add className="h-5 w-5 text-success-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AllPlans;
