import { avatar, avatarImg } from 'assets/image';
import Button from 'components/button/button';
import PageLayout from 'components/page-layout/pageLayout';
import {
  Add,
  AddCircle,
  Award,
  Edit,
  Edit2,
  InfoCircle,
  User,
} from 'iconsax-react';
import React from 'react';
const links = [
  { icon: <User className="h-5 w-5" />, name: 'Account Settings' },
  { icon: <User className="h-5 w-5" />, name: 'Plan settings' },
  { icon: <User className="h-5 w-5" />, name: 'Security Settings' },
  { icon: <User className="h-5 w-5" />, name: 'Payment Settings' },
  { icon: <User className="h-5 w-5" />, name: 'Refer and get Reward' },
  { icon: <User className="h-5 w-5" />, name: 'Contact Us' },
  { icon: <User className="h-5 w-5" />, name: 'Terms and Condition' },
  { icon: <User className="h-5 w-5" />, name: 'Log out' },
];
const Settings = () => {
  return (
    <PageLayout px="px-4">
      <section className="w-full rounded-lg border py-10">
        <div className="layout-px w-full border-b py-0">
          <div className="flex items-center gap-5">
            <div className="h-24 w-24 overflow-hidden rounded-full">
              <img src={avatarImg} alt="avatar" className="h-full w-full" />
            </div>

            <div className="my-5 space-y-1">
              <div className="flex flex-wrap items-center gap-4">
                <h1 className="text-xl font-bold text-main-header md:text-3xl">
                  Daniel King
                </h1>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2 rounded-lg bg-success-100 px-2 py-1 text-sm text-green-950">
                    <Award className="h-5 w-5" />
                    Credit score : 78
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-error-50 px-2 py-1 text-sm text-gray-600">
                    <InfoCircle className="h-5 w-5" />
                    Learn about credit score
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 md:text-base">
                danielking@gmail.com
              </p>
              <div className="flex w-fit items-center gap-2 rounded-md border border-gray-100 bg-white p-2 text-sm text-gray-900">
                <Edit className="h-4 w-4" />
                Edit profile
              </div>
            </div>
          </div>
        </div>
        <div className="layout-px w-full pt-8">
          <div className="rounded-lg border">
            <div className="border-b">
              <div className="flex justify-between px-4 py-2">
                <div className="flex items-center gap-4">
                  <h5>Cashflow</h5>
                  <div className="flex w-fit items-center gap-2 rounded-md border border-gray-100 bg-white p-2 text-sm text-gray-900">
                    <Add className="h-5 w-5" />
                    Request Statement
                  </div>
                </div>

                <div className="flex">
                  <div className="flex w-fit items-center gap-2 rounded-md rounded-r-none border border-gray-100 bg-white p-2 text-sm text-gray-900">
                    Nov 1, 2023
                  </div>
                  <div className="flex w-fit items-center gap-2 rounded-md rounded-l-none border border-gray-100 bg-white p-2 text-sm text-gray-900">
                    Dec 1, 2023
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 px-4 py-2">
              <div className="py-5 ">
                <h6 className="text-xs">Money In</h6>
                <h1 className="text-xl font-bold">$20,000,000</h1>
              </div>

              <div className="border-l py-5 pl-4">
                <h6 className="text-xs">Money Out</h6>
                <h1 className="text-xl font-bold">$20,000,000</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="layout-px w-full py-0 space-y-2">
          {links.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-md border p-3"
            >
              {item.icon} {item.name}
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Settings;
