document.addEventListener("DOMContentLoaded", () => {
  const volver = document.getElementById("volver");
  volver.addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "index.html";
  });
});

