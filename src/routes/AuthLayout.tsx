import FloatingSupport from 'components/flaotingsupport';
import AuthNavbar from 'components/navbar/auth-navbar';

const AuthLayout = ({ children }: any) => {
  return (
    <main className="min-h-screen bg-auth_bg bg-cover">
      <section className="container mx-auto flex px-5 py-16 md:py-24">
        <div className="mx-auto w-full max-w-lg pb-16 pt-20">{children}</div>
      </section>
    </main>
  );
};

export default AuthLayout;
