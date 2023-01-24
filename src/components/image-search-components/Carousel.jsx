import React from 'react';
import { Carousel, Container, Image } from 'react-bootstrap';

function MyCarousel({images}) {
  return (
		<Container fluid keyboard='true' touch='true'>
			<Carousel className='carousel-fade'>
				{images.map((image) => {
					return (
						<Carousel.Item style={{ overflow: 'hidden' }}>
							<Image
								alt={image.title}
								className='d-block rounded-5 fluid'
								src={image.link}
								style={{height: "500px", width:"700px", objectFit:"cover"}}
							/>
						</Carousel.Item>
					);
				})}
			</Carousel>
		</Container>
	);
}

export default MyCarousel;
