import React from 'react';
import { Icon } from '@iconify/react';
import './footer.css';
import { accountItems, menuItems, socialItems } from '../../helper/FooterData';
import { Link } from 'react-router-dom';

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
            {menuItems.map((items, i) => (
              <div key={i} className='sub1'>
                <Link to={items.url}>{items.text}</Link>
              </div>
            ))}
          </div>
          <div className='Account'>
            <h1 className='title'>Account</h1>
            {accountItems.map(items => (
              <p className='sub1'>{items}</p>
            ))}
          </div>
          <div className='Stay_Connected'>
            <h1 className='title'>Stay Connected</h1>

            {socialItems.map(items => (
              <div className='sub1'>
                <a href={items.url}>{items.text}</a>
              </div>
            ))}
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
