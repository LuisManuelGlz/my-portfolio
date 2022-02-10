import Footer from '../footer';
import Meta from '../meta';
import ISocialLinks from '../../types/socialLinks';

type Props = {
  children: React.ReactNode;
  socialLinks: ISocialLinks;
};

const Layout = ({ children, socialLinks }: Props) => {
  return (
    <>
      <Meta />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
