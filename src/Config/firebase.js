import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB1ghIgaNmwJ2LP22iK09hqYvIonERGRi8",
    authDomain: "holidaynepal-cc4b8.firebaseapp.com",
    projectId: "holidaynepal-cc4b8",
    storageBucket: "holidaynepal-cc4b8.appspot.com",
    messagingSenderId: "163630224950",
    appId: "1:163630224950:web:615acb29d3eeaa66cfea97",
    measurementId: "G-54SVBFRPPT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
 

  export default firebase;