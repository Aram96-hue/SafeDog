document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.querySelector('.formulario');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener las respuestas del formulario
        const respuestas = {
            autoPropio: formulario.querySelector('input[name="auto"]:checked').value,
            reservasMultiples: formulario.querySelector('input[name="reservas"]:checked').value,
            perrosActivos: formulario.querySelector('input[name="activos"]:checked').value,
            comunicacion: formulario.querySelector('input[name="comunicacion"]:checked').value,
            cachorros: formulario.querySelector('input[name="cachorros"]:checked').value,
            hembrasEnCelo: formulario.querySelector('input[name="hembras"]:checked').value,
            terceraEdad: formulario.querySelector('input[name="terceraEdad"]:checked').value,
            medicamentos: formulario.querySelector('input[name="medicamentos"]:checked').value
        };

        // Guardar las respuestas en el local storage
        localStorage.setItem('respuestasFormulario', JSON.stringify(respuestas));

        // Mostrar un mensaje de confirmación
        alert('Respuestas guardadas con éxito!');
        window.location.href = './siguientePagina.html'; // Cambia a la siguiente página si es necesario
    });
});
