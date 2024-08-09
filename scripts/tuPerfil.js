//validation function using Bootstrap styles, beto added this
(function () {
  'use strict'
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');

  form.addEventListener('submit', function (event) {
      
      event.preventDefault();

      
      feedback.textContent = '';

     
      if (form.checkValidity()) {
          feedback.textContent = 'Información enviada con éxito!';
          feedback.classList.remove('text-danger');
          feedback.classList.add('text-success');
      } else {
          feedback.textContent = 'Favor de llenar el campo faltante.';
          feedback.classList.remove('text-success');
          feedback.classList.add('text-danger');
      }

      
      form.classList.add('was-validated');
  }, false);
})();


function convertToJson() {
    let form = document.getElementById("contactForm");
    let formData = {};
    for (let i = 0; i < form.elements.length; i++) {
      let element = form.elements[i];
      if (element.type !== "submit" && element.type !== "button" && element.type !== "file") {
        formData[element.name] = element.value;
      }
    }
    let jsonData = JSON.stringify(formData);
    localStorage.setItem('cuidadorDatosGenerales', jsonData);
    // Redirigir o mostrar un mensaje de confirmación
    alert('Respuestas guardadas con éxito!');
    console.log(jsonData);
  }
