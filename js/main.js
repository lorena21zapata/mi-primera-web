
// ========================================
// 1. LIGHT / DARK MODE
// ========================================

// Seleccionamos los elementos HTML
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const themeLabel = document.getElementById("theme-label");

// Obtenemos el tema guardado
const savedTheme = localStorage.getItem("portfolio-theme");

// Aplicamos el tema guardado.
// Si no existe una preferencia, usamos dark mode.
if (savedTheme === "light") {
  document.documentElement.classList.add("light");
}

// Función para actualizar el botón
function updateThemeButton() {
  const isLightMode = document.documentElement.classList.contains("light");

  if (isLightMode) {
    themeIcon.textContent = "☾";
    themeLabel.textContent = "Dark mode";
    themeToggle.setAttribute("aria-label", "Switch to dark mode");
    themeToggle.setAttribute("aria-pressed", "true");
  } else {
    themeIcon.textContent = "☀";
    themeLabel.textContent = "Light mode";
    themeToggle.setAttribute("aria-label", "Switch to light mode");
    themeToggle.setAttribute("aria-pressed", "false");
  }
}

// Evento: escucha el clic del usuario
themeToggle.addEventListener("click", () => {

  // Cambiamos la clase light del elemento HTML
  document.documentElement.classList.toggle("light");

  // Comprobamos el tema actual
  const isLightMode = document.documentElement.classList.contains("light");

  // Guardamos la preferencia
  localStorage.setItem(
    "portfolio-theme",
    isLightMode ? "light" : "dark"
  );

  // Actualizamos el botón
  updateThemeButton();
});

// Inicializamos el botón al cargar la página
updateThemeButton();
