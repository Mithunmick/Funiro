import React from 'react';
import Explore from '../../components/Explore';
import Feature from '../../components/Feature';
import HeroComp from '../../components/LandingComp/HeroComp';
import Product from '../../components/Product';

import LandingLayout from '../../layouts/LandingPage';

const LandingPage = () => {
  return (
    <>
      <LandingLayout>
        <HeroComp />
        <Feature />
        <Product />
        <Explore />
      </LandingLayout>
    </>
  );
};

export default LandingPage;
