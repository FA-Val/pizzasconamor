document.addEventListener("DOMContentLoaded", () => {
  // Poner la fecha actual al cargar la página
  const fechaHoy = new Date();
  const fechaFormateada = fechaHoy.toISOString().split('T')[0]; // yyyy-mm-dd
  document.getElementById("fechaPed").value = fechaFormateada;

  const formPedido = document.getElementById("formPedido");

  formPedido.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombreC = document.getElementById("nombreC").value.trim();
    const fechaPed = document.getElementById("fechaPed").value;

    // Pizzas seleccionadas
    const pedido = [];
    let total = 0;

    if (document.getElementById("pepperoni").checked) {
      pedido.push("Pepperoni");
      total += 99;
    }
    if (document.getElementById("hawaiana").checked) {
      pedido.push("Hawaiana");
      total += 119;
    }
    if (document.getElementById("mexicana").checked) {
      pedido.push("Mexicana");
      total += 169;
    }

    // Complementos seleccionados
    if (document.getElementById("refresco").checked) {
      pedido.push("Refresco");
      total += 25;
    }
    if (document.getElementById("quesoExtra").checked) {
      pedido.push("Queso Extra");
      total += 20;
    }
    if (document.getElementById("orillaQueso").checked) {
      pedido.push("Orilla de Queso");
      total += 30;
    }
    if (document.getElementById("papas").checked) {
      pedido.push("Papas");
      total += 40;
    }

    // Método de entrega
    const metodoEntrega = document.querySelector('input[name="entrega"]:checked');

    if (!metodoEntrega) {
      document.getElementById("mensajeError").style.display = "block";
      return;
    }

    // Guardar información en localStorage
    localStorage.setItem("nombreC", nombreC);
    localStorage.setItem("fechaPed", fechaPed);
    localStorage.setItem("pedido", JSON.stringify(pedido));
    localStorage.setItem("total", total);

    // Redirigir a la página correspondiente
    if (metodoEntrega.value === "local") {
      window.location.href = "local.html";
    } else if (metodoEntrega.value === "domicilio") {
      window.location.href = "domicilio.html";
    }
  });
});
