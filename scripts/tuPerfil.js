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

