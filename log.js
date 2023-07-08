
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, sendEmailVerification, } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";


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

var login = document.getElementById("login")
login.addEventListener("click", () => {
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            sendEmailVerification(auth.currentUser)
                .then(() => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Good',
                        text: 'Verify Your Email',
                    })
                })
            email.value = ""
            password.value = ""
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Your Account is Not Register!',
            }).then(() => {
                window.location.assign("signup.html")
            })
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log("error=>" + errorMessage);

        });

})
