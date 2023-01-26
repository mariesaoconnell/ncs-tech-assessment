import React, {useState, useEffect} from 'react';
import { Container } from 'react-bootstrap';
import MyCarousel from './Carousel';

const images = [
	{
		kind: 'customsearch#result',
		title: 'Huracán Sterrato | Lamborghini.com',
		htmlTitle: 'Huracán Sterrato | <b>Lamborghini</b>.com',
		link: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/huracan/sterrato/over/huracan_sterrato_01_over_m.jpg',
		displayLink: 'www.lamborghini.com',
		snippet: 'Huracán Sterrato | Lamborghini.com',
		htmlSnippet: 'Huracán Sterrato | <b>Lamborghini</b>.com',
		mime: 'image/jpeg',
		fileFormat: 'image/jpeg',
		image: {
			contextLink:
				'https://www.lamborghini.com/en-en/models/huracan/huracan-sterrato',
			height: 600,
			width: 750,
			byteSize: 42962,
			thumbnailLink:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC12K-hIAhUVdONuvXi4b4Vnd-QOAhzFowhCnAzokYI1jw-n0_RA-xc-Q&s',
			thumbnailHeight: 113,
			thumbnailWidth: 141,
		},
	},
	{
		kind: 'customsearch#result',
		title: '2022 Lamborghini Countach LPI 800-4 vs 1990 Lamborghini Countach',
		htmlTitle:
			'2022 <b>Lamborghini</b> Countach LPI 800-4 vs 1990 <b>Lamborghini</b> Countach',
		link: 'https://hips.hearstapps.com/hmg-prod/images/1990-lambo-countach-2022-countach-006-1668635022.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*',
		displayLink: 'www.caranddriver.com',
		snippet: '2022 Lamborghini Countach LPI 800-4 vs 1990 Lamborghini Countach',
		htmlSnippet:
			'2022 <b>Lamborghini</b> Countach LPI 800-4 vs 1990 <b>Lamborghini</b> Countach',
		mime: 'image/jpeg',
		fileFormat: 'image/jpeg',
		image: {
			contextLink:
				'https://www.caranddriver.com/reviews/comparison-test/a41982738/2022-lamborghini-countach-lpi-800-4-1990-lamborghini-countach-25th-anniversary-edition-compared/',
			height: 900,
			width: 1200,
			byteSize: 303679,
			thumbnailLink:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvF8Vo2jFelPxbbCqozqoHoykbyYBGmIZLsGuBAF2xglHr7__6qvLlWg&s',
			thumbnailHeight: 113,
			thumbnailWidth: 150,
		},
	},
	{
		kind: 'customsearch#result',
		title: 'Automobili Lamborghini - Official Website | Lamborghini.com',
		htmlTitle:
			'Automobili <b>Lamborghini</b> - Official Website | <b>Lamborghini</b>.com',
		link: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/model_choose/2023/aventador_ultimae_m.png',
		displayLink: 'www.lamborghini.com',
		snippet: 'Automobili Lamborghini - Official Website | Lamborghini.com',
		htmlSnippet:
			'Automobili <b>Lamborghini</b> - Official Website | <b>Lamborghini</b>.com',
		mime: 'image/png',
		fileFormat: 'image/png',
		image: {
			contextLink: 'https://www.lamborghini.com/en-en',
			height: 600,
			width: 1080,
			byteSize: 300144,
			thumbnailLink:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzhdBHN1W43XslKp2qdocZlaIxM-PLkjGFTzqxq-G-N9dR0iyRDUb27Q&s',
			thumbnailHeight: 83,
			thumbnailWidth: 150,
		},
	},
	{
		kind: 'customsearch#result',
		title: 'Lamborghini Urus - Wikipedia',
		htmlTitle: '<b>Lamborghini</b> Urus - Wikipedia',
		link: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Lamborghini_Urus_IMG_0003.jpg',
		displayLink: 'en.wikipedia.org',
		snippet: 'Lamborghini Urus - Wikipedia',
		htmlSnippet: '<b>Lamborghini</b> Urus - Wikipedia',
		mime: 'image/jpeg',
		fileFormat: 'image/jpeg',
		image: {
			contextLink: 'https://en.wikipedia.org/wiki/Lamborghini_Urus',
			height: 2623,
			width: 4890,
			byteSize: 7884188,
			thumbnailLink:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7MH3ipNsAKa4icX--xJrwFvVDUmbH31PtJmQn6eKklydU37OHym-x7w&s',
			thumbnailHeight: 80,
			thumbnailWidth: 150,
		},
	},
	{
		kind: 'customsearch#result',
		title: 'Lamborghini Models',
		htmlTitle: '<b>Lamborghini</b> Models',
		link: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/hero-banner/2022/11_30_sterrato/gate_models_hero_01.jpg',
		displayLink: 'www.lamborghini.com',
		snippet: 'Lamborghini Models',
		htmlSnippet: '<b>Lamborghini</b> Models',
		mime: 'image/jpeg',
		fileFormat: 'image/jpeg',
		image: {
			contextLink: 'https://www.lamborghini.com/en-en/models',
			height: 1080,
			width: 1920,
			byteSize: 155274,
			thumbnailLink:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ1HhSWXzAs-YwHqfzUIw4Wa7vDCKkoLz1CuSukn8EtRtQv8UtbSHK2A&s',
			thumbnailHeight: 84,
			thumbnailWidth: 150,
		},
	},
	{
		kind: 'customsearch#result',
		title: 'Lamborghini - Home | Facebook',
		htmlTitle: '<b>Lamborghini</b> - Home | Facebook',
		link: 'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=9163976783627860',
		displayLink: 'www.facebook.com',
		snippet: 'Lamborghini - Home | Facebook',
		htmlSnippet: '<b>Lamborghini</b> - Home | Facebook',
		mime: 'image/',
		fileFormat: 'image/',
		image: {
			contextLink: 'https://www.facebook.com/Lamborghini/',
			height: 850,
			width: 1513,
			byteSize: 516906,
			thumbnailLink:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDyMpo9PEPWCNeK_l2cqG_vS-kGMXMNRqH1Ttj9kNNiO9nPZznwi0ngw&s',
			thumbnailHeight: 84,
			thumbnailWidth: 150,
		},
	},
	{
		kind: 'customsearch#result',
		title: 'Lamborghini Models',
		htmlTitle: '<b>Lamborghini</b> Models',
		link: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/hero-banner/2022/11_30_sterrato/gate_models_og_01.jpg',
		displayLink: 'www.lamborghini.com',
		snippet: 'Lamborghini Models',
		htmlSnippet: '<b>Lamborghini</b> Models',
		mime: 'image/jpeg',
		fileFormat: 'image/jpeg',
		image: {
			contextLink: 'https://www.lamborghini.com/en-en/models',
			height: 1080,
			width: 1920,
			byteSize: 104410,
			thumbnailLink:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaTu9RMMzKW6eNwaBdTsFcct-yP4KNbIvZas4hM87NrhpiN7DQSwVoauY&s',
			thumbnailHeight: 84,
			thumbnailWidth: 150,
		},
	},
	{
		kind: 'customsearch#result',
		title: 'Lamborghini Veneno - Wikipedia',
		htmlTitle: '<b>Lamborghini</b> Veneno - Wikipedia',
		link: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Geneva_MotorShow_2013_-_Lamborghini_Veneno_1.jpg',
		displayLink: 'en.wikipedia.org',
		snippet: 'Lamborghini Veneno - Wikipedia',
		htmlSnippet: '<b>Lamborghini</b> Veneno - Wikipedia',
		mime: 'image/jpeg',
		fileFormat: 'image/jpeg',
		image: {
			contextLink: 'https://en.wikipedia.org/wiki/Lamborghini_Veneno',
			height: 3128,
			width: 4723,
			byteSize: 14712033,
			thumbnailLink:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQvjtK5XJtQXp7Lt-hFF3vqRlrh2l633BJFaQ6L-hUNtFjQ0NykjLfRA&s',
			thumbnailHeight: 99,
			thumbnailWidth: 150,
		},
	},
	{
		kind: 'customsearch#result',
		title: 'Lamborghini SIÁN FKP 37 | Lamborghini.com',
		htmlTitle: '<b>Lamborghini</b> SIÁN FKP 37 | <b>Lamborghini</b>.com',
		link: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/few_off/sian-fkp-37/2022/06_20/gallery/sian_05_m.jpg',
		displayLink: 'www.lamborghini.com',
		snippet: 'Lamborghini SIÁN FKP 37 | Lamborghini.com',
		htmlSnippet: '<b>Lamborghini</b> SIÁN FKP 37 | <b>Lamborghini</b>.com',
		mime: 'image/jpeg',
		fileFormat: 'image/jpeg',
		image: {
			contextLink:
				'https://www.lamborghini.com/en-en/models/limited-series/sian-fkp-37',
			height: 900,
			width: 1920,
			byteSize: 391909,
			thumbnailLink:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEmh0T8Q0rubNxr23al2lqNPUULsNG-M5NRs_M4CdRlpFMI6SCDV_nHhY&s',
			thumbnailHeight: 70,
			thumbnailWidth: 150,
		},
	},
	{
		kind: 'customsearch#result',
		title: '2021 Lamborghini Sián: What We Know So Far',
		htmlTitle: '2021 <b>Lamborghini</b> Sián: What We Know So Far',
		link: 'https://hips.hearstapps.com/hmg-prod/images/2021-lamborghini-sian-121-1614969494.jpg?crop=0.667xw:0.500xh;0.276xw,0.375xh&resize=1200:*',
		displayLink: 'www.caranddriver.com',
		snippet: '2021-lamborghini-sian-121- ...',
		htmlSnippet: '2021-<b>lamborghini</b>-sian-121- ...',
		mime: 'image/jpeg',
		fileFormat: 'image/jpeg',
		image: {
			contextLink: 'https://www.caranddriver.com/lamborghini/sian',
			height: 599,
			width: 1200,
			byteSize: 90910,
			thumbnailLink:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4lLTlHmXxob-2Aos2Tx3I7hTaXSsudFe3WBhZohv6kDGKxWvXEVhYOzE&s',
			thumbnailHeight: 75,
			thumbnailWidth: 150,
		},
	},
];


function GoogleSearch({veh}) {
  // const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchKeyWord = ` ${veh.years[0].year} ${veh.make.name} ${veh.model.name} `;
  const url = `https://www.googleapis.com/customsearch/v1?key=AIzaSyDpjsfHaqS5t0Td6chDDH9o1t9EzPujZAg&cx=15a94f841333f4e8b&q=${searchKeyWord}&searchType=image`;

  async function getImages(){
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    // setImages(data.items)
  }

  useEffect(()=>{
    // getImages()
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
