import React from 'react';
import Explore from '../../components/Explore';
import Feature from '../../components/Feature';
import Grid from '../../components/Grid';
import HeroComp from '../../components/LandingComp/HeroComp';
import Product from '../../components/Product';
import Tips from '../../components/Tips';

import LandingLayout from '../../layouts/LandingPage';

const LandingPage = () => {
  return (
    <>
      <LandingLayout>
        <HeroComp />
        <Feature />
        <Product />
        <Explore />
        <Tips />
        <Grid />
      </LandingLayout>
    </>
  );
};

export default LandingPage;
