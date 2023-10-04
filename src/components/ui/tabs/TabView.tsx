import React, { FC } from 'react';

interface ITabView {
  index: number;
  tabs: React.ReactNode[];
}
const TabView: FC<ITabView> = ({ index, tabs }) => {
  return <div>{tabs[index]}</div>;
};

export default TabView;
