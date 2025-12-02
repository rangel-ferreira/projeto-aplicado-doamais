import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// --- ÁREA DE COLAGEM ---
// Apague as linhas abaixo e cole a const firebaseConfig do site aqui:
const firebaseConfig = {
  apiKey: "AIzaSyC6srzE3Dlqj2fV233VyfLaTSRtXxl5j4o",
  authDomain: "doamais-n708.firebaseapp.com",
  projectId: "doamais-n708",
  storageBucket: "doamais-n708.firebasestorage.app",
  messagingSenderId: "93116220876",
  appId: "1:93116220876:web:8e8a01f892f9ebe9484969"
};
// -----------------------

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };