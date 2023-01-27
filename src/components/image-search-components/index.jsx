import React, {useState, useEffect} from 'react';
import { Container, Spinner } from 'react-bootstrap';
import MyCarousel from './Carousel';
import { useNavigate } from 'react-router-dom';

function GoogleSearch({veh}) {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	// KEYWORD OR YMM OF THE VEHICLE WHICH WAS FOUND FROM THE VIN INPUT FROM THE USER
  const searchKeyWord = ` ${veh.years[0].year} ${veh.make.name} ${veh.model.name} `;

	// API URL + 'searchKeyword'
  const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_API_KEY}&cx=${process.env.REACT_APP_PROJECT_ID}&q=${searchKeyWord}&searchType=image`;


	// ASYNCHRONOUS FUNCTION WHICH MAKES A GET REQUEST WITH THE URL ABOVE, SEARCHING GOOGLE'S IMAGES FOR THE KEYWORD DERIVED FROM THE VIN THE USER INPUT. ONCE RESPONSE IS RECEIVED, THE IMAGES STATE IS SET, WHICH ALLOWS THE CAROUSEL TO BE RENDERED WITH THE IMAGES FROM THE FETCH
  async function getImages(){
    setIsLoading(true);
    const response = await fetch(url);
		console.log(response)
    const data = await response.json();
		console.log(data)
		if(data.status === "BAD_REQUEST" || data.status === "NOT_FOUND" || response.status === 429){
			if(response.status === 429){
				console.log('Quota exceeded for quota metric');
			}
			else{
				console.log('There was an issue')
			}
			navigate('/error')
		}
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
				<Container fluid>
					<MyCarousel images={images} />
				</Container>
			)}
		</>
	);
}

export default GoogleSearch;
