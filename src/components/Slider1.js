import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import Place from '../components/Places';
import { productData1, responsive1 } from '../components/Data1.js';

import '../styles/Slider.css';
import '../styles/Slide.css';

const Slider1 = () => {
  const product = productData1.map((item) => (
    <Link to={`/places/${item.id}`} key={item.id} style={{ textDecoration: 'none' }}>
      <Place
        id={item.id}
        title={item.name}
        price={item.price}
        description={item.description}
        coverPhoto={item.imageurl}
      />
    </Link>
  ));

  return (
    <div className="container1">
      <div className="title_wrapper">
        <h1>Hottest picks</h1>
      </div>
      <div>
        <Carousel showDots={true} responsive={responsive1}>
          {product}
        </Carousel>
      </div>
    </div>
  );
};

export default Slider1;
