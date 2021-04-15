import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config= {
    apiKey: "AIzaSyBtqJTHuXE1iVApbWUUsh67TMQMuz8lkSU",
    authDomain: "netflixclone-d7c72.firebaseapp.com",
    projectId: "netflixclone-d7c72",
    storageBucket: "netflixclone-d7c72.appspot.com",
    messagingSenderId: "309237176607",
    appId: "1:309237176607:web:1f285fffa7e9801629782a",
    measurementId: "G-0Z2FG5BPZL"
  };
const firebase = Firebase.initializeApp(config);



export { firebase };