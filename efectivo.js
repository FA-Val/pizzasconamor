document.addEventListener("DOMContentLoaded", () => {
  const nombreC = localStorage.getItem("nombreC");
  const fechaPed = localStorage.getItem("fechaPed");
  const pedido = JSON.parse(localStorage.getItem("pedido"));
  const total = localStorage.getItem("total");

  document.getElementById("nombreC").textContent = nombreC || "Sin nombre";
  document.getElementById("fechaPed").textContent = fechaPed || "Sin fecha";
  document.getElementById("pedidoResumen").textContent = pedido ? pedido.join(", ") : "Sin pedido";
  document.getElementById("total").textContent = total || "0";
  document.getElementById("cantidadPagar").value = total || "0";

  const formEfectivo = document.getElementById("formEfectivo");

  formEfectivo.addEventListener("submit", (e) => {
    e.preventDefault();

    const cantidadRecibida = parseFloat(document.getElementById("cantidadRecibida").value);
    const cantidadPagar = parseFloat(document.getElementById("cantidadPagar").value);

    if (isNaN(cantidadRecibida) || cantidadRecibida < cantidadPagar) {
      alert("La cantidad recibida debe ser mayor o igual al monto a pagar.");
      return;
    }

    const cambio = cantidadRecibida - cantidadPagar;
    document.getElementById("cambio").textContent = `Su cambio es: $${cambio.toFixed(2)} MXN`;

    setTimeout(() => {
      alert("¡Pago realizado exitosamente!");
      window.location.href = "grax.html";
    }, 1000);
  });
});
