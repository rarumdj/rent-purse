import React from 'react';
import { isEqual } from 'lodash';
import { Checkbox } from 'components/ui/input/atom/Checkbox';

const SelectionType = React.memo(
  ({ selectedRows, handleRowSelection, index, item }: any) => {
    return (
      <Checkbox
        checked={selectedRows.some((row: any) => isEqual(row, item))}
        onChange={() => handleRowSelection(item)}
        key={index}
      />
    );
  }
);

export default SelectionType;
