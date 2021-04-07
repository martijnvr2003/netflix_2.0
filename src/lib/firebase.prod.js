import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config= {
    apiKey: "AIzaSyCPX6RTlHGIJw9n0GSJmOebjIPCRJ0Lgt4",
    authDomain: "netflix-5a508.firebaseapp.com",
    projectId: "netflix-5a508",
    storageBucket: "netflix-5a508.appspot.com",
    messagingSenderId: "838007168325",
    appId: "1:838007168325:web:8a75aeab7e11898641f22c",
    measurementId: "G-BX9Y7W86D7"
};

const firebase = Firebase.initializeApp(config);



export { firebase };