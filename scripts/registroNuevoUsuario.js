(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            // Custom validation for matching passwords
            const password = form.querySelector('#exampleInputPassword1');
            const confirmPassword = form.querySelector('#exampleInputPassword2');

            if (password && confirmPassword && password.value !== confirmPassword.value) {
                // Set custom validity message
                confirmPassword.setCustomValidity("Las contraseñas no coinciden.");
                // Show an alert to the user
                alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
                // Prevent form submission
                event.preventDefault();
                event.stopPropagation();
                // Add was-validated class to show validation styles
                form.classList.add('was-validated');
                return; // Exit the function to prevent further processing
            } else {
                // Clear custom validity if passwords match
                confirmPassword.setCustomValidity("");
            }

            // Apply Bootstrap validation styles
            form.classList.add('was-validated');
        }, false);
    });
})();


function validateTelefono(input) {
    let pattern = /^\d{10}$/;
    let feedback = input.nextElementSibling;

    if (!pattern.test(input.value)) {
        input.setCustomValidity("Invalid");
        feedback.style.display = 'block';
    } else {
        input.setCustomValidity("");
        feedback.style.display = 'none';
    }
}

/* Validacion caracteres permitidos */

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let form = event.target;

    if (!form.checkValidity()) {
        document.getElementById('formMessage').textContent = "Por favor, completa todos los campos requeridos.";
        form.classList.add('was-validated');
    } else {
        document.getElementById('formMessage').textContent = "Formulario enviado con éxito.";
    }
});

function validateNombre(input) {
    let pattern = /^[A-Za-z\s]+$/;
    let feedback = input.nextElementSibling;

    if (!pattern.test(input.value)) {
        input.setCustomValidity("Invalid");
        feedback.style.display = 'block';
    } else {
        input.setCustomValidity("");
        feedback.style.display = 'none';
    }
}
