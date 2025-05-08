document.addEventListener("DOMContentLoaded", () => {
  const nombreC = localStorage.getItem("nombreC");
  const fechaPed = localStorage.getItem("fechaPed");
  const pedido = JSON.parse(localStorage.getItem("pedido"));

  document.getElementById("nombreC").textContent = nombreC || "Sin nombre";
  document.getElementById("fechaPed").textContent = fechaPed || "Sin fecha";
  document.getElementById("pedidoResumen").textContent = pedido ? pedido.join(", ") : "Sin pedido";

  document.getElementById("btnSiguiente").addEventListener("click", () => {
    const metodoPago = document.querySelector('input[name="pago"]:checked');

    if (!metodoPago) {
      alert("Por favor selecciona un método de pago.");
      return;
    }

    if (metodoPago.value === "tarjeta") {
      window.location.href = "tarjeta.html";
    } else if (metodoPago.value === "efectivo") {
      window.location.href = "efectivo.html";
    }
  });
});
