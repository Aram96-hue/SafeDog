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
document.getElementById("servicesForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previene el envío del formulario

    // Array para almacenar mensajes de error
    let errores = [];

    // Array de objetos que contienen los ids de los inputs y los nombres de las preguntas
    const preguntas = [
        { id: "auto", nombre: "¿Cuentas con auto propio para transportarte a ti o al perrito?" },
        { id: "reservas", nombre: "¿Aceptas reservas de varios dueños al mismo tiempo?" },
        { id: "activos", nombre: "¿Tienes alguna objeción en cuidar/pasear perros activos?" },
        { id: "comunicacion", nombre: "¿Estás dispuesto a mantener la comunicación con el dueño del perro en todo momento enviando fotos, mensajes, etc?" },
        { id: "cachorros", nombre: "¿Cuidas cachorros?" },
        { id: "hembras", nombre: "¿Cuidas hembras en celo?" },
        { id: "terceraEdad", nombre: "¿Cuidas perritos de la tercera edad?" },
        { id: "medicamentos", nombre: "¿Aplicas medicamentos/inyecciones?" }
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