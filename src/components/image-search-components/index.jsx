import React, {useState, useEffect} from 'react';
import { Container, Spinner } from 'react-bootstrap';
import MyCarousel from './Carousel';

function GoogleSearch({veh}) {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

	// KEYWORD OR YMM OF THE VEHICLE WHICH WAS FOUND FROM THE VIN INPUT FROM THE USER
  const searchKeyWord = ` ${veh.years[0].year} ${veh.make.name} ${veh.model.name} `;

	// API URL + 'searchKeyword'
  const url = `https://www.googleapis.com/customsearch/v1?key=AIzaSyDpjsfHaqS5t0Td6chDDH9o1t9EzPujZAg&cx=15a94f841333f4e8b&q=${searchKeyWord}&searchType=image`;


	// ASYNCHRONOUS FUNCTION WHICH MAKES A GET REQUEST WITH THE URL ABOVE, SEARCHING GOOGLE'S IMAGES FOR THE KEYWORD DERIVED FROM THE VIN THE USER INPUT. ONCE RESPONSE IS RECEIVED, THE IMAGES STATE IS SET, WHICH ALLOWS THE CAROUSEL TO BE RENDERED WITH THE IMAGES FROM THE FETCH
  async function getImages(){
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setImages(data.items)
  }

	// WHEN THE GoogleSearch COMPONENT MOUNTS, THE USE EFFECT CAUSES THE 'getImages' function to run.
  useEffect(()=>{
    getImages()
  }, [searchKeyWord])

  useEffect(()=>{
    if(images){
      setIsLoading(false)
    }
  }, [images])
  
  return (
		<>
			{isLoading ? (
				<Spinner
					animation='border'
					variant='light'
					role='status'
					style={{
						margin: '-10px 0',
						position: 'absolute',
						top: '50%',
						left: '50%',
					}}>
					<span className='visually-hidden'>Loading...</span>
				</Spinner>
			) : (
				<Container>
					<MyCarousel images={images} />
				</Container>
			)}
		</>
	);
}

export default GoogleSearch;
