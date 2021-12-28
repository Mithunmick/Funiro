import React from 'react';
import FeatureComp from '../../utils/Feature';
import './Feature.css';
const Feature = () => {
  return (
    <>
      <div className='feature'>
        <FeatureComp
          icon='icon-park-outline:trophy'
          title='High Quality'
          subTitle='crafted from top materials'
        />
        <FeatureComp
          icon='icon-park:check-correct'
          title='>Warrany Protection'
          subTitle='Over 2 years'
        />
        <FeatureComp
          icon='la:shipping-fast'
          title='Free Shipping'
          subTitle='Order over 150 $'
        />
        <FeatureComp
          icon='ic:round-support-agent'
          title='24 / 7 Support'
          subTitle='Dedicated support'
        />
      </div>
    </>
  );
};

export default Feature;
