import useOutsideClick from 'components/clickoutside';
import React, { useEffect, useRef, useState } from 'react';

const TableAddComment = ({ index, onclick, text, setText, status }: any) => {
  const [activeComment, setActiveComment] = useState<number | null | undefined>(
    null
  );
  const icons = text ? 'clarity:edit-solid' : 'akar-icons:plus';
  const iconsClass = text ? 'text-white' : 'text-blue-700';
  const textClass = text
    ? 'ml-2 font-medium text-sm text-blue-700'
    : 'ml-2 font-medium text-sm text-red-400';
  const iconsBox = text
    ? 'h-4 w-4 rounded-sm bg-blue-700 flex items-center justify-center'
    : 'h-4 w-4 rounded-full bg-blue-300 flex items-center justify-center';

  const closeComment = () => {
    setActiveComment(null);
  };

  const ref = useRef(null);
  const textref = useRef<HTMLTextAreaElement>(null);
  const buttonClickedOutside = useOutsideClick(ref);

  const handleInput = () => {
    if (textref.current) {
      textref.current.style.height = '5px';
      textref.current.style.height = textref.current?.scrollHeight + 'px';
      setText(textref.current.value);
    }
  };
  useEffect(() => {
    if (buttonClickedOutside) {
      closeComment();
    }
  }, [buttonClickedOutside]);

  return (
    <td className="whitespace-nowrap border-b border-l-0 border-r-0 border-t-0 p-4 px-6 text-left align-middle text-sm">
      <div
        onClick={e => {
          setActiveComment(index);
          e.preventDefault();
        }}
        className="flex cursor-pointer items-center"
      >
        <div className={iconsBox}>
          {/* <Icon icon={icons} fontSize={10} className={iconsClass} /> */}
        </div>
        <span className={textClass}>
          {text ? 'Edit Comment' : ' Add Comment'}
        </span>
      </div>

      <div
        ref={ref}
        className={`${
          activeComment === index ? '' : 'hidden'
        } absolute right-[58px] z-10 flex  h-auto flex-col rounded-xl border-2 border-gray-300 bg-white p-4 md:w-5/12 lg:right-[72px]`}
      >
        <div className="flex h-auto">
          <textarea
            ref={textref}
            value={text}
            onInput={handleInput}
            className="mr-1 w-full border-none text-sm outline-none focus:ring-0"
            rows={1}
            placeholder="Add comment"
          ></textarea>
          <button
            disabled={status === 1 ? true : false}
            onClick={onclick}
            className="mt-auto flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 p-3 outline-none transition-all  duration-150 ease-linear shadow ring-0 hover:shadow-md focus:outline-none active:bg-blue-800"
          >
            {/* {status === 1 ? (
              <Icon icon="eos-icons:three-dots-loading" className="h-4 w-4 text-white" />
            ) : (
              <Icon icon="bi:send-fill" className="h-4 w-4 text-white" />
            )} */}
          </button>
        </div>
      </div>
    </td>
  );
};

export default TableAddComment;
