import { Menu, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { FC, Fragment } from 'react';
import { useHistory } from 'react-router-dom';

interface ICustomMenu {
  positionTop?: boolean;
  button: React.ReactNode;
  activeButton?: React.ReactNode;
  hover?: boolean;
  list: {
    name: string | React.ReactNode;
    link?: string;
    action?: any;
    icon?: any;
    isDisabled?: boolean;
  }[];
}
const CustomMenu: FC<ICustomMenu> = ({
  button,
  list,
  positionTop,
  activeButton,
  hover = true,
}) => {
  const { push } = useHistory();
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button>
            {({ open }) => (
              <>{activeButton ? <>{open ? activeButton : button}</> : button}</>
            )}
            {/* {button} */}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={classNames(
              'absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-black ring-opacity-5 shadow-lg ring-1 focus:outline-none',
              { ['bottom-10']: positionTop }
            )}
          >
            <div className=" py-1 ">
              {list.map((item, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <button
                      disabled={item.isDisabled}
                      onClick={() =>
                        item.link
                          ? push(item.link)
                          : item.action
                          ? item.action()
                          : null
                      }
                      className={classNames(
                        active && hover
                          ? 'bg-primary-700 text-white'
                          : 'text-gray-900',
                        list.length - 1 != index
                          ? 'border-b border-gray-300'
                          : '',
                        'group flex w-full items-center  p-4 text-sm',
                        {
                          ['cursor-not-allowed bg-gray-50']: item.isDisabled,
                        }
                      )}
                    >
                      {item.icon && (
                        <>
                          {active && hover ? (
                            <item.icon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          ) : (
                            <item.icon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          )}
                        </>
                      )}

                      {item.name}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default CustomMenu;
