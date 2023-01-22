// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDpjsfHaqS5t0Td6chDDH9o1t9EzPujZAg',
	authDomain: 'vin-finder.firebaseapp.com',
	projectId: 'vin-finder',
	storageBucket: 'vin-finder.appspot.com',
	messagingSenderId: '716943741505',
	appId: '1:716943741505:web:2e4b42995096ebb76f6cc0',
	measurementId: 'G-93MCPKN1X4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
