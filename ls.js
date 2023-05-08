var firebaseConfig = {
    apiKey: "AIzaSyAQHxPHFjYYQFfbG36kimSoNm6nYAbIqlc",
    authDomain: "treasure-hunt-81db2.firebaseapp.com",
    projectId: "treasure-hunt-81db2",
    storageBucket: "treasure-hunt-81db2.appspot.com",
    messagingSenderId: "349658289371",
    appId: "1:349658289371:web:be930516221db484ea68fe",
    measurementId: "G-YNXDG2H2WK"
  };
  firebase.initializeApp(firebaseConfig);
  function login() {
    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        if (userCredential.user.emailVerified) {
          // Redirect to next page on successful login
          window.location.href = "index.html";
        } else {
          alert("Please verify your email address to login.");
        }
      })
      .catch((error) => {
        var errorMessage = error.message;
        alert(errorMessage);
      });
  }

  function signup() {
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Send verification email
        userCredential.user.sendEmailVerification().then(function() {
          alert("Verification email sent to " + userCredential.user.email + ". Please check your email to verify your account.");
        }).catch(function(error) {
          alert(error.message);
        });
      })
      .catch((error) => {
        var errorMessage = error.message;
        alert(errorMessage);
      });
  }