document.addEventListener('DOMContentLoaded', function () {
    // Elementos del formulario
    const nombreInput = document.getElementById('nombree');
    const tarjetaInput = document.getElementById('tarjetaa');
    const expiracionInput = document.getElementById('expiracionn');
    const cvvInput = document.getElementById('cvvv');
    const direccionInput = document.getElementById('direccionn');

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
        if (!/^\d{16}$/.test(tarjetaInput.value)) {
            numCardFeedback.textContent = 'El número de tarjeta debe contener 16 dígitos.';
            numCardFeedback.style.color = "red";
        } else {
            numCardFeedback.textContent = '';
        }
    });

    expiracionInput.addEventListener('input', function() {
        if (!/^\d{2}\/\d{2}$/.test(expiracionInput.value)) {
            dateExpFeedback.textContent = 'La fecha de vencimiento debe estar en formato MM/AA.';
            dateExpFeedback.style.color = "red";
        } else {
            dateExpFeedback.textContent = '';
        }
    });

    cvvInput.addEventListener('input', function() {
        if (!/^\d{3}$/.test(cvvInput.value)) {
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

});

/*alert*/

document.addEventListener('DOMContentLoaded', function() {
    const customAlert = document.getElementById('custom-alert2');
    const closeAlert = document.getElementById('close-alert2');
    const payButton = document.getElementById('pay-button2');

    // Mostrar el alert personalizado
    payButton.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar el comportamiento por defecto del enlace
        customAlert.style.display = 'flex'; // Mostrar el modal
        setTimeout(function() {
            window.location.href = '../pages/preguntasFrecuentesContactanos.html'; // Redirigir a la página después de 3 segundos
        });
    });

    // Cerrar el alert personalizado
    closeAlert.addEventListener('click', function() {
        customAlert.style.display = 'none';
    });

    // Cerrar el alert si se hace clic fuera del contenido del alert
    window.addEventListener('click', function(event) {
        if (event.target === customAlert) {
            customAlert.style.display = 'none';
        }
    });
});