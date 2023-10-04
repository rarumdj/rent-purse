import {
  Messages2,
  MessageSearch,
  Message,
  MessageQuestion,
  CloseCircle,
} from 'iconsax-react';
import React from 'react';
import CustomPopover from 'components/ui/CustomMenu';

const linkList = [
  { name: 'Live Chat', icon: Messages2 },
  { name: 'FAQs', icon: MessageSearch },
  { name: 'Suggest an Improvement', icon: Message },
];
const FloatingSupport = () => {
  return (
    <div className="fixed bottom-0 right-0 px-8 py-8 lg:px-12">
      <CustomPopover
        positionTop
        button={
          <div className="-mb-10 flex h-9 items-center justify-center gap-2 rounded-l-lg rounded-tr-lg bg-black px-4 py-2 text-xs font-medium text-white lg:h-10 lg:text-sm">
            <MessageQuestion className="h-3.5 w-3.5 text-white lg:h-4 lg:w-4" />{' '}
            Support
          </div>
        }
        activeButton={
          <div className="-mb-10 flex h-9 items-center justify-center gap-2 rounded-l-lg rounded-tr-lg bg-black px-4 py-2 text-xs font-medium text-white lg:h-10 lg:text-sm">
            <CloseCircle className="h-3.5 w-3.5 text-white lg:h-4 lg:w-4" />{' '}
            Close
          </div>
        }
        list={linkList}
      />
    </div>
  );
};

export default FloatingSupport;
