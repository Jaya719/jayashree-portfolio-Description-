document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");

    if (!themeToggle) return;

    // Save and apply previously selected theme
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

    function updateButton() {
        const isDark = document.body.classList.contains("dark-mode");

        themeToggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
        themeToggle.setAttribute(
            "aria-label",
            isDark ? "Switch to light mode" : "Switch to dark mode"
        );
    }

    updateButton();

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        const isDark = document.body.classList.contains("dark-mode");

        localStorage.setItem("theme", isDark ? "dark" : "light");

        updateButton();
    });
});