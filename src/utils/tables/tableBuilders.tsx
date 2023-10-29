import ProfilePicCard from 'components/cards/ProfilePic';

export function buildLoanTableData(data: any[] = []) {
  return data?.map(data => {
    const newData = {
      ...data,
    };

    return newData;
  });
}

export function buildPaymentHistoryTableData(data: any[] = []) {
  return data?.map(data => {
    const newData = {
      ...data,
      moved_from: (
        <ProfilePicCard name={data.bank} email={data.account} success />
      ),
      moved_to: (
        <ProfilePicCard name={data.bank} email={data.account} success />
      ),
    };

    return newData;
  });
}
