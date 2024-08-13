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
    createUserJsonTest();
    //createUsersJsonTest();

    // Para un único usaurio
    let userTest = JSON.parse(localStorage.getItem("userTest"));
    console.log(userTest);

    if (
      userTest.username === username.value &&
      userTest.password === password.value
    ) {
      // Aquí va el código referente a enviar al usuario con el resto de la página, se agrega un alert personalizado para ver que funciona esta parte
      Swal.fire({
        icon: "success",
        title: "Bienvenido",
        text: "Usario y Contraseña validos",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#7f636e",
        timer: 1500,
      });
      return;
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text:
          userTest.username === username.value
            ? "Contraseña incorrecta, favor de introducir nuevamente tu contraseña"
            : "Usario y contraseña incorrectos, favor de intentar nuevamente",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#7f636e",
      });
    }

    /*
    // Para multiples usuarios
    let usersTest = JSON.parse(localStorage.getItem("usersTest"));
    let existUser = false;
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
    if (existUser) {
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
    */
  });

// Creacion de un solo usuario
function createUserJsonTest() {
  let userJsonTest = {
    username: "duarte.pablo@fernandes.com",
    password: "VnwXqEDlnE1H3kO",
  };
  localStorage.setItem("userTest", JSON.stringify(userJsonTest));
}

// Creación de multiples usuarios
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
