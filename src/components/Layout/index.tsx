import Navigation from '../Navigation';

function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>{children}</main>
    </>
  );
}

export default Layout;
