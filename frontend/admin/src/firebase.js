import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBqrha_lCanEJV-kboZvHKZabSYeb1lbp0",
  authDomain: "testproject-7cda8.firebaseapp.com",
  databaseURL: "https://testproject-7cda8-default-rtdb.firebaseio.com",
  projectId: "testproject-7cda8",
  storageBucket: "testproject-7cda8.appspot.com",
  messagingSenderId: "509956120550",
  appId: "1:509956120550:web:2d952228431eacda320027"
};
  
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;