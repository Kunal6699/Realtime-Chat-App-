import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: 'AIzaSyB93o_3d2w6H3KhtG5Zx3ZnN2PczXShMKA',
  authDomain: 'react-chat-app-2fdcc.firebaseapp.com',
  databaseURL: 'https://react-chat-app-2fdcc.firebaseio.com',
  projectId: 'react-chat-app-2fdcc',
  storageBucket: 'react-chat-app-2fdcc.appspot.com',
  messagingSenderId: '108356919177',
  appId: '1:108356919177:web:fb7730cef9ce90e63ccb58',
  measurementId: 'G-6PFTP0YW83',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
