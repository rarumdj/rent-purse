import cn from 'classnames';
import React from 'react';

interface TabProps {
  tabs: { name: string; key: string }[];
  active: string;
  onSelect: (tabKey: string) => void;
}

const Tab: React.FC<TabProps> = ({ tabs, active, onSelect }) => {
  return (
    <div className="w-full border-b border-b-gray-200">
      <ul className="-mb-px flex h-fit flex-wrap items-end gap-3 text-xs xl:text-base">
        {tabs.map((tab: any, i: number) => (
          <li key={i}>
            <button
              onClick={() => {
                onSelect(tab.key);
              }}
              className={cn(
                'inline-block rounded-t-lg border-b-2 p-4 text-sm font-medium',
                active === tab.key
                  ? 'border-primary-700'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600'
              )}
            >
              {tab.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tab;
