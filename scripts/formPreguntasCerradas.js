// document.addEventListener('DOMContentLoaded', function () {
//     const formulario = document.querySelector('.formulario');
//     if (!formulario) {
//         console.error('Formulario no encontrado');
//         return;
//     }

//     formulario.addEventListener('submit', function (event) {
//         event.preventDefault();

//         // Obtener las respuestas del formulario
//         const respuestas = {
//             autoPropio: formulario.querySelector('input[name="auto"]:checked')?.value || '0',
//             reservasMultiples: formulario.querySelector('input[name="reservas"]:checked')?.value || '0',
//             perrosActivos: formulario.querySelector('input[name="activos"]:checked')?.value || '0',
//             comunicacion: formulario.querySelector('input[name="comunicacion"]:checked')?.value || '0',
//             cachorros: formulario.querySelector('input[name="cachorros"]:checked')?.value || '0',
//             hembrasEnCelo: formulario.querySelector('input[name="hembras"]:checked')?.value || '0',
//             terceraEdad: formulario.querySelector('input[name="terceraEdad"]:checked')?.value || '0',
//             medicamentos: formulario.querySelector('input[name="medicamentos"]:checked')?.value || '0'
//         };

//         // Validar que cada pregunta tenga una opción seleccionada
//         const preguntaNames = ['auto', 'reservas', 'activos', 'comunicacion', 'cachorros', 'hembras', 'terceraEdad', 'medicamentos'];
//         let allQuestionsAnswered = true;

//         preguntaNames.forEach(name => {
//             const selectedRadio = formulario.querySelector(`input[name="${name}"]:checked`);
//             if (!selectedRadio) {
//                 allQuestionsAnswered = false;
//             }
//         });

//         if (!allQuestionsAnswered) {
//             alert('Por favor, responde todas las preguntas antes de continuar.');
//             return;
//         }

//         // Guardar las respuestas en localStorage
//         localStorage.setItem('respuestasFormulario', JSON.stringify(respuestas));

//         // Mostrar los datos guardados en localStorage en la consola
//         const datosGuardados = JSON.parse(localStorage.getItem('respuestasFormulario'));
//         console.log('Datos guardados en localStorage:', datosGuardados);

//         // Redirige a la página siguiente
//         window.location.href = './pages/formularioServicios.html';
//     });
// });

/*

document.getElementById("servicesForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previene el envío del formulario

    // Array para almacenar mensajes de error
    let errores = [];

    // Array de objetos que contienen los ids de los inputs y los nombres de las preguntas
    const preguntas = [
        { id: "auto", nombre: "¿Cuentas con auto propio para transportarte a ti o al perrito?" },
        { id: "reserva", nombre: "¿Aceptas reservas de varios dueños al mismo tiempo?" },
        { id: "activo", nombre: "¿Tienes alguna objeción en cuidar/pasear perros activos?" },
        { id: "comunicacion", nombre: "¿Estás dispuesto a mantener la comunicación con el dueño del perro en todo momento enviando fotos, mensajes, etc?" },
        { id: "cachorro", nombre: "¿Cuidas cachorros?" },
        { id: "hembra", nombre: "¿Cuidas hembras en celo?" },
        { id: "tercera_edad", nombre: "¿Cuidas perritos de la tercera edad?" },
        { id: "medicamento", nombre: "¿Aplicas medicamentos/inyecciones?" }
    ];

    // Recorrer cada pregunta y validar si fue respondida
    preguntas.forEach(pregunta => {
        const opciones = document.querySelectorAll(`input[name="${pregunta.id}"]:checked`);
        if (opciones.length === 0) {
            errores.push(`La pregunta "${pregunta.nombre}" no ha sido respondida.`);
        } else {
            // Almacenar la respuesta en localStorage
            localStorage.setItem(pregunta.id, opciones[0].value);
        }
    });

    // Mostrar errores si los hay
    if (errores.length > 0) {
        alert(errores.join("\n"));
    } else {
        alert("Formulario completado correctamente.");
        // Aquí puedes redirigir a la siguiente página o hacer lo que necesites
        window.location.href = "formularioServicios.html";
    }
});

*/

let jsonData
const url = `http://localhost:8081/api/safedog/preguntas_cerradas`

//Enviar por API (metodo POST)
function sendPreguntasCerradas() {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonData
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



//Convertir a JSON

function convertToJson() {
    let form = document.getElementById("servicesForm");
    let formData = {};
    for (let i = 0; i < form.elements.length; i++) {
      let element = form.elements[i];
  
      if (
        element.type !== "submit" &&
        element.type !== "button"
      ) {
        if (element.type === "radio") {
          if (element.checked) {
            formData[element.name] = element.value;
          }
        } else {
          formData[element.name] = element.value;
        }
      }
    }
   
    jsonData = JSON.stringify(formData);
    localStorage.setItem("preguntasCerradas", jsonData);
    console.log(jsonData);
  }


  
//Método para enviar el form

  
document
.getElementById("servicesForm")
.addEventListener("submit", function (event) {
  event.preventDefault();
 
  let auto = document.querySelectorAll('input[name="auto"]');
  let isCheckedAuto = Array.from(auto).some((radio) => radio.checked);

  let reserva = document.querySelectorAll('input[name="reserva"]');
  let isCheckedReserva = Array.from(reserva).some((radio) => radio.checked);

  let activo = document.querySelectorAll('input[name="activo"]');
  let isCheckedActivo = Array.from(activo).some((radio) => radio.checked);

  let comunicacion = document.querySelectorAll('input[name="comunicacion"]');
  let isCheckedComunicacion = Array.from(comunicacion).some((radio) => radio.checked);

  let cachorro = document.querySelectorAll('input[name="cachorro"]');
  let isCheckedCachorro = Array.from(cachorro).some((radio) => radio.checked);

  let hembra = document.querySelectorAll('input[name="hembra"]');
  let isCheckedHembra = Array.from(hembra).some((radio) => radio.checked);

  let tercera_edad = document.querySelectorAll('input[name="tercera_edad"]');
  let isCheckedTerceraEdad = Array.from(tercera_edad).some((radio) => radio.checked);

  let medicamento = document.querySelectorAll('input[name="medicamento"]');
  let isCheckedMedicamento = Array.from(medicamento).some((radio) => radio.checked);


  if (!isCheckedAuto) return;

  if (!isCheckedReserva) return;

  if (!isCheckedActivo) return;

  if (!isCheckedComunicacion) return;

  if (!isCheckedCachorro) return;

  if (!isCheckedHembra) return;

  if (!isCheckedTerceraEdad) return;

  if (!isCheckedMedicamento) return;


  convertToJson();
  sendPreguntasCerradas();
  //window.location.href = '../pages/formularioServicios.html';
});
