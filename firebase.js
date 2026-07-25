import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCBZNwEnzoaMiHlC9k62ni2sn3WrR4uNd0",
  authDomain: "lemoai.firebaseapp.com",
  projectId: "lemoai",
  storageBucket: "lemoai.firebasestorage.app",
  messagingSenderId: "779033931600",
  appId: "1:779033931600:web:5069edb3f04ca4881a4655"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);