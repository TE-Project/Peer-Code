
import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA9iMztGPYbQf141Mo9Z0LnhRbjsU9soWI",
  authDomain: "peer-code.firebaseapp.com",
  databaseURL: "https://peer-code.firebaseio.com",
  projectId: "peer-code",
  storageBucket: "peer-code.appspot.com",
  messagingSenderId: "224806049851",
  appId: "1:224806049851:web:8dfbad697a568f3ebc641e",
  measurementId: "G-PQV3R91KJF"
};

    firebase.initializeApp(config);
    firebase.firestore().settings({timestampsInSnapshots:true});

export default firebase