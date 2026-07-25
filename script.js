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

sendBtn.addEventListener("click", () => {

const text = input.value.trim();

if(text === ""){
    aiMessage.innerHTML = "⚠️ Please type a message.";
    return;
}

aiMessage.innerHTML = "🤖 You asked: " + text + "<br><br>AI feature is coming soon!";

input.value = "";

});