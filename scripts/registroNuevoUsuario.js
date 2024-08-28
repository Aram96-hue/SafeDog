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

function validateTelefono(input) {
    let pattern = /^\d{10}$/;
    let feedback = input.nextElementSibling;

    if (!pattern.test(input.value) || input.value.length !== 10) {
        input.setCustomValidity("Invalid");
        feedback.textContent = "Número de teléfono inválido.";
        feedback.classList.remove('valid-feedback');
        feedback.classList.add('invalid-feedback');
        feedback.style.display = 'block';
    } else {
        input.setCustomValidity("");
        feedback.textContent = "Número de teléfono válido.";
        feedback.classList.remove('invalid-feedback');
        feedback.classList.add('valid-feedback');
        feedback.style.display = 'block';
    }
}

function validateCorreo(input) {
    let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let feedback = input.nextElementSibling;

    if (!pattern.test(input.value)) {
        input.setCustomValidity("Invalid");
        feedback.textContent = "El correo electrónico no es válido.";
        feedback.classList.remove('valid-feedback');
        feedback.classList.add('invalid-feedback');
        feedback.style.display = 'block';
    } else {
        input.setCustomValidity("");
        feedback.innerHTML = "Correo electrónico válido.";  
        feedback.classList.remove('invalid-feedback');
        feedback.classList.add('valid-feedback');
        feedback.style.display = 'block';
    }
}

function validatePassword(input) {
    const requirements = [
        { regex: /.{8,}/, index: 0, message: "Debe tener al menos 8 caracteres" },
        { regex: /[0-9]/, index: 1, message: "Debe tener al menos un número" },
        { regex: /[a-z]/, index: 2, message: "Debe tener al menos una letra minúscula" },
        { regex: /[!#$%&*?_@.\-]/, index: 3, message: "Debe tener al menos un carácter especial" },
        { regex: /[A-Z]/, index: 4, message: "Debe tener al menos una letra mayúscula" },
    ];

    const requierementList = [
        document.getElementById("req1"),
        document.getElementById("req2"),
        document.getElementById("req3"),
        document.getElementById("req4"),
        document.getElementById("req5")
    ];

    const password = input.value;

    document.getElementById('requirements').classList.remove('hidden');

    let allRequirementsMet = true;

    requirements.forEach(item => {
        const isValid = item.regex.test(password);
        const requirementItem = requierementList[item.index];
        if (isValid) {
            requirementItem.textContent = `✅ ${item.message}`;
            requirementItem.style.color = "green";
        } else {
            requirementItem.textContent = `❌ ${item.message}`;
            requirementItem.style.color = "red";
            allRequirementsMet = false;
        }
    });

    if (allRequirementsMet) {
        input.setCustomValidity("");
    } else {
        input.setCustomValidity("Invalid");
    }
}

function validatePasswordConfirm(input) {
    const password = document.getElementById('exampleInputPassword1').value;
    const confirmPassword = input.value;
    const feedback = input.nextElementSibling;

    if (password !== confirmPassword) {
        input.setCustomValidity("Passwords do not match");
        feedback.textContent = "Las contraseñas no coinciden.";
        feedback.classList.remove('valid-feedback');
        feedback.classList.add('invalid-feedback');
        feedback.style.display = 'block';
    } else {
        input.setCustomValidity("");
        feedback.textContent = "";
        feedback.classList.remove('invalid-feedback');
        feedback.classList.add('valid-feedback');
        feedback.style.display = 'none';
    }
}

// Add event listeners
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.needs-validation');

    form.addEventListener('input', event => {
        const target = event.target;

        if (target.id === 'nombre') {
            validateNombre(target);
        } else if (target.id === 'telefono') {
            validateTelefono(target);
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



 // Creación de multiples usuarios en el localStorage
 function createUsersJsonTest() {
    let usersJsonTest = [
        {
            "correo": "juanperez@example.com",
            "password2": "Contraseña.123",
            "telefono": "1122334455",
            "username": "Juan Pérez"
          },
          {
            "correo": "maria.lopez@example.com",
            "password2": "Segura.456",
            "telefono": "2233445566",
            "username": "María López"
          },
          {
            "correo": "carlos.martinez@example.com",
            "password2": "MiClave.789",
            "telefono": "3344556677",
            "username": "Carlos Martínez"
          },
          {
            "correo": "luisa.garcia@example.com",
            "password2": "ClaveFuerte.101",
            "telefono": "4455667788",
            "username": "Luisa García"
          },
          {
            "correo": "andrea.moreno@example.com",
            "password2": "ContraseñaSegura.202",
            "telefono": "5566778899",
            "username": "Andrea Moreno"
          },
          {
            "correo": "pedro.alvarez@example.com",
            "password2": "Password.303",
            "telefono": "6677889900",
            "username": "Pedro Álvarez"
          },
          {
            "correo": "sandra.jimenez@gmail.com",
            "password2": "ClavePrivada.404",
            "telefono": "7788990011",
            "username": "Sandra Jiménez"
          },
          {
            "correo": "jorge.mora@@gmail.com",
            "password2": "MiPass.505",
            "telefono": "8899001122",
            "username": "Jorge Mora"
          },
          {
            "correo": "elena.ramirez@@gmaile}.com",
            "password2": "SafePassword.606",
            "telefono": "9900112233",
            "username": "Elena Ramírez"
          },
          {
            "correo": "natalia.castillo@gmail.com",
            "password2": "Secure.707",
            "telefono": "0011223344",
            "username": "Natalia Castillo"
          }
        ]
        localStorage.setItem("usersTest", JSON.stringify(usersJsonTest));
  };




<<<<<<< HEAD



//Aquí empieza Json
/*document
    .getElementById("myForm2")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        let username = document.getElementById("nombre").value;
        let correo = document.getElementById("exampleInputEmail1").value;
        let telefono = document.getElementById("telefono").value;
        let password2 = document.getElementById("exampleInputPassword1").value;

        // Abajo la función de crear un usaurio dentro de localStorage para test
        //createUsersJsonTest();
        // Para multiples usuarios
       let usersTest = JSON.parse(localStorage.getItem("needs-validation"));
        let existUser = false;
        let userIncorrect = true;
        usersTest.forEach((user) => {
            if (
                user.username === username &&
                user.password2 === password2 &&
                user.correo === correo &&
                user.telefono === telefono
            ) {
                // Aquí va el código referente a enviar al usuario con el resto de la página, se agrega un alert personalizado para ver que funciona esta parte
                userIncorrect = false;
                Swal.fire({
                    icon: "success",
                    title: "Bienvenido",
                    text: "Usario y Contraseña validos",
                    confirmButtonText: "Aceptar",
                    confirmButtonColor: "#7f636e",
                    timer: 1500,
                });
                return;
            } else if (user.username === username) {
                existUser = true;
            }
        });
        if (userIncorrect) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: existUser
                    ? "Contraseña incorrecta, favor de introducir nuevamente tu contraseña"
                    : "Usario y contraseña incorrectos, favor de intentar nuevamente",
                confirmButtonText: "Aceptar",
                confirmButtonColor: "#7f636e",
            });
        }
    });*/
=======
>>>>>>> equipoMiel
