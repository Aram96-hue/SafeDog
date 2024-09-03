document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.form-tarjeta');
  
  // Elementos del formulario
  const nombreInput = document.getElementById('nombre');
  const tarjetaInput = document.getElementById('tarjeta');
  const expiracionInput = document.getElementById('expiracion');
  const cvvInput = document.getElementById('cvv');
  const direccionInput = document.getElementById('direccion');

  // Elementos para mostrar feedback
  const nameFeedback = document.getElementById('name-feedback');
  const numCardFeedback = document.getElementById('numcard-feedback');
  const dateExpFeedback = document.getElementById('datexp-feedback');
  const codFeedback = document.getElementById('cod-feedback');
  const adressFeedback = document.getElementById('adress-feedback');

  // Validaciones
  function validateName() {
      if (nombreInput.value.trim() === '') {
          nameFeedback.textContent = 'El nombre no puede estar vacío.';
          return false;
      } else if (!/^[a-zA-Z\s]+$/.test(nombreInput.value)) {
          nameFeedback.textContent = 'El nombre debe contener solo letras y espacios.';
          nameFeedback.style.color = "red";
          return false;
      } else {
          nameFeedback.textContent = '';
          return true;
      }
  }

  function validateCardNumber() {
      if (!/^\d{16}$/.test(tarjetaInput.value)) {
          numCardFeedback.textContent = 'El número de tarjeta debe contener 16 dígitos.';
          nameFeedback.style.color = "red";
          return false;
      } else {
          numCardFeedback.textContent = '';
          return true;
      }
  }

  function validateExpirationDate() {
      if (!/^\d{2}\/\d{2}$/.test(expiracionInput.value)) {
          dateExpFeedback.textContent = 'La fecha de vencimiento debe estar en formato MM/AA.';
          nameFeedback.style.color = "red";
          return false;
      } else {
          dateExpFeedback.textContent = '';
          return true;
      }
  }

  function validateCVV() {
      if (!/^\d{3}$/.test(cvvInput.value)) {
          codFeedback.textContent = 'El CVV debe contener 3 dígitos.';
          nameFeedback.style.color = "red";
          return false;
      } else {
          codFeedback.textContent = '';
          return true;
      }
  }

  function validateAddress() {
      if (direccionInput.value.trim() === '') {
          adressFeedback.textContent = 'La dirección no puede estar vacía.';
          nameFeedback.style.color = "red";
          return false;
      } else {
          adressFeedback.textContent = '';
          return true;
      }
  }

  // Validar en el envío del formulario
  form.addEventListener('submit', function (event) {
      const isNameValid = validateName();
      const isCardNumberValid = validateCardNumber();
      const isExpirationDateValid = validateExpirationDate();
      const isCVVValid = validateCVV();
      const isAddressValid = validateAddress();

      if (!isNameValid || !isCardNumberValid || !isExpirationDateValid || !isCVVValid || !isAddressValid) {
          event.preventDefault(); // Detener el envío del formulario si hay errores
      }
  });

  // Validar en tiempo real mientras se escribe
  nombreInput.addEventListener('input', validateName);
  tarjetaInput.addEventListener('input', validateCardNumber);
  expiracionInput.addEventListener('input', validateExpirationDate);
  cvvInput.addEventListener('input', validateCVV);
  direccionInput.addEventListener('input', validateAddress);
});


form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Validar antes de mostrar el mensaje
    const isFormValid = (
        nombreInput.value.trim() !== '' &&
        /^[a-zA-Z\s]+$/.test(nombreInput.value) &&
        /^\d{16}$/.test(tarjetaInput.value) &&
        /^\d{2}\/\d{2}$/.test(expiracionInput.value) &&
        /^\d{3}$/.test(cvvInput.value) &&
        direccionInput.value.trim() !== ''
    );

    if (isFormValid) {
        alert('Su pago se realizó correctamente');
        form.submit(); // Enviar el formulario si todas las validaciones son correctas
    } else {
        alert('Por favor, complete todos los campos correctamente.');
    }
});


