import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCYYc0YOXoHYn5OhUcC3mjxO58Ag9jHrHA",
  authDomain: "cesar-react-mitienda.firebaseapp.com",
  projectId: "cesar-react-mitienda",
  storageBucket: "cesar-react-mitienda.appspot.com",
  messagingSenderId: "274428762853",
  appId: "1:274428762853:web:f649c8981aba723a29120c"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

