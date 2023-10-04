import FloatingSupport from 'components/flaotingsupport';
import OnboardingNavbar from 'components/navbar/onboarding-navbar';

const OnboardingLayout = ({ children }: any) => {
  return (
    <main className="min-h-screen bg-gray-50">
      <OnboardingNavbar />
      <section className="container mx-auto flex px-5 py-16 md:py-24">
        <div className="mx-auto w-full pb-16 pt-20">{children}</div>
      </section>
      <FloatingSupport />
    </main>
  );
};

export default OnboardingLayout;
