import React from 'react';
import Feature from '../../components/Feature';
import HeroComp from '../../components/LandingComp/HeroComp';

import LandingLayout from '../../layouts/LandingPage';

const LandingPage = () => {
  return (
    <>
      <LandingLayout>
        <HeroComp />
        <Feature />
      </LandingLayout>
    </>
  );
};

export default LandingPage;
