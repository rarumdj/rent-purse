import { AuthSuccessCard } from 'components/cards/AuthSuccessCard';
import React from 'react';
import AuthNavbar from '../../components/navbar/auth-navbar';
import { ReactComponent as Icon404 } from '../../assets//icons/404.svg';

const PageNotFound = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <AuthNavbar />
      <section className="container mx-auto flex px-5 py-16 md:py-24">
        <div className="mx-auto w-full max-w-lg pb-16 pt-20">
          <div className="flex h-full w-full flex-col items-center justify-center rounded-xl bg-white p-10">
            <div className="mx-auto flex w-full max-w-lg flex-col items-center">
              <AuthSuccessCard
                icon={Icon404}
                title="Page not found!"
                subTitle={
                  <p className="italic text-primary-700">
                    Sorry, but the page you were looking for could not be found.
                    You can return to our home page, or drop us an email on
                    <span className="px-1 font-medium">
                      support@joinsteward.com{' '}
                    </span>{' '}
                    if you can&apos;t find what you&apos;re looking for.
                  </p>
                }
                buttonName="Go home"
                link="/"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PageNotFound;
