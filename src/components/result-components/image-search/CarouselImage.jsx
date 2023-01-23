import React from 'react';
import { Carousel } from 'react-bootstrap';

function CarouselImage({image}) {
  return (
    <Carousel.Item>
      <img
      alt={image.title}
      className='d-block w-100'
      src={image.link}
      />
    </Carousel.Item>
  );
}

export default CarouselImage;
