function validateNombre(input) {
  let pattern = /^[A-Za-z\s]+$/;
  let feedback = input.nextElementSibling;

  if (!pattern.test(input.value)) {
      input.setCustomValidity("Invalid");
      feedback.textContent = "El nombre solo debe contener letras y espacios.";
      feedback.classList.remove('valid-feedback');
      feedback.classList.add('invalid-feedback');
      feedback.style.display = 'block';
  } else {
      input.setCustomValidity("");
      feedback.textContent = "Nombre válido.";
      feedback.classList.remove('invalid-feedback');
      feedback.classList.add('valid-feedback');
      feedback.style.display = 'block';
  }
}

function validateNumTarjeta(input) {
  let pattern = /^\d{16}$/;
  let feedback = input.nextElementSibling;

  if (!pattern.test(input.value) || input.value.length !== 16) {
      input.setCustomValidity("Invalid");
      feedback.textContent = "Número de tarjeta invalido.";
      feedback.classList.remove('valid-feedback');
      feedback.classList.add('invalid-feedback');
      feedback.style.display = 'block';
  } else {
      input.setCustomValidity("");
      feedback.textContent = "Número de tarjeta válido.";
      feedback.classList.remove('invalid-feedback');
      feedback.classList.add('valid-feedback');
      feedback.style.display = 'block';
  }
}

function validateFechaVencimiento(input) {
  let pattern = /^\d{4}$/;
  let feedback = input.nextElementSibling;

  if (!pattern.test(input.value) || input.value.length !== 4) {
      input.setCustomValidity("Invalid");
      feedback.textContent = "Formato de fecha no válido.";
      feedback.classList.remove('valid-feedback');
      feedback.classList.add('invalid-feedback');
      feedback.style.display = 'block';
  } else {
      input.setCustomValidity("");
      feedback.textContent = "Formato de fecha válido.";
      feedback.classList.remove('invalid-feedback');
      feedback.classList.add('valid-feedback');
      feedback.style.display = 'block';
  }
}

function validateCodigoVerificacion(input) {
  let pattern = /^\d{3}$/;
  let feedback = input.nextElementSibling;

  if (!pattern.test(input.value) || input.value.length !== 3) {
      input.setCustomValidity("Invalid");
      feedback.textContent = "Código no válido.";
      feedback.classList.remove('valid-feedback');
      feedback.classList.add('invalid-feedback');
      feedback.style.display = 'block';
  } else {
      input.setCustomValidity("");
      feedback.textContent = "Código válido.";
      feedback.classList.remove('invalid-feedback');
      feedback.classList.add('valid-feedback');
      feedback.style.display = 'block';
  }
}

function validateDomicilio(input) {
  let pattern = /^\d{3}$/;
  let feedback = input.nextElementSibling;

  if (!pattern.test(input.value) || input.value.length !== 3) {
      input.setCustomValidity("Invalid");
      feedback.textContent = "Entrada no válida.";
      feedback.classList.remove('valid-feedback');
      feedback.classList.add('invalid-feedback');
      feedback.style.display = 'block';
  } else {
      input.setCustomValidity("");
      feedback.textContent = "Entrada válida.";
      feedback.classList.remove('invalid-feedback');
      feedback.classList.add('valid-feedback');
      feedback.style.display = 'block';
  }
}

// Add event listeners
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form-tipo-tarjeta');

  form.addEventListener('input', event => {
      const target = event.target;

      if (target.id === 'nombre') {
          validateNombre(target);
      } else if (target.id === 'tarjeta') {
          validateNumTarjeta(target);
      } else if (target.id === 'exampleInputEmail1') {
          validateCorreo(target);
      } else if (target.id === 'exampleInputPassword1') {
          validatePassword(target);
      } else if (target.id === 'exampleInputPassword2') {
          validatePasswordConfirm(target);
      }
  }, false);

  form.addEventListener('submit', event => {
      event.preventDefault();
      event.stopPropagation();

      if (form.checkValidity()) {
          form.classList.add('was-validated');
          document.getElementById('success-message').textContent = "Registro exitoso!";
          document.getElementById('success-message').style.display = 'block';
          
          const username = form.querySelector('#nombre').value;
          const correo = form.querySelector('#exampleInputEmail1').value;
          const telefono = form.querySelector('#telefono').value;
          const password2 = form.querySelector('#exampleInputPassword1').value;

          const newUser = {
              username,
              correo,
              telefono,
              password2
          };

          let users = JSON.parse(localStorage.getItem('myForm2')) || [];
          users.push(newUser);
          localStorage.setItem('myForm2', JSON.stringify(users));
          
          console.log('Formulario enviado');
      } else {
          form.classList.add('was-validated');
      }
  }, false);
});






