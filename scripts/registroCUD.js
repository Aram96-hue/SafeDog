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








