import React, {useState, useEffect} from 'react';
import MyCarousel from './Carousel';

function GoogleSearch({vinInfo}) {
  const [images, setImages] = useState([]);


  // const searchKeyWord = ` ${vinInfo.years[0].year} ${vinInfo.make.name} ${vinInfo.model.name} `;
  const searchKeyWord = 'car';
  const url = `https://www.googleapis.com/customsearch/v1?key=AIzaSyDpjsfHaqS5t0Td6chDDH9o1t9EzPujZAg&cx=15a94f841333f4e8b&q=${searchKeyWord}&searchType=image`;

  async function getImages(){
    const response = await fetch(url);
    const data = await response.json();
    setImages(data.items)
  }

  useEffect(()=>{
    getImages()
    console.log(images)
  }, [])

  return (
    <div>
      <h1>Google Search Results</h1>
      <MyCarousel images={images} />
    </div>
  );
}

export default GoogleSearch;
