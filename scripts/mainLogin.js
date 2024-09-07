// Function to validate email format
function isEmailValid(email) {
  const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return correoRegex.test(email);
}

// Password validation requirements
const requirements = [
  { regex: /.{8,}/, index: 0, message: "Debe tener al menos 8 caracteres" },
  { regex: /[0-9]/, index: 1, message: "Debe tener al menos un numero" },
  { regex: /[a-z]/, index: 2, message: "Debe tener al menos una letra minúscula" },
  { regex: /[!#$%&*?_@.\-]/, index: 3, message: "Debe tener al menos un caracter especial" },
  { regex: /[A-Z]/, index: 4, message: "Debe tener al menos una letra mayúscula" },
];

// Elements for displaying password validation requirements
const requirementList = [
  document.getElementById("req1"),
  document.getElementById("req2"),
  document.getElementById("req3"),
  document.getElementById("req4"),
  document.getElementById("req5")
];

// Email input field and feedback element
const emailInput = document.getElementById("username");
const emailFeedback = document.getElementById("email-feedback");

// Password input field and toggle button
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

// Event listener for email input
emailInput.addEventListener("input", function () {
  const correo = this.value.trim();
  if (!isEmailValid(correo)) {
    emailFeedback.textContent = "❌ Correo electrónico inválido";
    emailFeedback.style.color = "red";
  } else {
    emailFeedback.textContent = "✅ Correo electrónico válido";
    emailFeedback.style.color = "green";
  }
});

// Event listener for password input
passwordInput.addEventListener("keyup", (e) => {
  const password = e.target.value;
  requirements.forEach(item => {
    const isValid = item.regex.test(password);
    const requirementItem = requirementList[item.index];
    if (isValid) {
      requirementItem.textContent = `✅ ${item.message}`;
      requirementItem.style.color = "green";
    } else {
      requirementItem.textContent = `❌ ${item.message}`;
      requirementItem.style.color = "red";
    }
  });
});

// Event listener for password visibility toggle
togglePassword.addEventListener('click', () => {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  togglePassword.classList.toggle('bi-eye');
});

// Event listener for form submission
document.getElementById("ingresar-submit").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default form submission

  const username = emailInput.value;
  const password = passwordInput.value;

  getInfoDuenio(username, password);
});

// Function to fetch user data
function getInfoDuenio(username, password) {
  const urlDuenio = `http://localhost:8081/api/safedog/duenios/duenio/correo?correo=${username}`;

  console.log('Fetching data from URL:', urlDuenio); // Log the URL being used

  
  fetch(urlDuenio, {
    method: 'GET' // Explicitly specify that this is a GET request
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse JSON from the response
    })
    .then(duenioInfo => {
      console.log(duenioInfo);
      usersTest(duenioInfo, username, password); // Pass the fetched data to usersTest
    })
    .catch(error => {
      console.error('Error fetching Duenio info:', error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error fetching user information. Please try again later.",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#7f636e",
      });
    });
}

// Function to validate user credentials
function usersTest(duenioInfo, username, password) {
  if (duenioInfo && duenioInfo.correo === username && duenioInfo.contrasenia === password) {
    Swal.fire({
      icon: "success",
      title: "Bienvenido",
      text: "Usuario y Contraseña válidos",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#7f636e",
      timer: 1500,
    }).then(() => {
      // Redirect or update the UI after successful login
      window.location.href = "../inicio.html";
    });
  } else if (duenioInfo && duenioInfo.correo === username) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Contraseña incorrecta",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#7f636e",
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Usuario no encontrado",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#7f636e",
    });
  }
}



  /*
// Creación de multiples usuarios en el localStorage
function createUsersJsonTest() {
  let usersJsonTest = [
    {
      username: "duarte.pablo@fernandes.com",
      password: "VnwXqEDl*nE1H3kO",
    },
    {
      username: "daniel95@saraiva.net",
      password: "129dSNxTwJiVrbI?",
    },
    {
      username: "manuela.prado@ig.com.br",
      password: "LpMwAv6&0h1nWzrm",
    },
    {
      username: "melissa.faria@matias.net.br",
      password: "58CAIx!zlUN4qhRV",
    },
    {
      username: "lorena.castro@gmail.com",
      password: "Nd1uEt5$7UtK3R72",
    },
    {
      username: "hdasdores@hotmail.com",
      password: "2DejABN6JVYR#PNV",
    },
    {
      username: "ferreira.thalissa@uol.com.br",
      password: "7ShgoE3ET4l@tkoY",
    },
    {
      username: "ivan21@r7.com",
      password: "AmDQcxPshML6zub?",
    },
    {
      username: "galindo.luzia@ferminiano.br",
      password: "eDn8uVWP%4gGdB3f",
    },
    {
      username: "asalas@correia.com.br",
      password: "E6ZhTO6V_cbRoNtL",
    },
  ];
  localStorage.setItem("usersTest", JSON.stringify(usersJsonTest));
};*/