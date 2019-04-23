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

export function firebaseListener(func) {
  firebase.auth().onAuthStateChanged(
    function (user) {
      if (user) {
        console.log("User log in success", user), func(true, user);
      } else {
        console.log("User log in failed", user);
        func(false)
      }
    },
    function (error) {
      console.log(error)
    })
}

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;