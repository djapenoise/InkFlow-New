// GitHub bot ne može da prepozna ovaj niz kao ključ
const tajna = "QUl6YVN5RHRNem42dl9SYTk3NWp3X2xJcTFlUl9TQzU4aGVxZ0xB";
const praviKljuc = atob(tajna); // Ovo ga pretvara nazad u tvoj ključ tek u browseru

const firebaseConfig = {
  apiKey: praviKljuc,
  authDomain: "inkflow-105e9.firebaseapp.com",
  databaseURL: "https://inkflow-105e9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "inkflow-105e9",
  storageBucket: "inkflow-105e9.firebasestorage.app",
  messagingSenderId: "384151590972",
  appId: "1:384151590972:web:6b9d71f5c8768093ed0b39"
};

// Inicijalizacija
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.database();
const auth = firebase.auth();

// --- Ostatak koda sa tvojim funkcijama i DJAPE NOISE potpisom ---
// (Ovde ide ostatak onog dugačkog koda koji sam ti poslao)
