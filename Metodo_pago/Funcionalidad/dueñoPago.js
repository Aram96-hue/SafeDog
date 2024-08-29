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

