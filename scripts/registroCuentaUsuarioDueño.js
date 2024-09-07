//Funcion para guardar valores form entidad Duenio

function DuenioJson() {
  const nombreDuenio = document.querySelector('[name="nombreDueño"]').value;
  const apellidoDuenio = document.querySelector('[name="apellidoDueño"]').value;
  const telefonoDuenio = document.querySelector('[name="telefonoDueño"]').value;
  const urlFotoDuenio = document.querySelector('[name="imagenDueño"]').value;

  const idPerrito = localStorage.getItem('idPerrito');
  const idContactoEmergencia= localStorage.getItem('idContactoEmergencia');
  const contrasenia= localStorage.getItem('contrasenia');
  const correo= localStorage.getItem('correo');
  // Crear mi objeto que interactua con el backend
  const duenio = {
    nombre: nombreDuenio,
    apellido: apellidoDuenio, // Fixed to use the correct value
    telefono: telefonoDuenio,
    correo: correo,
    contrasenia: contrasenia,
    direccion:"",
    urlFoto: urlFotoDuenio,
    perrito: idPerrito,
    contactoDeEmergencia: idContactoEmergencia
  };

  // Return JSON string
  return (duenio);
}

//Funcion para guardar valores form entidad ContactoE
function ContactoEJson() {
  const nombreContactoE = document.querySelector('[name="nombreEmergencia"]').value;
  const apellidoContactoE = document.querySelector('[name="apellidoEmergencia"]').value;
  const telefonoContactoE = document.querySelector('[name="telefonoEmergencia"]').value;

  // Crear mi objeto que interactua con el backend
  const contactoE = {
    nombre: nombreContactoE,
    telefono: telefonoContactoE,
    apellido: apellidoContactoE, // Fixed to use the correct value
    correo: ""
  };

  // Return JSON string
  return (contactoE);
}

//Funcion para guardar valores form entidad Perrito
function PerritoJson() {
  const nombrePerrito = document.querySelector('[name="nombrePerrito"]').value;
  const tamanioPerrito = document.querySelector('[name="tamañoPerro"]').value;
  const razaPerrito = document.querySelector('[name="razasPerros"]').value;
  const anioPerrito = document.querySelector('[name="años"]').value;
  const mesPerrito = document.querySelector('[name="meses"]').value;
  const generoPerrito = document.querySelector('[name="generoPerro"]').value;
  const urlFotoPerrito = document.querySelector('[name="imagenMascota"]').value;
  // Crear mi objeto que interactua con el backend
  const perrito = {
    nombre: nombrePerrito,
    tamanio: tamanioPerrito, // Fixed to use the correct value
    raza: razaPerrito,
    anio: anioPerrito,
    mes: mesPerrito,
    genero: generoPerrito,
    urlFoto: urlFotoPerrito
  };

  // Return JSON string
  return (perrito);
}


function convertToJson() {
  // Get data objects
  const dataDuenio = DuenioJson();
  const dataContactoE = ContactoEJson();
  const dataPerrito = PerritoJson();

  // Convert objects to JSON strings
  const jsonDataDuenio = JSON.stringify(dataDuenio);
  const jsonDataContactoE = JSON.stringify(dataContactoE);
  const jsonDataPerrito = JSON.stringify(dataPerrito);

  // Optionally, save data to localStorage
  localStorage.setItem('DuenioDatos', jsonDataDuenio);
  localStorage.setItem('ContactoEDatos', jsonDataContactoE);
  localStorage.setItem('PerritoDatos', jsonDataPerrito);


  // Log the JSON strings to the console
  console.log(jsonDataDuenio);
  console.log(jsonDataContactoE);
  console.log(jsonDataPerrito);

  // Show a confirmation message
  alert('Respuestas guardadas con éxito!');
  sendInfoDuenio(jsonDataDuenio);
  sendInfoPerrito(jsonDataPerrito);
  sendInfoContactoE(jsonDataContactoE);
  // Uncomment the line below to redirect if needed
  window.location.href = './cardCuidadores.html';
}

function loadImageFromUrldueño() {
  const imageUrl = document.getElementById('imagenDueño').value;
  const previewImg = document.querySelector('.imagenDueño');

  if (imageUrl) {
    previewImg.src = imageUrl;
    previewImg.onerror = function () {
      alert('No se pudo cargar la imagen. Por favor, verifica la URL.');
      previewImg.src = '../assets/foto-dueño.png'; // Restaura la imagen por defecto
    };
  } else {
    feedback.classList.add('text-danger');
  }
}


function loadImageFromUrlperro() {
  const imageUrl = document.getElementById('imagenPerro').value;
  const previewImg = document.querySelector('.imagenPerro');

  if (imageUrl) {
    previewImg.src = imageUrl;
    previewImg.onerror = function () {
      alert('No se pudo cargar la imagen. Por favor, verifica la URL.');
      previewImg.src = '../assets/foto-mascota.jpg'; // Restaura la imagen por defecto
    };
  } else {
    feedback.classList.add('text-danger');
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.needs-validation');

  // Fetch the last ID when the DOM is fully loaded
  let lastIdDuenio = null;
  fetchLastIdDuenio().then(id => {
    lastIdDuenio = id; // Store the fetched last ID
    console.log('Last ID:', lastIdDuenio); // Optional: Log the ID for debugging
    localStorage.setItem('idDuenio', lastIdDuenio);

  });
});


async function fetchLastIdDuenio() {
  try {
    const response = await fetch('http://localhost:8081/api/safedog/duenios/lastId'); // Adjust URL as needed
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data; // Returns the last ID
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}



// Ahora puedes usar idDuenio sin problemas

//Método para que el dueño no sea null



//Enviar por API (metodo PUT)
function sendInfoDuenio(jsonDataDuenio) {
  // Inicializa idDuenio después de establecerlo en el localStorage
let idDuenio = localStorage.getItem('idDuenio');
urlDuenio = `http://localhost:8081/api/safedog/duenios/duenio/${idDuenio}`;
  fetch(urlDuenio, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: jsonDataDuenio,
    mode: "cors",
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log('Guardado', data)
    })
    .catch(error => {
      console.error(error);
    })
}

//Enviar por API (metodo PUT)
function sendInfoPerrito(jsonDataPerrito) {
let  idPerrito = localStorage.getItem('idPerrito');
 urlPerrito = `http://localhost:8081/api/safedog/perritos/perrito/${idPerrito}`
  fetch(urlPerrito, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body:jsonDataPerrito,
    mode: "cors",
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log('Guardado', data)
    })
    .catch(error => {
      console.error(error);
    })
}


//Enviar por API (metodo PUT)
function sendInfoContactoE(jsonDataContactoE) {
let idContactoE = localStorage.getItem('idContactoEmergencia');
 urlContactoEmergencia = `http://localhost:8081/api/safedog/Contacto_Emergencia/contactoE/${idContactoE}`
  fetch(urlContactoEmergencia, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: jsonDataContactoE,
    mode: "cors",
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log('Guardado', data)
    })
    .catch(error => {
      console.error(error);
    })
}
