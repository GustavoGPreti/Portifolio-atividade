document.querySelectorAll(".value").forEach(button => {
    button.addEventListener("click", function() {
        document.querySelectorAll(".value").forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
    });
});