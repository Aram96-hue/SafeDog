 /*document.addEventListener('DOMContentLoaded', function () {
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

    const idServicio = document.querySelector('#servicesForm');
    if (!idServicio) {
        console.error('idServicio no encontrado');
        return;
    }

    idServicio.addEventListener('submit', function (event) {
        event.preventDefault();

        const servicios = {
            paseo: idServicio.querySelector('input[name="paseo"]:checked')?.value || '0',
            hospedaje: idServicio.querySelector('input[name="hospedaje"]:checked')?.value || '0',
            guarderia: idServicio.querySelector('input[name="guarderia"]:checked')?.value || '0',
            baño: idServicio.querySelector('input[name="baño"]:checked')?.value || '0',

            paseoTarifa: '0',
            hospedajeTarifa: '0',
            guarderiaTarifa: '0',
            bañoTarifa: '0'
        };

        // Validar que cada servicio tenga una opción seleccionada
        const services = ['paseo', 'hospedaje', 'guarderia', 'baño'];
        let allServicesSelected = true;

        services.forEach(service => {
            const selectedRadio = idServicio.querySelector(`input[name="${service}"]:checked`);
            const dropdown = idServicio.querySelector(`.div-${service} .dropdown select`);

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

        /*alert('Los servicios fueron guardados correctamente!');*
        window.location.href = './cuidadorPago.html'; 
    }); 
         


    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
});


let jsonData;
const url = `http://localhost:8080/api/safedog/servicios`;

//Enviar por API (metodo POST)
function sendServicios() {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonData,
    mode: "cors",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("Guardado", data);
    })
    .catch((error) => {
      console.error(error);
    });
}

//Convertir a JSON

function convertToJson() {
  let form = document.getElementById("servicesForm");
  let formData = {};
  for (let i = 0; i < form.elements.length; i++) {
    let element = form.elements[i];

    if (element.type !== "submit" && element.type !== "button") {
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
  localStorage.setItem("servicesForm", jsonData);
  console.log(jsonData);
}

*/
document.addEventListener('DOMContentLoaded', function () {
  function toggleDropdowns() {
    const services = ['paseo', 'hospedaje', 'guarderia', 'baño'];

    services.forEach(service => {
      const yesRadio = document.querySelector(`input[name="${service}"][value="Si"]`);
      const noRadio = document.querySelector(`input[name="${service}"][value="No"]`);
      const dropdown = document.querySelector(`.div-${service} .dropdown select`);

      // Habilitar el dropdown si "Sí" está seleccionado, deshabilitar si "No" está seleccionado o si no se ha seleccionado nada
      if (yesRadio && yesRadio.checked) {
        if (dropdown) dropdown.disabled = false; // Habilita el dropdown
      } else if (noRadio && noRadio.checked) {
        if (dropdown) dropdown.disabled = true; // Deshabilita el dropdown
      } else {
        if (dropdown) dropdown.disabled = true; // Deshabilita el dropdown si no hay selección
      }
    });
  }

  const radios = document.querySelectorAll('input[type="radio"]');
  radios.forEach(radio => {
    radio.addEventListener('change', toggleDropdowns);
  });

  toggleDropdowns();

  const idServicio = document.querySelector('#servicesForm');
  if (!idServicio) {
    console.error('Formulario no encontrado');
    return;
  }

  idServicio.addEventListener('submit', function (event) {
    event.preventDefault();

    const servicios = {
      paseo: idServicio.querySelector('input[name="paseo"]:checked')?.value || 'No',
      paseoTarifa: getSelectValue('paseo'),
      hospedaje: idServicio.querySelector('input[name="hospedaje"]:checked')?.value || 'No',
      hospedajeTarifa: getSelectValue('hospedaje'),
      guarderia: idServicio.querySelector('input[name="guarderia"]:checked')?.value || 'No',
      guarderiaTarifa: getSelectValue('guarderia'),
      baño: idServicio.querySelector('input[name="baño"]:checked')?.value || 'No',
      bañoTarifa: getSelectValue('baño')
    };

    // Validar que cada servicio tenga una opción seleccionada
    const services = ['paseo', 'hospedaje', 'guarderia', 'baño'];
    let allServicesSelected = true;

    services.forEach(service => {
      const selectedRadio = idServicio.querySelector(`input[name="${service}"]:checked`);

      if (!selectedRadio) {
        allServicesSelected = false;
      }
    });

    if (!allServicesSelected) {
      alert('Por favor, seleccione una opción para cada servicio.');
      return;
    }

    // Convertir a JSON
    const jsonData = JSON.stringify(servicios);
    console.log('Datos enviados a la API:', jsonData);

    // Guardar en localStorage
    localStorage.setItem('serviciosForm', jsonData);

    // Enviar por API
    fetch('http://localhost:8081/api/safedog/servicios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: jsonData,
      mode: 'cors',
    })
    .then(response => {
      if (!response.ok) {
        return response.text().then(text => {
          throw new Error(`Error ${response.status}: ${text}`);
        });
      }
      return response.json();
    })
    .then(data => {
      console.log('Guardado', data);
      // Puedes redirigir a otra página si es necesario
      // window.location.href = './cuidadorPago.html';
    })
    .catch(error => {
      console.error('Error al guardar:', error);
    });
  });

  function getSelectValue(service) {
    const dropdown = document.querySelector(`.div-${service} .dropdown select`);
    // Retorna el valor del dropdown si está habilitado, o '0' si está deshabilitado
    return (dropdown && !dropdown.disabled) ? dropdown.value : '0';
  }
});