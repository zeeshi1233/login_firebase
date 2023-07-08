import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBmx4rIxOPi0zgNFTMQ80v21dvntSEmmVE",
    authDomain: "studentrecord-b7471.firebaseapp.com",
    databaseURL: "https://studentrecord-b7471-default-rtdb.firebaseio.com",
    projectId: "studentrecord-b7471",
    storageBucket: "studentrecord-b7471.appspot.com",
    messagingSenderId: "332868527063",
    appId: "1:332868527063:web:c45a6f848a32e21b0fe192",
    measurementId: "G-C7LPQXXQ0M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
var signup = document.getElementById("signup")
signup.addEventListener("click", () => {
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            Swal.fire({
                icon: 'success',
                title: 'Good',
                text: 'Account Registered Successfuly!',
            }).then(() => {
                window.location.assign("login.html")
            })


            email.value = ""
            password.value = ""
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error=>" + errorMessage);

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: errorMessage,
            })


        });
})


