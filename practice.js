
//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyA3MuPW6SNUO0TdluGLv9UH9kha57Mbw3w",
    authDomain: "kwitter-practice-41876.firebaseapp.com",
    databaseURL: "https://kwitter-practice-41876-default-rtdb.firebaseio.com",
    projectId: "kwitter-practice-41876",
    storageBucket: "kwitter-practice-41876.appspot.com",
    messagingSenderId: "846664739844",
    appId: "1:846664739844:web:3bb686e594171ff85e1951",
    measurementId: "G-JSKXTDLVBG"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : " adding user"
    });
}