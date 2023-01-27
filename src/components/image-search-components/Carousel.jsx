import React from 'react';
import { Carousel, Container, Image } from 'react-bootstrap';
import '../../assets/styles/static-styles/Carousel.css';

function MyCarousel({images}) {
  return (
		<Container fluid keyboard='true' touch='true'>
			<Carousel className='carousel-fade'>
				{images.map((image) => {
					return (
						<Carousel.Item className='carousel-styling'>
							<Image
								alt={image.title}
								className='d-block fluid image-styling'
								src={image.link}
							/>
						</Carousel.Item>
					);
				})}
			</Carousel>
		</Container>
	);
}

export default MyCarousel;
