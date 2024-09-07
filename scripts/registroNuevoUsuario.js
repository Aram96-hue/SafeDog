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

    // Fetch the last ID when the DOM is fully loaded
    let lastIdPerrito = null;
    fetchLastIdPerrito().then(id => {
        lastIdPerrito = id; // Store the fetched last ID
        console.log('Last ID:', lastIdPerrito); // Optional: Log the ID for debugging
        localStorage.setItem('idPerrito',lastIdPerrito);
    });

    // Fetch the last ID when the DOM is fully loaded
    let lastIdContactE = null;
    fetchLastIdContactE().then(id => {
        lastIdContactE = id; // Store the fetched last ID
        console.log('Last ID:', lastIdContactE); // Optional: Log the ID for debugging
        localStorage.setItem('idContactoEmergencia', lastIdContactE);
    });

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

    form.addEventListener('submit', async event => {
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
            localStorage.setItem('correo', correo);
            localStorage.setItem('contrasenia', password2);

            const newPerrito = {
                nombre: "",
                tamanio: "",
                raza: "",
                anio: 0,
                mes: 0,
                genero: "",
                urlFoto: ""
            }

            const newContactoED = {
                nombre: "",
                telefono: "",
                apellido: null,
                correo: ""
            }
          
            const newUser = {
                nombre: username,
                apellido: "",
                telefono: telefono,
                correo: correo,
                contrasenia: password2,
                direccion: "",
                urlFoto: "",
                perrito: lastIdPerrito,
                contactoDeEmergencia: lastIdContactE
            };

            jsonData = JSON.stringify(newUser);
            jsonDataPerritoVacio = JSON.stringify(newPerrito);
            jsonDataContactoEDVacio = JSON.stringify(newContactoED);
            
            try {
                // Create new perrito and contacto emergency
                await Promise.all([
                    crearNuevoPerrito(),
                    crearNuevoContactoEDVacio()
                ]);

                // Send new user registration
                await sendRegistroNuevoUsuerio();

                // Redirect to the new page
                window.location.href = './registroCuentaUsuarioDueño.html';
                console.log('Formulario enviado');
            } catch (error) {
                console.error('Error in submission process:', error);
            }
        } else {
            form.classList.add('was-validated');
        }
    }, false);
});

const url = `http://127.0.0.1:8081/api/safedog/duenios`;

//Enviar por API (metodo POST)
async function sendRegistroNuevoUsuerio() {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonData
        });
        const data = await response.json();
        console.log('Guardado', data);
    } catch (error) {
        console.error('Error in sending new user:', error);
    }
}

const urlPerrito = `http://127.0.0.1:8081/api/safedog/perritos`;

//Enviar por API (metodo POST)
async function crearNuevoPerrito() {
    try {
        const response = await fetch(urlPerrito, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonDataPerritoVacio
        });
        const data = await response.json();
        console.log('Perrito creado', data);
        return data; // Optionally return data if needed
    } catch (error) {
        console.error('Error in creating new perrito:', error);
        throw error; // Ensure that errors are propagated
    }
}

const urlContactoEDVacio = `http://127.0.0.1:8081/api/safedog/Contacto_Emergencia`;

//Enviar por API (metodo POST)
async function crearNuevoContactoEDVacio() {
    try {
        const response = await fetch(urlContactoEDVacio, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonDataContactoEDVacio
        });
        const data = await response.json();
        console.log('Contacto de emergencia creado', data);
        return data; // Optionally return data if needed
    } catch (error) {
        console.error('Error in creating new contacto de emergencia:', error);
        throw error; // Ensure that errors are propagated
    }
}

async function fetchLastIdPerrito() {
    try {
        const response = await fetch('http://localhost:8081/api/safedog/perritos/lastId'); // Adjust URL as needed
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data; // Returns the last ID
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

async function fetchLastIdContactE() {
    try {
        const response = await fetch('http://localhost:8081/api/safedog/Contacto_Emergencia/lastId'); // Adjust URL as needed
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data; // Returns the last ID
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}
/*
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
  };*/




