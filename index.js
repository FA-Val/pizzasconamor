document.addEventListener("DOMContentLoaded", () => {
  const ahora = new Date();
  const hora = ahora.getHours();
  const mensajeCierre = document.createElement("p");
  mensajeCierre.textContent = "Gracias por su preferencia, lo esperamos en horario laboral";
  mensajeCierre.style.color = "red";
  mensajeCierre.style.fontWeight = "bold";
  mensajeCierre.style.textAlign = "center";

  if (hora < 9 || hora >= 20) {
    document.body.innerHTML = "";
    document.body.appendChild(mensajeCierre);
    return;
  }
  const fechaHoy = new Date();
  const fechaFormateada = fechaHoy.toISOString().split('T')[0];
  document.getElementById("fechaPed").value = fechaFormateada;

  const formPedido = document.getElementById("formPedido");

  formPedido.addEventListener("submit", function(e) {
    e.preventDefault();

    const nombreC = document.getElementById("nombreC").value.trim();
    const fechaPed = document.getElementById("fechaPed").value;
    const correo = document.getElementById("correoC").value.trim();

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

    if (document.getElementById("refresco").checked) pedido.push("Refresco");
    if (document.getElementById("quesoExtra").checked) pedido.push("Queso Extra");
    if (document.getElementById("orillaQueso").checked) pedido.push("Orilla de Queso");
    if (document.getElementById("papas").checked) pedido.push("Papas");

    const metodoEntrega = document.querySelector('input[name="entrega"]:checked');
    if (!metodoEntrega) {
      document.getElementById("mensajeError").style.display = "block";
      return;
    }
    localStorage.setItem("nombreC", nombreC);
    localStorage.setItem("fechaPed", fechaPed);
    localStorage.setItem("pedido", JSON.stringify(pedido));
    localStorage.setItem("total", total);


    const doc = new window.jspdf.jsPDF();
    doc.text("Pizzeria con Amor - Ticket", 10, 10);
    doc.text("Nombre: " + nombreC, 10, 20);
    doc.text("Fecha: " + fechaPed, 10, 30);
    doc.text("Pedido: " + pedido.join(", "), 10, 40);
    doc.text("Total: $" + total, 10, 50);
    doc.save("ticket.pdf");

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

    if (metodoEntrega.value === "local") {
      window.location.href = "local.html";
    } else if (metodoEntrega.value === "domicilio") {
      window.location.href = "domicilio.html";
    }
  });
});