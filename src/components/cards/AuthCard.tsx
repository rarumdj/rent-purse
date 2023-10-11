import React, { FC } from 'react';
import { ReactComponent as AppLogo } from 'assets/logo/app-logo.svg';
import { ReactComponent as AppLogoWhite } from 'assets/logo/app-logo-white.svg';
import { ArrowLeft2 } from 'iconsax-react';

interface IAuthCard {
  children: React.ReactNode;
}
const AuthCard: FC<IAuthCard> = ({ children }) => {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center">
      <div className="grid h-full w-full md:grid-cols-12">
        <div className="hidden h-full w-full border-r border-gray-200 bg-[#F8F8F8] md:col-start-1 md:col-end-8 md:block md:max-h-[700px] md:rounded-l-lg md:p-10">
          <AppLogo />
          <div className="mt-6 text-sm">
            You deserve to smile all the time, because you have your house rent
            and finances in order
          </div>
        </div>
        <div className="flex h-full max-h-[700px] w-full flex-col md:col-start-8 md:col-end-13 md:rounded-br-lg md:rounded-tr-lg md:bg-white md:py-10">
          <div className="md:hidden items-center gap-2 p-6 text-white flex">
            <ArrowLeft2 className="h-5 w-5 text-white" /> <AppLogoWhite />
          </div>
          <div className="hide-scrollbar min-h-[calc(100vh-72px)] overflow-y-scroll rounded-t-lg bg-white px-6 py-2  md:min-h-[530px] md:rounded-t-none md:px-10">
            {children}
          </div>
        </div>
      </div>

      <div className="my-10 hidden flex-wrap gap-4 text-sm text-white md:flex">
        <p>© 2020 sigmaleap inc. All rights reserved.</p>
        <p>Terms</p>
        <p>Privacy policy</p>
        <p>Help center</p>
      </div>
    </section>
  );
};

export default AuthCard;
