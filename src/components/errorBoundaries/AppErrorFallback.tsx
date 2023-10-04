import { AuthSuccessCard } from 'components/cards/AuthSuccessCard';
import { ReactComponent as Icon404 } from 'assets//icons/alert-circle.svg';

const AppErrorFallback = () => {
  const goHome = () => {
    window.location.href = '/';
  };
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="container mx-auto flex px-5 py-16 md:py-24">
        <div className="mx-auto w-full max-w-lg pt-20 pb-16">
          <div className="flex h-full w-full flex-col items-center justify-center rounded-xl bg-white p-10">
            <div className="mx-auto flex w-full max-w-lg flex-col items-center">
              <AuthSuccessCard
                icon={Icon404}
                title="Oops! an error occoured!"
                subTitle={
                  <p className="italic text-primary-700">
                    Please contact the administrator or support for assistance
                    drop us an email on
                    <span className="px-1 font-medium">
                      support@joinsteward.com{' '}
                    </span>
                  </p>
                }
                buttonName="Go home"
                onClick={goHome}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AppErrorFallback;
