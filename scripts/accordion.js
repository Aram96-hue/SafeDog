const accordion = document.getElementsByClassName("item");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("open");
  });
}

document.getElementById("contacto--btn").addEventListener("click", function () {
  this.classList.toggle("clicked");
  document.getElementById("number--div").classList.toggle("number--part");
  if(document.getElementById("number").hasAttribute("required")){
    document.getElementById("number").removeAttribute("required")
  } else {
    document.getElementById("number").setAttribute("required", "required");
  }
});

document
  .getElementById("form-cont")
  .addEventListener("submit", function (event) {
    // Prevenir que el formulario se envíe automáticamente
    event.preventDefault();
    // Obtener los valores de los campos de entrada
    let nombre = document.getElementById("full-name").value.trim();
    let correo = document.getElementById("email").value.trim();
    let telefono = document.getElementById("number").value.trim();
    let comentarios = document.getElementById("area-form").value.trim();
    // Validación de nombre (no debe estar vacío)
    if (nombre === "") {
      alert("Por favor, ingrese su nombre.");
      return;
    }
    // Validación de correo electrónico (utilizando expresión regular)
    let correoRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    if (!correoRegex.test(correo)) {
      alert("Por favor, ingrese un correo electrónico válido.");
      return;
    }
    let telefonoRegex = /^\d{10}$/; // Asume un número de 10 dígitos
    if(document.getElementById("number").hasAttribute("required")){
      if (!telefonoRegex.test(telefono)) {
        alert("Por favor, ingrese un número telefónico válido de 10 dígitos.");
        return;
      }
    }
    // Validación de comentarios (opcional, dependiendo de tus requerimientos)
    if (comentarios === "") {
      alert("Por favor, ingrese sus preguntas o comentarios.");
      return;
    }
    // Si todas las validaciones son correctas, se puede proceder con el envío del formulario o mostrar un mensaje
    alert("Formulario enviado correctamente.");
  });
