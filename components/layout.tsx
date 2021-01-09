import { ReactNode } from 'react';
import Meta from './meta';
import Footer from './footer';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
