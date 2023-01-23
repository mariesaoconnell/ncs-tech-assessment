import React from 'react';
import { Carousel } from 'react-bootstrap';
import CarouselImage from './CarouselImage';

function MyCarousel({images}) {
  return (
    <Carousel>
      {images.map((image)=>{
        return <CarouselImage image={image} />
      })}
    </Carousel>
  );
}

export default MyCarousel;
