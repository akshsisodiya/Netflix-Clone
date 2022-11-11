import {initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB7lpfdeyNyqrlvgb54C6oVgcQ1gzL38OY",
    authDomain: "netflix-clone-fa114.firebaseapp.com",
    projectId: "netflix-clone-fa114",
    storageBucket: "netflix-clone-fa114.appspot.com",
    messagingSenderId: "86759455139",
    appId: "1:86759455139:web:9a1d90d5c8c47d3602c216",
    measurementId: "G-7623W57D8P"
  };

  const firebaseApp = initializeApp(firebaseConfig)
  const db = getFirestore(firebaseApp)
  

  export default db
  export const auth = getAuth(firebaseApp);