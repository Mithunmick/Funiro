import React from 'react';
import logo from '../../assets/images/Logo.png';
import './Nav.css';
import { Icon } from '@iconify/react';

const Nav = () => {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar_container'>
          <div className='flex_item'>
            <div>
              <img className='navbar_img' src={logo} alt='logo' />
            </div>
            <div className='navbar_list '>
              <li> Product</li>
              <li> Rooms</li>
              <li> Inspirations</li>
            </div>
            <div className='navbar_search'>
              <div className='s_icon'>
                <Icon className='icons' icon='carbon:search' />
              </div>
              <input
                className='search_input'
                placeholder='Search for minimalist chair'
                type='search'
              />
            </div>
          </div>

          <div className='navbar_icons'>
            <Icon className='icons' icon='carbon:location-heart-filled' />
            <Icon className='icons' icon='carbon:shopping-cart' />
            <Icon className='icons' icon='carbon:user-avatar-filled' />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
