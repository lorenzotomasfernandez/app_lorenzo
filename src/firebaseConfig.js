import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCIIgou3Gb44oI1ktOgr35Y7XFSyk4n2u8",
  authDomain: "ecommerce-react-lftech.firebaseapp.com",
  projectId: "ecommerce-react-lftech",
  storageBucket: "ecommerce-react-lftech.appspot.com",
  messagingSenderId: "244085795162",
  appId: "1:244085795162:web:080fa5929834d1a36deb63"
};

const app = initializeApp(firebaseConfig);
export const dbFirebase = getFirestore(app)