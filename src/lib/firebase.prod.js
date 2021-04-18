import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config= {
    apiKey: "AIzaSyDQWiXf9B7Qnxk97smqBuq97LDN7quihoU",
    authDomain: "netflixreplica.firebaseapp.com",
    projectId: "netflixreplica",
    storageBucket: "netflixreplica.appspot.com",
    messagingSenderId: "560339008880",
    appId: "1:560339008880:web:88f5ae0cdc9bc34ac563b5"
  };

const firebase = Firebase.initializeApp(config);

// console.log("seed");
//  seedDatabase(firebase);

export { firebase };