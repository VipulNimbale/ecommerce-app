// // src/firebase.js
// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_PROJECT.firebaseapp.com",
//   projectId: "YOUR_PROJECT_ID",
//   appId: "YOUR_APP_ID",
//   // Add rest of config from Firebase console
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export default app;


// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
//   apiKey: "AIzaSyBMvm1tHD6iAiqfOMSSDCrEbygI9mx3SBI",
//   authDomain: "ecom-6eca0.firebaseapp.com",
//   projectId: "ecom-6eca0",
//   storageBucket: "ecom-6eca0.firebasestorage.app",
//   messagingSenderId: "666165307462",
//   appId: "1:666165307462:web:25e4cc67c1e61b0b928247",
//   measurementId: "G-4N8B5D8K00"
  apiKey: "AIzaSyBMvm1tHD6iAiqfOMSSDCrEbygI9mx3SBI",
  authDomain: "ecom-6eca0.firebaseapp.com",
  projectId: "ecom-6eca0",
  storageBucket: "ecom-6eca0.appspot.com",
  messagingSenderId: "666165307462",
  appId: "1:666165307462:web:25e4cc67c1e61b0b928247",
  measurementId: "G-4N8B5D8K00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export authentication
export const auth = getAuth(app);
export default app;

