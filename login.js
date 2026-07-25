import { auth } from "./firebase.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {

e.preventDefault();

const email = form.querySelector('input[type="email"]').value;
const password = form.querySelector('input[type="password"]').value;

try{

if(window.location.pathname.includes("signup")){

await createUserWithEmailAndPassword(auth,email,password);

alert("Account Created Successfully!");

window.location.href="login.html";

}else{

await signInWithEmailAndPassword(auth,email,password);

alert("Login Successful!");

window.location.href="index.html";

}

}catch(error){

alert(error.message);

}

});