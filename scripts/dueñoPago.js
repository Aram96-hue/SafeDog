document.addEventListener('DOMContentLoaded', function () {
    // Elementos del formulario
    const nombreInput = document.getElementById('nombree');
    const tarjetaInput = document.getElementById('tarjetaa');
    const expiracionInput = document.getElementById('expiracionn');
    const cvvInput = document.getElementById('cvvv');
    const direccionInput = document.getElementById('direccionn');
    const form = document.getElementById('payment-form2'); // Assuming your form has an id 'payment-form'

    // Elementos para mostrar feedback
    const nameFeedback = document.getElementById('namee-feedback');
    const numCardFeedback = document.getElementById('numcardd-feedback');
    const dateExpFeedback = document.getElementById('datexpp-feedback');
    const codFeedback = document.getElementById('codd-feedback');
    const adressFeedback = document.getElementById('adresss-feedback');

    // Validaciones en tiempo real
    nombreInput.addEventListener('input', function() {
        if (nombreInput.value.trim() === '') {
            nameFeedback.textContent = 'El nombre no puede estar vacío.';
            nameFeedback.style.color = "red";
        } else if (!/^[a-zA-Z\s]+$/.test(nombreInput.value)) {
            nameFeedback.textContent = 'El nombre debe contener solo letras y espacios.';
            nameFeedback.style.color = "red";
        } else {
            nameFeedback.textContent = '';
        }
    });

    tarjetaInput.addEventListener('input', function() {
        if (tarjetaInput.value.trim() === '') {
            numCardFeedback.textContent = 'El número de tarjeta no puede estar vacío.';
            numCardFeedback.style.color = "red";
        } else if (!/^\d{4} \d{4} \d{4} \d{4}$/.test(tarjetaInput.value)) {
            numCardFeedback.textContent = 'El número de tarjeta debe contener 16 dígitos (con espacios).';
            numCardFeedback.style.color = "red";
        } else {
            numCardFeedback.textContent = '';
        }
    });

    expiracionInput.addEventListener('input', function() {
        if (expiracionInput.value.trim() === '') {
            dateExpFeedback.textContent = 'La fecha de expiración no puede estar vacía.';
            dateExpFeedback.style.color = "red";
        } else if (!/^\d{2}\/\d{2}$/.test(expiracionInput.value)) {
            dateExpFeedback.textContent = 'La fecha de expiración debe estar en formato MM/AA.';
            dateExpFeedback.style.color = "red";
        } else {
            dateExpFeedback.textContent = '';
        }
    });

    cvvInput.addEventListener('input', function() {
        if (cvvInput.value.trim() === '') {
            codFeedback.textContent = 'El CVV no puede estar vacío.';
            codFeedback.style.color = "red";
        } else if (!/^\d{3}$/.test(cvvInput.value)) {
            codFeedback.textContent = 'El CVV debe contener 3 dígitos.';
            codFeedback.style.color = "red";
        } else {
            codFeedback.textContent = '';
        }
    });

    direccionInput.addEventListener('input', function() {
        if (direccionInput.value.trim() === '') {
            adressFeedback.textContent = 'La dirección no puede estar vacía.';
            adressFeedback.style.color = "red";
        } else {
            adressFeedback.textContent = '';
        }
    });

    // Form submit event listener
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        let isValid = true;

        // Check each input and set isValid to false if any input is invalid
        if (nombreInput.value.trim() === '') {
            nameFeedback.textContent = 'El nombre no puede estar vacío.';
            nameFeedback.style.color = "red";
            isValid = false;
        }
        if (tarjetaInput.value.trim() === '') {
            numCardFeedback.textContent = 'El número de tarjeta no puede estar vacío.';
            numCardFeedback.style.color = "red";
            isValid = false;
        }
        if (expiracionInput.value.trim() === '') {
            dateExpFeedback.textContent = 'La fecha de expiración no puede estar vacía.';
            dateExpFeedback.style.color = "red";
            isValid = false;
        }
        if (cvvInput.value.trim() === '') {
            codFeedback.textContent = 'El CVV no puede estar vacío.';
            codFeedback.style.color = "red";
            isValid = false;
        }
        if (direccionInput.value.trim() === '') {
            adressFeedback.textContent = 'La dirección no puede estar vacía.';
            adressFeedback.style.color = "red";
            isValid = false;
        }

        if (isValid) {
            Swal.fire({
                icon: "success",
                title: "¡Muchas Gracias!",
                text: "Su orden de pago se proceso correctamente.",
                confirmButtonText: "Aceptar",
                confirmButtonColor: "#7f636e",
                timer: 200000,
            }).then(() => {
                window.location.href = "preguntasFrecuentesContactanos.html";
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Por favor, complete todos los campos correctamente.",
                confirmButtonText: "Aceptar",
                confirmButtonColor: "#7f636e",
            });
        }
    });
});