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