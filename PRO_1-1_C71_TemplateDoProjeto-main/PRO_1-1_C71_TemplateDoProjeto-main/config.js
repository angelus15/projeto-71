import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
  apiKey: "AIzaSyBLKQsLetRBY3tWI68tZYh5X8RaG7wmCrE",
  authDomain: "bicicleta-71077.firebaseapp.com",
  databaseURL: "https://bicicleta-71077-default-rtdb.firebaseio.com",
  projectId: "bicicleta-71077",
  storageBucket: "bicicleta-71077.appspot.com",
  messagingSenderId: "197446927207",
  appId: "1:197446927207:web:0255b74c45a3094cbae5c2"

};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
