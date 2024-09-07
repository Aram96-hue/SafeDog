const accordion = document.getElementsByClassName("item");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("open");
  });
}

//funcion de validacion de email
function isEmailValid(email) {
  let correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return correoRegex.test(email);
}

//Funcion de validacion de correo
function isPhoneNumberValid(phone) {
  let telefonoRegex = /^\d{10}$/;
  return telefonoRegex.test(phone);
}

function isNameValid(name) {
  let nameRegex = /^[A-Za-z\s\-]+$/;
  return nameRegex.test(name);
}

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "safedog.ch43@gmail.com",
    Password: "018E8F60E2C8B7AA68959854FA90F9B4CEA6",
    To: "safedog.ch43@gmail.com",
    From: "safedog.ch43@gmail.com",
    Subject: "SafeDog Comentario",
    Body: `Nombre: ${
      document.getElementById("full-name").value
    }.<br /> Correo: ${
      document.getElementById("email").value
    }.<br /> Telefono: ${
      document.getElementById("number").hasAttribute("required")
        ? document.getElementById("number").value
        : "La persona no gusta comunicarse con nosotros activamente"
    }.<br /> Mensaje: ${document.getElementById("area-form").value}.`,
  }).then(alert("Formulario enviado correctamente."));
}

//Indicar en tiempo real si nombre tiene un caracter invalido
document.getElementById("full-name").addEventListener("input", function () {
  let nombre = document.getElementById("full-name").value.trim();
  let nameRegex = /^[A-Za-z\s\-]+$/;
  let nameError = document.getElementById("name-feedback");

  if (!nameRegex.test(nombre)) {
    // Muestra un mensaje de error si hay caracteres inválidos
    nameError.textContent = "Caracter inválido";
    nameError.style.color = "red";
  } else {
    // Borra el mensaje de error si el nombre es válido
    nameError.textContent = "";
  }
});

//if para indicar en tiempo real si es valido (correo)
document.getElementById("email").addEventListener("input", function () {
  let correo = this.value.trim();
  let feedback = document.getElementById("email-feedback");

  if (!isEmailValid(correo)) {
    feedback.textContent = "Correo electrónico inválido ._.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Correo electrónico válido UwU";
    feedback.style.color = "white";
  }
});

//if para indicar en tiempo real si es valido (numero)
document.getElementById("number").addEventListener("input", function () {
  let telefono = this.value.trim();
  let feedback = document.getElementById("number-feedback");

  if (!isPhoneNumberValid(telefono)) {
    feedback.textContent = "Número telefónico inválido ._.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Número telefónico válido UwU";
    feedback.style.color = "white";
  }
});

document.getElementById("contacto--btn").addEventListener("click", function () {
  this.classList.toggle("clicked");
  document.getElementById("number--div").classList.toggle("number--part");
  if (document.getElementById("number").hasAttribute("required")) {
    document.getElementById("number").removeAttribute("required");
    document.getElementById("arrow").setAttribute("name", "arrow-up-outline");
  } else {
    document.getElementById("number").setAttribute("required", "required");
    document.getElementById("arrow").setAttribute("name", "arrow-down-outline");
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
    let nameRegex = /^[A-Za-z\s\-]+$/;
    if (nombre === "" || !nameRegex.test(nombre)) {
      return;
    }
    // Llamado de funcion de validacion de email
    if (!isEmailValid(correo)) {
      return;
    }
    let telefonoRegex = /^\d{10}$/; // Asume un número de 10 dígitos
    if (document.getElementById("number").hasAttribute("required")) {
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
    sendEmail();
  });