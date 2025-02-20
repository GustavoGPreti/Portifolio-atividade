document.querySelectorAll(".value").forEach(button => {
    button.addEventListener("click", function () {
        document.querySelectorAll(".value").forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
    });
});
let temaAtual;
const checkbox = document.querySelector(".checkbox");

checkbox.addEventListener("change", () => {
    temaAtual = document.body.classList.contains("dark") ? "dark" : "light";
    document.body.classList.toggle("dark");
});

document.addEventListener("DOMContentLoaded", () => {
    if (checkbox.checked) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.add("light");
    }

    temaAtual = document.body.classList.contains("dark") ? "dark" : "light";
});