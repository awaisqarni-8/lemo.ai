import { auth } from "./firebase.js";
import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import { signOut } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
document.querySelector("button").addEventListener("click", function () {
  alert("Welcome to Lemo.ai!");
});
window.addEventListener("scroll", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});
const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.innerHTML = "☀️";
    } else {
        themeBtn.innerHTML = "🌙";
    }
});
window.addEventListener("load",function(){

setTimeout(function(){

document.getElementById("loader").style.display="none";

},1500);

});
const sendBtn = document.querySelector(".chat-box button");
const input = document.querySelector(".chat-box input");
const aiMessage = document.querySelector(".ai-message");

sendBtn.addEventListener("click", async () => { 

const text = input.value.trim();

if(text === ""){
    aiMessage.innerHTML = "⚠️ Please type a message.";
    return;
}

aiMessage.innerHTML = "🤖 Thinking...";
await askAI();

input.value = "";

});
async function askAI() {
  const input = document.querySelector(".chat-box input");
  const question = input.value;
await addDoc(collection(db, "chats"), {
  message: question,
  createdAt: serverTimestamp()
});

  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: question
    })
  });

  const data = await response.json();

  const reply =
    data.candidates?.[0]?.content?.parts?.[0]?.text ||
    "Sorry, I couldn't answer.";

  document.querySelector(".ai-message").innerText = reply;
}
const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", async () => {
    await signOut(auth);
    alert("Logged Out Successfully!");
    window.location.href = "login.html";
});

const userInfo = document.getElementById("userInfo");

onAuthStateChanged(auth, (user) => {
  if (user) {
    userInfo.innerHTML = "👤 " + user.email;
  }
});