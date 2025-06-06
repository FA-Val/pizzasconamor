document.addEventListener("DOMContentLoaded", () => {
const fechaHoy = new Date();
  const fechaFormateada = fechaHoy.toISOString().split('T')[0];
  document.getElementById("fechaPed").value = fechaFormateada;

  const formPedido = document.getElementById("formPedido");

  formPedido.addEventListener("submit", function(e) {
    e.preventDefault();

    const nombreC = document.getElementById("nombreC").value.trim();
    const fechaPed = document.getElementById("fechaPed").value;
    const correo = document.getElementById("correoContacto").value.trim();
    const comentario = document.getElementById("comentarioContacto").value.trim();

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
    localStorage.setItem("correoC", correo);
    localStorage.setItem("comentario", comentario);

    if (metodoEntrega.value === "local") {
      window.location.href = "local.html";
    } else if (metodoEntrega.value === "domicilio") {
      window.location.href = "domicilio.html";
    }
  });

  const btnContacto = document.getElementById("btnContacto");
  if (btnContacto) {
    btnContacto.addEventListener("click", () => {
      const correo = document.getElementById("correoContacto").value.trim();
      const comentario = document.getElementById("comentarioContacto").value.trim();

      if (!correo || !comentario) return;

      const form = document.createElement("form");
      form.action = "https://formsubmit.co/plantitasbonitasweb@gmail.com";
      form.method = "POST";
      form.style.display = "none";

      const inputCorreo = document.createElement("input");
      inputCorreo.type = "hidden";
      inputCorreo.name = "Correo del cliente (Contacto)";
      inputCorreo.value = correo;

      const inputComentario = document.createElement("input");
      inputComentario.type = "hidden";
      inputComentario.name = "Comentario del cliente";
      inputComentario.value = comentario;

      form.appendChild(inputCorreo);
      form.appendChild(inputComentario);
      document.body.appendChild(form);
      form.submit();
    });
  }
});
