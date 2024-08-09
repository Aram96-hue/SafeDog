function convertToJson() {
  let form = document.getElementById("form-cuidador-uno");
  let formData = {};
  for (let i = 0; i < form.elements.length; i++) {
    let element = form.elements[i];
    if (element.type !== "submit" && element.type !== "button" && element.type !== "file") {
      formData[element.name] = element.value;
    }
  }
  let jsonData = JSON.stringify(formData);
  localStorage.setItem('cuidadorDatosGenerales', jsonData);
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

document.getElementById("name-emergency").addEventListener("input", function () {
  let nombre = document.getElementById("name-emergency").value.trim();
  let nameError = document.getElementById("name-emergency-feedback");
  if (!isNameValid(nombre)) {
    nameError.textContent = "Caracter inválido";
    nameError.style.color = "red";
  } else {
    nameError.textContent = "";
  }
});

document.getElementById("number-emergency").addEventListener("input", function () {
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

document.getElementById("email-emergency").addEventListener("input", function () {
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

// imagenesdropzone //
document.addEventListener('DOMContentLoaded', () => {
  const dropzone = document.getElementById('dropzone');

  dropzone.addEventListener('dragover', (event) => {
      event.preventDefault();
      dropzone.classList.add('dragover');
  });

  dropzone.addEventListener('dragleave', () => {
      dropzone.classList.remove('dragover');
  });

  dropzone.addEventListener('drop', (event) => {
      event.preventDefault();
      dropzone.classList.remove('dragover');
      
      const files = event.dataTransfer.files;
      if (files.length > 0) {
          handleFiles(files);
      }
  });

  function handleFiles(files) {
      for (const file of files) {
          if (file.type.startsWith('image/')) {
              const img = document.createElement('img');
              img.src = URL.createObjectURL(file);
              img.style.maxWidth = '100%';
              img.style.maxHeight = '400px';
              dropzone.innerHTML = ''; // Limpiar el área de caída
              dropzone.appendChild(img);
          } else {
              alert('Por favor, arrastra y suelta solo imágenes.');
          }
      }
  }
});

//popup//
document.addEventListener('DOMContentLoaded', () => {
  const openPopupImg = document.getElementById('open-popup-img');
  const popup = document.getElementById('popup');
  const popupImg = document.getElementById('popup-img');
  const popupClose = document.getElementById('popup-close');

  // Abre el popup y muestra la imagen en el popup
  openPopupImg.addEventListener('click', () => {
      popupImg.src = openPopupImg.src;
      popup.classList.remove('hidden');
  });

  // Cierra el popup al hacer clic en el botón de cierre
  popupClose.addEventListener('click', () => {
      popup.classList.add('hidden');
  });

  // Cierra el popup si se hace clic fuera del contenido del popup
  window.addEventListener('click', (event) => {
      if (event.target === popup) {
          popup.classList.add('hidden');
      }
  });
});