/*function convertToJson() {
    let form = document.getElementById("form-tarjeta");
    let formData = {};
    for (let i = 0; i < form.elements.length; i++) {
      let element = form.elements[i];
      
      if (element.type !== "submit" && element.type !== "button" && element.type !== "file") {
        if(element.type === "radio"){
          if(element.checked){
            formData[element.name] = element.value;
          }
        } else {
          formData[element.name] = element.value;
        }
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
  
  function isNumerotarjetaValid(numerotarjeta) {
    let correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return correoRegex.test(numerotarjeta);
  }
  
  function isFechavencimientoValid(fechavencimiento) {
    let telefonoRegex = /^\d{10}$/;
    return telefonoRegex.test(fechavencimiento);
  }

  function isCodigoseguridadValid(codigoseguridad) {
    let telefonoRegex = /^\d{10}$/;
    return telefonoRegex.test(codigoseguridad);
  }

  function isDireccionValid(direccion) {
    let telefonoRegex = /^\d{10}$/;
    return telefonoRegex.test(direccion);
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
  
  document.getElementById("tarjeta").addEventListener("input", function () {
    let nombre = document.getElementById("apellido").value.trim();
    let nameError = document.getElementById("apellido-feedback");
    if (!isNumerotarjetaValid(numerotarjeta)) {
      nameError.textContent = "Caracter inválido";
      nameError.style.color = "red";
    } else {
      nameError.textContent = "";
    }
  });
  
  document.getElementById("expiracion").addEventListener("input", function () {
    let correo = this.value.trim();
    let feedback = document.getElementById("email-feedback");
  
    if (!isEmailValid(expiracion)) {
      feedback.textContent = "Correo electrónico inválido";
      feedback.style.color = "red";
    } else {
      feedback.textContent = "Correo electrónico válido";
      feedback.style.color = "green";
    }
  });
  
  document.getElementById("cvv").addEventListener("input", function () {
    let telefono = this.value.trim();
    let feedback = document.getElementById("number--feedback");
  
    if (!isPhoneNumberValid(cvv)) {
      feedback.textContent = "Número telefónico inválido";
      feedback.style.color = "red";
    } else {
      feedback.textContent = "Número telefónico válido";
      feedback.style.color = "green";
    }
  });
  
  document.getElementById("direccion").addEventListener("input", function () {
    let nombre = document.getElementById("name-emergency").value.trim();
    let nameError = document.getElementById("name-emergency-feedback");
    if (!isNameValid(direccion)) {
      nameError.textContent = "Caracter inválido";
      nameError.style.color = "red";
    } else {
      nameError.textContent = "";
    }
  });
  
  
  document.getElementById("form-cuidador-uno").addEventListener("submit", function (event) {
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let tarjeta = document.getElementById("apellido").value;
    let expiracion = document.getElementById("number").value;
    let cvv = document.getElementById("cvv").value;
    let radios = document.querySelectorAll('input[name="ciudad"]');
    let isChecked = Array.from(radios).some(radio => radio.checked);
  
    let nombreContacto = document.getElementById("name-emergency").value;
    let numeroContacto = document.getElementById("number-emergency").value;
    let emailContacto = document.getElementById("email-emergency").value;
  
    if(!isNameValid(nombre)) return;
    if(!isNameValid(apellido)) return;
    if(!isPhoneNumberValid(numero)) return;
    if(!isEmailValid(email)) return;
  
    if(!isChecked) return;
  
    if(!isNameValid(nombreContacto)) return;
    if(!isPhoneNumberValid(numeroContacto)) return;
    if(!isEmailValid(emailContacto)) return;
  
    convertToJson();
  });*/


/****************************************/


  /*document.querySelector('.form-tarjeta').addEventListener('submit', function(event) {
    let isValid = true;

    // Limpiar mensajes de error
    document.querySelectorAll('.error-message').forEach(msg => msg.style.display = 'none');

    // Validar Nombre
    const nombre = document.getElementById('nombre');
    if (!nombre.value.trim()) {
        isValid = false;
        document.getElementById('nombre-error').textContent = 'El nombre completo es obligatorio.';
        document.getElementById('nombre-error').style.display = 'block';
    }

    // Validar Número de Tarjeta
    const tarjeta = document.getElementById('tarjeta');
    const tarjetaPattern = /^\d{16}$/;
    if (!tarjetaPattern.test(tarjeta.value)) {
        isValid = false;
        document.getElementById('tarjeta-error').textContent = 'Número de tarjeta inválido. Debe tener 16 dígitos.';
        document.getElementById('tarjeta-error').style.display = 'block';
    }

    // Validar Fecha de Expiración
    const expiracion = document.getElementById('expiracion');
    const expiracionPattern = /^\d{2}\/\d{2}$/;
    if (!expiracionPattern.test(expiracion.value)) {
        isValid = false;
        document.getElementById('expiracion-error').textContent = 'Fecha de vencimiento inválida. Formato MM/AA.';
        document.getElementById('expiracion-error').style.display = 'block';
    }

    // Validar CVV
    const cvv = document.getElementById('cvv');
    const cvvPattern = /^\d{3}$/;
    if (!cvvPattern.test(cvv.value)) {
        isValid = false;
        document.getElementById('cvv-error').textContent = 'Código de seguridad (CVV) inválido. Debe tener 3 dígitos.';
        document.getElementById('cvv-error').style.display = 'block';
    }

    // Validar Dirección
    const direccion = document.getElementById('direccion');
    if (!direccion.value.trim()) {
        isValid = false;
        document.getElementById('direccion-error').textContent = 'La dirección de facturación es obligatoria.';
        document.getElementById('direccion-error').style.display = 'block';
    }

    if (!isValid) {
        event.preventDefault(); // Evita el envío del formulario si hay errores
    }
});*/