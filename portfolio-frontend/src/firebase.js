import Firebase from 'firebase'
require('firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyBHIOOlcAy9juq1hQyq88zkp6NrMI2h8bA",
  authDomain: "portfolio-frontend-1a2d8.firebaseapp.com",
  databaseURL: "https://portfolio-frontend-1a2d8.firebaseio.com",
  projectId: "portfolio-frontend-1a2d8",
  storageBucket: "portfolio-frontend-1a2d8.appspot.com",
  messagingSenderId: "369860323835",
  appId: "1:369860323835:web:7bb04622334673b258035e",
  measurementId: "G-1JET9Z5F63"
}
var firebaseApp = Firebase.initializeApp(firebaseConfig)
export const db = firebaseApp.firestore();


