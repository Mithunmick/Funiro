import React from 'react'
import { Icon } from '@iconify/react';
import './Feature.css'
const Feature = () => {
  return (
    <>
      <div className='feature'>
        <div className='HQ'>
          <div className='HQ_I'>
            <Icon icon='icon-park-outline:trophy' width='48' />
          </div>
          <div className='HQ_T'>
            <h1>High Quality</h1>
            <h2 className='thin'>crafted from top materials</h2>
          </div>
        </div>
        <div className='WP'>
          <div className='HQ_I'>
            <Icon icon='icon-park:check-correct' width='48' />
          </div>
          <div className='HQ_T'>
            <h1>Warrany Protection</h1>
            <h2 className='thin'>Over 2 years</h2>
          </div>
        </div>
        <div className='FS'>
          <div className='HQ_I'>
            <Icon icon='la:shipping-fast' width='48' />
          </div>
          <div className='HQ_T'>
            <h1>Free Shipping</h1>
            <h2 className='thin'>Order over 150 $</h2>
          </div>
        </div>
        <div className='SP'>
          <div className='HQ_I'>
            <Icon icon='ic:round-support-agent' width='48' />
          </div>
          <div className='HQ_T'>
            <h1>24 / 7 Support</h1>
            <h2 className='thin'>Dedicated support</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feature

