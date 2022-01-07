import React from 'react';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';

const LandingLayout = ({ children }) => {
  return (
    <>
      <Nav />
      <>{children}</>
      <Footer />
    </>
  );
};

export default LandingLayout;
