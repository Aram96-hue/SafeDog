function convertToJson() {
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
    if (!isNameValid(nombre)) {
      nameError.textContent = "Caracter inválido";
      nameError.style.color = "red";
    } else {
      nameError.textContent = "";
    }
  });
  
  document.getElementById("expiracion").addEventListener("input", function () {
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
  
  document.getElementById("cvv").addEventListener("input", function () {
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
  
  document.getElementById("direccion").addEventListener("input", function () {
    let nombre = document.getElementById("name-emergency").value.trim();
    let nameError = document.getElementById("name-emergency-feedback");
    if (!isNameValid(nombre)) {
      nameError.textContent = "Caracter inválido";
      nameError.style.color = "red";
    } else {
      nameError.textContent = "";
    }
  });
  
  
  document.getElementById("form-cuidador-uno").addEventListener("submit", function (event) {
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let numero = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    
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
  });

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