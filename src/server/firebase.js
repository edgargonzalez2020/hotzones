const firebase = require('firebase');
const firebaseConfig = {
    apiKey: "AIzaSyDUGnc3MrzNeiBN3DmXP4j5cbpzQrVC0aU",
    authDomain: "hot-0z.firebaseapp.com",
    databaseURL: "https://hot-0z.firebaseio.com",
    projectId: "hot-0z",
    storageBucket: "hot-0z.appspot.com",
    messagingSenderId: "47128157209",
    appId: "1:47128157209:web:a8d35cbc54e5070bfe1e88"
  };
firebase.initializeApp(firebaseConfig);
module.exports = firebase;