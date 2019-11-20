import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyBc0iuwbhFdGWtnvY_BRIGN5wyMinozCyo",
    authDomain: "net-ninja-marioplan-65ab6.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-65ab6.firebaseio.com",
    projectId: "net-ninja-marioplan-65ab6",
    storageBucket: "net-ninja-marioplan-65ab6.appspot.com",
    messagingSenderId: "1000828401150",
    appId: "1:1000828401150:web:4906d8036215ad0a777caf",
    measurementId: "G-W04XE252Y0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase;