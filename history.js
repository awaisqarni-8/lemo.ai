import { auth, db } from "./firebase.js";
import { collection, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const historyList = document.getElementById("historyList");

async function loadHistory() {
  historyList.innerHTML = "";

  const q = query(collection(db, "chats"), orderBy("createdAt", "desc"));
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

loadHistory();