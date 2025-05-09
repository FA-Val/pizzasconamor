document.addEventListener("DOMContentLoaded", () => {
  const volver = document.getElementById("volver");

  volver.addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "index.html";
  });

  const nombreC = localStorage.getItem("nombreC") || "Sin nombre";
  const fechaPed = localStorage.getItem("fechaPed") || "Sin fecha";
  const pedido = JSON.parse(localStorage.getItem("pedido")) || [];
  const total = localStorage.getItem("total") || 0;
  const correo = localStorage.getItem("correoC") || "";
  const comentario = localStorage.getItem("comentario") || "";

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.text("Pizzería con Amor - Ticket", 10, 10);
  doc.text("Nombre: " + nombreC, 10, 20);
  doc.text("Fecha: " + fechaPed, 10, 30);
  doc.text("Pedido: " + pedido.join(", "), 10, 40);
  doc.text("Total: $" + total, 10, 50);
  doc.text("Comentario: " + comentario, 10, 60);
  doc.save("ticket.pdf");

  if (correo !== "") {
    const form = document.createElement("form");
    form.action = "https://formsubmit.co/plantitasbonitasweb@gmail.com";
    form.method = "POST";
    form.style.display = "none";

    const inputCorreo = document.createElement("input");
    inputCorreo.type = "hidden";
    inputCorreo.name = "Correo del cliente";
    inputCorreo.value = correo;

    const inputMensaje = document.createElement("input");
    inputMensaje.type = "hidden";
    inputMensaje.name = "Mensaje del pedido";
    inputMensaje.value = "Pedido: " + pedido.join(", ") + " | Total: $" + total + " | Comentario: " + comentario;

    form.appendChild(inputCorreo);
    form.appendChild(inputMensaje);
    document.body.appendChild(form);
    form.submit();
  }
});
