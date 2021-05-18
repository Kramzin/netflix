import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import { seedDatabase } from '../seed';


const config = {    
    apiKey: "AIzaSyDJr0FAmSyhpOX1wFzYfTLpzQ-Fc4WHmGI",
    authDomain: "netflix-1edd0.firebaseapp.com",
    projectId: "netflix-1edd0",
    storageBucket: "netflix-1edd0.appspot.com",
    messagingSenderId: "677215578049",
    appId: "1:677215578049:web:34e284116c4461b3aaf140",
    measurementId: "G-SEZG5CYVKR"};

const firebase = Firebase.initializeApp(config);

export { firebase };