import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAdTp77xN4HfdmLYhgdxc70w8U26qLkTiY",
    authDomain: "food-app-80da4.firebaseapp.com",
    databaseURL: "https://food-app-80da4.firebaseio.com",
    projectId: "food-app-80da4",
    storageBucket: "food-app-80da4.appspot.com",
    messagingSenderId: "76604104953"
  };
  firebase.initializeApp(config);

  export default firebase;