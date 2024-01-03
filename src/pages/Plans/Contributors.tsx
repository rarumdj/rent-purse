import PageLayout from 'components/page-layout/pageLayout';
import Table from 'components/ui/table/Table';
import { useAppDispatch } from 'hooks/redux-hooks';
import React, { useEffect } from 'react';
import { resetBlockCommon, setBreadcrumbs } from 'redux/slices/commonSlice';
import { buildPaymentHistoryTableData } from 'utils/tables/tableBuilders';
import { paymentHistory, paymentHistoryData } from 'utils/tables/tableColumns';

const Contributors = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      setBreadcrumbs({
        currentPage: 'Contributors',
        previousPages: ['House rent'],
        previousRoute: '/plan/details',
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
    </PageLayout>
  );
};

export default Contributors;
