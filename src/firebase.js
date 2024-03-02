// Import the initializeApp function from the firebase/app module
import { initializeApp } from "firebase/app";

// Import your firebaseConfig from the firebase-config.js file
import { firebaseConfig } from "./firebase-config.js";

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Export the firebaseApp
export default firebaseApp;
