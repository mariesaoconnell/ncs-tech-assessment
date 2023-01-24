import React, {useState, useEffect} from 'react';
import { Container } from 'react-bootstrap';
import MyCarousel from './Carousel';

function GoogleSearch({veh}) {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const searchKeyWord = ` ${veh.years[0].year} ${veh.make.name} ${veh.model.name} `;
  const url = `https://www.googleapis.com/customsearch/v1?key=AIzaSyDpjsfHaqS5t0Td6chDDH9o1t9EzPujZAg&cx=15a94f841333f4e8b&q=${searchKeyWord}&searchType=image`;

  async function getImages(){
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setImages(data.items)
  }

  useEffect(()=>{
    getImages()
    console.log(images)
    setIsLoading(false)
  }, [])

  return (
    <>
      {isLoading ? (<h1>Loading...</h1>):(
        <Container>
          <MyCarousel images={images} />
        </Container>
      )}
    </>
  );
}

export default GoogleSearch;
