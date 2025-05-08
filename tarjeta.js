document.addEventListener("DOMContentLoaded", () => {
  const nombreC = localStorage.getItem("nombreC");
  const fechaPed = localStorage.getItem("fechaPed");
  const pedido = JSON.parse(localStorage.getItem("pedido"));
  const total = localStorage.getItem("total");

  document.getElementById("nombreC").textContent = nombreC || "Sin nombre";
  document.getElementById("fechaPed").textContent = fechaPed || "Sin fecha";
  document.getElementById("pedidoResumen").textContent = pedido ? pedido.join(", ") : "Sin pedido";
  document.getElementById("total").textContent = total || "0";

  const formTarjeta = document.getElementById("formTarjeta");

  formTarjeta.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombreTitular = document.getElementById("nombreTitular").value.trim();
    const numTarjeta = document.getElementById("numTarjeta").value.trim();
    const validaHasta = document.getElementById("validaHasta").value;
    const cvv = document.getElementById("cvv").value.trim();

    if (!nombreTitular || !numTarjeta || !validaHasta || !cvv) {
      alert("Por favor llena todos los campos correctamente.");
      return;
    }

    alert("¡Pago realizado exitosamente!");
    window.location.href = "grax.html";
  });
});
