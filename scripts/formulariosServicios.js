document.addEventListener('DOMContentLoaded', function () {
    function toggleDropdowns() {
        const services = ['paseo', 'hospedaje', 'guarderia', 'baño'];

        services.forEach(service => {
            const yesRadio = document.querySelector(`input[name="${service}"][value="Si"]`);
            const noRadio = document.querySelector(`input[name="${service}"][value="No"]`);
            const dropdown = document.querySelector(`.div-${service} .dropdown select`);

            if (yesRadio && yesRadio.checked) {
                if (dropdown) dropdown.disabled = false; // Habilita el dropdown
            } else {
                if (dropdown) dropdown.disabled = true; // Deshabilita el dropdown
            }
        });
    }

    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => {
        radio.addEventListener('change', toggleDropdowns);
    });

    toggleDropdowns();

    const formulario = document.querySelector('#servicesForm');
    if (!formulario) {
        console.error('Formulario no encontrado');
        return;
    }

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        const servicios = {
            paseo: formulario.querySelector('input[name="paseo"]:checked')?.value || '0',
            hospedaje: formulario.querySelector('input[name="hospedaje"]:checked')?.value || '0',
            guarderia: formulario.querySelector('input[name="guarderia"]:checked')?.value || '0',
            baño: formulario.querySelector('input[name="baño"]:checked')?.value || '0',

            tarifaPaseo: '0',
            tarifaHospedaje: '0',
            tarifaGuarderia: '0',
            tarifaBaño: '0'
        };

        // Validar que cada servicio tenga una opción seleccionada
        const services = ['paseo', 'hospedaje', 'guarderia', 'baño'];
        let allServicesSelected = true;

        services.forEach(service => {
            const selectedRadio = formulario.querySelector(`input[name="${service}"]:checked`);
            const dropdown = formulario.querySelector(`.div-${service} .dropdown select`);

            if (!selectedRadio) {
                allServicesSelected = false;
            } else if (selectedRadio.value === 'Si' && dropdown && !dropdown.disabled) {
                servicios[`tarifa${capitalizeFirstLetter(service)}`] = dropdown.value;
            } else {
                servicios[`tarifa${capitalizeFirstLetter(service)}`] = '0';
            }
        });

        if (!allServicesSelected) {
            alert('Por favor, seleccione una opción para cada servicio.');
            return;
        }

        // Mostrar los datos del formulario en la consola
        console.log('Datos del formulario:', servicios);

        // Guardar los datos en localStorage
        localStorage.setItem('serviciosForm', JSON.stringify(servicios));

        // Mostrar los datos guardados en localStorage en la consola
        const datosGuardados = JSON.parse(localStorage.getItem('serviciosForm'));
        console.log('Datos guardados en localStorage:', datosGuardados);

        /*alert('Los servicios fueron guardados correctamente!');*/
        window.location.href = '../inicio.html';
    });

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
});