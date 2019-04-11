import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBI5UN85q_IUTE3tqN4SHdhqL9yfRHPIOw",
  authDomain: "vue-shopv2.firebaseapp.com",
  databaseURL: "https://vue-shopv2.firebaseio.com",
  projectId: "vue-shopv2",
  storageBucket: "vue-shopv2.appspot.com",
  messagingSenderId: "963921891580"
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
