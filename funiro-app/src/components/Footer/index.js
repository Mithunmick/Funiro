import React from 'react';
import { Icon } from '@iconify/react';
import './footer.css';

const Footer = () => {
  return (
    <>
      <div className='foot'>
        <div className='footer_container'>
          <div className='Funiro'>
            <h1 className='title'>Funiro</h1>
            <p className='sub1'>
              Worldwide furniture store since 2020. We sell over 1000+ branded
              products on our website
            </p>
            <div className='adress'>
              <Icon icon='ci:location' />
              <p className='sub1'>Sawojajar Malang, Indonesia</p>
            </div>
            <div className='phone'>
              <Icon icon='ci:phone' />
              <p className='sub1'>+6289 456 3455</p>
            </div>
            <p className='sub1'>www.funiro.com</p>
          </div>
          <div className='Menu'>
            <h1 className='title'>Menu</h1>
            <p className='sub1'>Products</p>
            <p className='sub1'>Rooms</p>
            <p className='sub1'>Inspirations</p>
            <p className='sub1'>About Us</p>
            <p className='sub1'>Terms & Policy</p>
          </div>
          <div className='Account'>
            <h1 className='title'>Account</h1>
            <p className='sub1'>My Account</p>
            <p className='sub1'>Checkout</p>
            <p className='sub1'>My Cart</p>
            <p className='sub1'>My catalog</p>
          </div>
          <div className='Stay_Connected'>
            <h1 className='title'>Stay Connected</h1>
            <p className='sub1'>Facebook</p>
            <p className='sub1'>Instagram</p>
            <p className='sub1'>Twitter</p>
          </div>
          <div className='Stay_Updated'>
            <h1 className='title'>Stay Updated</h1>
            <div className='Stay_s'>
              <input
                className='search_input1'
                placeholder='Search for minimalist chair'
                type='search'
              />
              <Icon
                className='broder'
                icon='carbon:send-alt-filled'
                color='white'
                width='36px'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
