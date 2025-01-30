import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header/>
      <main>{children}</main>
      <Footer/>
      <script src="//code.tidio.co/yb4vkgvpquevntetabjw3kxnshn2xd1d.js" async></script>
    </>
  );
};

export default Layout;
