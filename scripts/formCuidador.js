function convertToJson() {
  let form = document.getElementById("form-cuidador-uno");
  let formData = {};
  for (let i = 0; i < form.elements.length; i++) {
    let element = form.elements[i];

    if (
      element.type !== "submit" &&
      element.type !== "button" &&
      element.type !== "file"
    ) {
      if (element.type === "radio") {
        if (element.checked) {
          formData[element.name] = element.value;
        }
      } else {
        formData[element.name] = element.value;
      }
    }
  }
  let jsonData = JSON.stringify(formData);
  localStorage.setItem("cuidadorDatosGenerales", jsonData);
  console.log(jsonData);
}

function isNameValid(name) {
  let nameRegex = /^[A-Za-z\s\-]+$/;
  return nameRegex.test(name);
}

function isEmailValid(email) {
  let correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return correoRegex.test(email);
}

function isPhoneNumberValid(phone) {
  let telefonoRegex = /^\d{10}$/;
  return telefonoRegex.test(phone);
}

function isURLValid(url) {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
}

document.getElementById("nombre").addEventListener("input", function () {
  let nombre = document.getElementById("nombre").value.trim();
  let nameError = document.getElementById("name-feedback");
  if (!isNameValid(nombre)) {
    nameError.textContent = "Caracter inválido";
    nameError.style.color = "red";
  } else {
    nameError.textContent = "";
  }
});

document.getElementById("apellido").addEventListener("input", function () {
  let nombre = document.getElementById("apellido").value.trim();
  let nameError = document.getElementById("apellido-feedback");
  if (!isNameValid(nombre)) {
    nameError.textContent = "Caracter inválido";
    nameError.style.color = "red";
  } else {
    nameError.textContent = "";
  }
});

document.getElementById("email").addEventListener("input", function () {
  let correo = this.value.trim();
  let feedback = document.getElementById("email-feedback");

  if (!isEmailValid(correo)) {
    feedback.textContent = "Correo electrónico inválido";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Correo electrónico válido";
    feedback.style.color = "green";
  }
});

document.getElementById("number").addEventListener("input", function () {
  let telefono = this.value.trim();
  let feedback = document.getElementById("number--feedback");

  if (!isPhoneNumberValid(telefono)) {
    feedback.textContent = "Número telefónico inválido";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Número telefónico válido";
    feedback.style.color = "green";
  }
});

document
  .getElementById("name-emergency")
  .addEventListener("input", function () {
    let nombre = document.getElementById("name-emergency").value.trim();
    let nameError = document.getElementById("name-emergency-feedback");
    if (!isNameValid(nombre)) {
      nameError.textContent = "Caracter inválido";
      nameError.style.color = "red";
    } else {
      nameError.textContent = "";
    }
  });

document
  .getElementById("number-emergency")
  .addEventListener("input", function () {
    let telefono = this.value.trim();
    let feedback = document.getElementById("number-feedback");

    if (!isPhoneNumberValid(telefono)) {
      feedback.textContent = "Número telefónico inválido";
      feedback.style.color = "red";
    } else {
      feedback.textContent = "Número telefónico válido";
      feedback.style.color = "green";
    }
  });

document
  .getElementById("email-emergency")
  .addEventListener("input", function () {
    let correo = this.value.trim();
    let feedback = document.getElementById("email-emergency-feedback");

    if (!isEmailValid(correo)) {
      feedback.textContent = "Correo electrónico inválido";
      feedback.style.color = "red";
    } else {
      feedback.textContent = "Correo electrónico válido";
      feedback.style.color = "green";
    }
  });

document.getElementById("url-img").addEventListener("input", function () {
  let url = this.value.trim();
  let feedback = document.getElementById("url-img-feedback");
  if (isURLValid(url)) {
    feedback.textContent = "URL valido";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "URL invalido";
    feedback.style.color = "red";
  }
});

document.getElementById("url-ine").addEventListener("input", function () {
  let url = this.value.trim();
  let feedback = document.getElementById("url-ine-feedback");
  if (isURLValid(url)) {
    feedback.textContent = "URL valido";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "URL invalido";
    feedback.style.color = "red";
  }
});

document
  .getElementById("form-cuidador-uno")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let numero = document.getElementById("number").value;
    let email = document.getElementById("email").value;

    let radios = document.querySelectorAll('input[name="ciudad"]');
    let isChecked = Array.from(radios).some((radio) => radio.checked);

    let nombreContacto = document.getElementById("name-emergency").value;
    let numeroContacto = document.getElementById("number-emergency").value;
    let emailContacto = document.getElementById("email-emergency").value;

    let imgInput = document.getElementById("url-img").value;
    let imgINE = document.getElementById("url-ine").value;

    if (!isNameValid(nombre)) return;
    if (!isNameValid(apellido)) return;
    if (!isPhoneNumberValid(numero)) return;
    if (!isEmailValid(email)) return;

    if (!isChecked) return;

    if (!isNameValid(nombreContacto)) return;
    if (!isPhoneNumberValid(numeroContacto)) return;
    if (!isEmailValid(emailContacto)) return;

    console.log("Arre!!!");
    if (!isURLValid(imgInput)) return;
    if (!isURLValid(imgINE)) return;
    console.log("Arre!!!");

    window.location.href = '../pages/tuPerfil.html';
    convertToJson();
  });