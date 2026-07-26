import { auth, db } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { collection, getDocs, query, orderBy, where } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const historyList = document.getElementById("historyList");

async function loadHistory(user) {
  historyList.innerHTML = "";

  const q = query(
  collection(db, "chats"),
  where("uid", "==", auth.currentUser.uid),
  orderBy("createdAt", "desc")
);
  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    historyList.innerHTML = "<p>No chat history yet.</p>";
    return;
  }

  snapshot.forEach((doc) => {
    const data = doc.data();

    const p = document.createElement("p");
    p.innerText = "💬 " + data.message;

    historyList.appendChild(p);
  });
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    loadHistory(user);
  } else {
    historyList.innerHTML = "<p>Please login first.</p>";
  }
});