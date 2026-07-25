const forms = document.querySelectorAll("form");

forms.forEach(form => {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        alert("Welcome to Lemo.ai! This feature will be connected to the database soon.");

        window.location.href = "index.html";
    });
});