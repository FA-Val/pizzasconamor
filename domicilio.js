document.addEventListener("DOMContentLoaded", () => {
  const nombreC = localStorage.getItem("nombreC");
  const fechaPed = localStorage.getItem("fechaPed");
  const pedido = JSON.parse(localStorage.getItem("pedido"));

  document.getElementById("nombreC").textContent = nombreC || "Sin nombre";
  document.getElementById("fechaPed").textContent = fechaPed || "Sin fecha";
  document.getElementById("pedidoResumen").textContent = pedido ? pedido.join(", ") : "Sin pedido";

  const formEnvio = document.getElementById("formEnvio");

  formEnvio.addEventListener("submit", (e) => {
    e.preventDefault();

    const calle = document.getElementById("calle").value.trim();
    const numCalle = document.getElementById("numCalle").value.trim();
    const colonia = document.getElementById("colonia").value.trim();
    const celular = document.getElementById("celular").value.trim();
    const metodoPago = document.querySelector('input[name="pago"]:checked');

    if (!calle || !numCalle || !colonia || !celular || !metodoPago) {
      alert("Por favor llena todos los campos y selecciona el método de pago.");
      return;
    }

    localStorage.setItem("calle", calle);
    localStorage.setItem("numCalle", numCalle);
    localStorage.setItem("colonia", colonia);
    localStorage.setItem("celular", celular);

    if (metodoPago.value === "tarjeta") {
      window.location.href = "tarjeta.html";
    } else if (metodoPago.value === "efectivo") {
      window.location.href = "efectivo.html";
    }
  });
});
