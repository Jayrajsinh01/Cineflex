// auth.js

// 1. FIREBASE CONFIGURATION 
const firebaseConfig = {
    apiKey: "AIzaSyDFTQeDmEZRiCs1iOjJroWMSzubDlBbsfM",
    authDomain: "netflix-clone-13817.firebaseapp.com",
    projectId: "netflix-clone-13817",
    storageBucket: "netflix-clone-13817.firebasestorage.app",
    messagingSenderId: "124332499182",
    appId: "1:124332499182:web:43fc4cc7adbd06fe59d3ff",
    measurementId: "G-GK3YL04ZT1"
  };
  
  // 2. Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // 3. Set up authentication listener
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      // User is signed in, show the main UI
      document.getElementById('auth-container').style.display = 'none';
      document.getElementById('main-content').style.display = 'block';
    } else {
      // User is signed out, show the login UI
      document.getElementById('auth-container').style.display = 'flex';
      document.getElementById('main-content').style.display = 'none';
    }
  });
  
  // 4. Handle Sign In
  document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert("Login failed: " + error.message);
      console.error(error);
    }
  });
  
  // 5. Handle Sign Up
  document.getElementById('signup-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      alert("Sign up successful! Please log in.");
      document.getElementById('login-form').style.display = 'block';
      document.getElementById('signup-form').style.display = 'none';
    } catch (error) {
      alert("Sign up failed: " + error.message);
      console.error(error);
    }
  });
  
  // 6. Handle Logout
  document.getElementById('logoutBtn').addEventListener('click', () => {
    firebase.auth().signOut();
  });
  
  // 7. Handle toggling between login and signup forms
  document.getElementById('toggle-signup').addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
  });

  

  