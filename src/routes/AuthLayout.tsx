import FloatingSupport from 'components/flaotingsupport';
import AuthNavbar from 'components/navbar/auth-navbar';

const AuthLayout = ({ children }: any) => {
  return (
    <main className="min-h-screen bg-primary bg-cover">
      <section className="container mx-auto flex md:px-5 md:py-8 min-h-full bg-primary">
        <div className="mx-auto flex flex-col  w-full max-w-6xl pb-6 md:pt-10 bg-primary">
          {children}
        </div>
      </section>
    </main>
  );
};

export default AuthLayout;
