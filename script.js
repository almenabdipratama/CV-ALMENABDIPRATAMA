function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById("btn-theme");

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        btn.textContent = "☀️ Light Mode";
    } else {
        btn.textContent = "🌙 Dark Mode";
    }
}