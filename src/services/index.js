import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
export const auth = firebase.auth;
export const db = firebase.database;

const firebaseConfig = {
	apiKey: 'AIzaSyBoK0sXaFDM8TV03oxsNFjzPg0X5RY43yw',
	authDomain: 'wolf-2fb66.firebaseapp.com',
	databaseURL: 'https://wolf-2fb66.firebaseio.com',
	projectId: 'wolf-2fb66',
	storageBucket: 'wolf-2fb66.appspot.com',
	messagingSenderId: '184088138334',
	appId: '1:184088138334:web:e35359fe9a95fd159e9acf',
	measurementId: 'G-QTEHSJ27X0',
};

firebase.initializeApp(firebaseConfig);

auth().useDeviceLanguage();
