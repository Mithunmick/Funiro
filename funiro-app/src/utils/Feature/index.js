import React from 'react';
import { Icon } from '@iconify/react';
import '../../components/Feature/Feature.css';

const FeatureComp = ({ title, subTitle, icon }) => {
  return (
    <>
      <div className='HQ'>
        <div className='HQ_I'>
          <Icon icon={icon} width='48' />
        </div>
        <div className='HQ_T'>
          <h1>{title}</h1>
          <h2 className='thin'>{subTitle}</h2>
        </div>
      </div>
    </>
  );
};

export default FeatureComp;
