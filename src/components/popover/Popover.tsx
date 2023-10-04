import { Popover2 } from '@blueprintjs/popover2';
import React, { FC } from 'react';
import './styles.scss';

interface Popover {
  isOpen: boolean;
  togglePopover: any;
  content: string | JSX.Element | undefined;
  button: React.ReactNode;
  index?: number | undefined;
}

const Popover: FC<Popover> = ({
  isOpen,
  togglePopover,
  content,
  button,
  index,
}) => {
  return (
    <Popover2
      interactionKind="click"
      placement="bottom-end"
      minimal
      content={content}
      modifiers={{
        offset: { enabled: true, options: { offset: [0, 12] } },
        preventOverflow: { enabled: true },
      }}
      onInteraction={state => {
        index ? togglePopover(state, index) : togglePopover(state);
      }}
      isOpen={isOpen}
    >
      {button}
    </Popover2>
  );
};

export default Popover;
