<<<<<<< HEAD
document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let username = document.getElementById("username");
    let password = document.getElementById("password");

    /**
     * Aquí va el codigo referente a las validaciones con js de la forma:
     * if(validation === erroneo){
     *  return;
     * }
     */

    // Abajo la función de crear un usaurio dentro de localStorage para test
    createUsersJsonTest();
    // Para multiples usuarios
    let usersTest = JSON.parse(localStorage.getItem("usersTest"));
    let existUser = false;
    let userIncorrect = true;
    usersTest.forEach((user) => {
      console.log(user.username);
      console.log(user.password);
      console.log("--------------------------------");
      console.log(username.value);
      console.log(password.value);

      if (
        user.username === username.value &&
        user.password === password.value
      ) {
        // Aquí va el código referente a enviar al usuario con el resto de la página, se agrega un alert personalizado para ver que funciona esta parte
        userIncorrect = false;
        Swal.fire({
          icon: "success",
          title: "Bienvenido",
          text: "Usario y Contraseña validos",
          confirmButtonText: 'Aceptar',
          confirmButtonColor: "#7f636e",
          timer: 1500,
        });
        return;
      } else if (user.username === username.value) {
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
        confirmButtonText: 'Aceptar',
        confirmButtonColor: "#7f636e"
      });
    }
  });

// Creación de multiples usuarios en el localStorage
function createUsersJsonTest() {
  let usersJsonTest = [
    {
      username: "duarte.pablo@fernandes.com",
      password: "VnwXqEDlnE1H3kO",
    },
    {
      username: "daniel95@saraiva.net",
      password: "129dSNxTwJiVrbI",
    },
    {
      username: "manuela.prado@ig.com.br",
      password: "LpMwAv60h1nWzrm",
    },
    {
      username: "melissa.faria@matias.net.br",
      password: "58CAIxzlUN4qhRV",
    },
    {
      username: "lorena.castro@gmail.com",
      password: "Nd1uEt57UtK3R72",
    },
    {
      username: "hdasdores@hotmail.com",
      password: "2DejABN6JVYRPNV",
    },
    {
      username: "ferreira.thalissa@uol.com.br",
      password: "7ShgoE3ET4ltkoY",
    },
    {
      username: "ivan21@r7.com",
      password: "AmDQcxPshML6zub",
    },
    {
      username: "galindo.luzia@ferminiano.br",
      password: "eDn8uVWP4gGdB3f",
    },
    {
      username: "asalas@correia.com.br",
      password: "E6ZhTO6VcbRoNtL",
    },
  ];
  localStorage.setItem("usersTest", JSON.stringify(usersJsonTest));
}
=======
function isEmailValid(email) {
    let correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return correoRegex.test(email);
  }
  
  const requirements = [
    {regex: /.{8,}/, index: 0, message: "Debe tener al menos 8 caracteres"}, // Minimo 8 caracteres.
    {regex: /[0-9]/, index: 1, message: "Debe tener al menos un numero"}, // Al menos un numero.
    {regex: /[a-z]/, index: 2,message: "Debe tener al menos una letra minúscula"}, // Al menos una letra minúscula
    {regex: /[!#$%&*?_@.\-]/, index: 3, message: "Debe tener al menos un caracter especial"}, // Al menos un caracter especial
    {regex: /[A-Z]/, index:4, message: "Debe tener al menos una letra mayúscula"}, // Al menos una letra mayúscula
  ];
  
  const requierementList = [
    document.getElementById("req1"),
    document.getElementById("req2"),
    document.getElementById("req3"),
    document.getElementById("req4"),
    document.getElementById("req5")
  ];
  
  document.getElementById("username").addEventListener("input", function () {
    let correo = this.value.trim();
    let feedback = document.getElementById("email-feedback");
  
    if (!isEmailValid(correo)) {
      feedback.textContent = "❌ Correo electrónico inválido";
      feedback.style.color = "red";
    } else {
      feedback.textContent = "✅ Correo electrónico válido";
      feedback.style.color = "green";
    }
  });
  
  const passwordInput = document.getElementById("password");
  passwordInput.addEventListener("keyup", (e) => {
      const password = e.target.value;
      requirements.forEach(item => {
          const isValid = item.regex.test(password);
          const requirementItem = requierementList[item.index];
          if (isValid) {
              requirementItem.textContent = `✅ ${item.message}`;
              requirementItem.style.color = "green";
          } else {
              requirementItem.textContent = `❌ ${item.message}`;
              requirementItem.style.color = "red";
          }
      });
  });
  
  document.getElementById("togglePassword").addEventListener('click', (e)=>{
    const type = password.getAttribute('type') === 'password' ? 'text': 'password';
    password.setAttribute('type', type);
    e.target.classList.toggle('bi-eye');
  });
  
  document
    .getElementById("login-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      let username = document.getElementById("username").value;
      let password = document.getElementById("password").value;
  
      // Abajo la función de crear un usaurio dentro de localStorage para test
      createUsersJsonTest();
      // Para multiples usuarios
      let usersTest = JSON.parse(localStorage.getItem("usersTest"));
      let existUser = false;
      let userIncorrect = true;
      usersTest.forEach((user) => {
        if (
          user.username === username &&
          user.password === password
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
    });
  
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
  };
>>>>>>> 8c21780fbc845000857305c2e7abcd9012496ac9
