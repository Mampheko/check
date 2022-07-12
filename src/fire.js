import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBr7YaELd0ATb3dAiISegXVJ5M986JqYMk",
    authDomain: "checklist-4b5b4.firebaseapp.com",
    projectId: "checklist-4b5b4",
    storageBucket: "checklist-4b5b4.appspot.com",
    messagingSenderId: "161973224997",
    appId: "1:161973224997:web:6182eb399b786cc751e1cc"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;