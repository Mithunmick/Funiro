import React from 'react';
import img1 from '../../assets/images/Rectangle 36.svg';
import img2 from '../../assets/images/Rectangle 37.svg';
import img3 from '../../assets/images/Rectangle 38.svg';
import img4 from '../../assets/images/Rectangle 39.svg';
import img5 from '../../assets/images/Rectangle 40.svg';
import img6 from '../../assets/images/Rectangle 41.svg';
import img7 from '../../assets/images/Rectangle 43.svg';
import img8 from '../../assets/images/Rectangle 44.svg';
import img9 from '../../assets/images/Rectangle 45.svg';
import './grid.css';

const Grid = () => {
  return (
    <>
      <div className='header'>
        <p>Share your setup with</p>
        <h1>#FuniroFurniture</h1>
      </div>
      <div className='gallery'>
        <div className='gallery_item1'>
          <img src={img1} className='gallery_img' alt='image1' />
        </div>

        <div className='gallery_item2'>
          <img src={img2} className='gallery_img' alt='image1' />
        </div>

        <div className='gallery_item3'>
          <img src={img3} className='gallery_img' alt='image1' />
        </div>

        <div className='gallery_item4'>
          <img src={img4} className='gallery_img' alt='image1' />
        </div>

        <div className='gallery_item5'>
          <img src={img5} className='gallery_img' alt='image1' />
        </div>

        <div className='gallery_item6'>
          <img src={img6} className='gallery_img' alt='image1' />
        </div>

        <div className='gallery_item7'>
          <img src={img7} className='gallery_img' alt='image1' />
        </div>

        <div className='gallery_item8'>
          <img src={img8} className='gallery_img' alt='image1' />
        </div>
        <div className='gallery_item9'>
          <img src={img9} className='gallery_img' alt='image1' />
        </div>
      </div>
    </>
  );
};

export default Grid;
