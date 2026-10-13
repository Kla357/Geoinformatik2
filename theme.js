const themeToggle = document.getElementById("theme-toggle");

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", isDark ? "Zum Hellmodus wechseln" : "Zum Dunkelmodus wechseln");
}

const savedTheme = localStorage.getItem("klara-theme");
applyTheme(savedTheme === "dark" ? "dark" : "light");

themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("klara-theme", nextTheme);
  applyTheme(nextTheme);
});
