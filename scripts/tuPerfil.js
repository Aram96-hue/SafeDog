

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let form = event.target;
  let photoInput = document.getElementById('formFileMultipleOne');
  let feedback = document.getElementById('formFeedback');
  
 
  if (photoInput.files.length === 0) {
      photoInput.setCustomValidity("Invalid");
      photoInput.nextElementSibling.style.display = 'block';
  } else {
      photoInput.setCustomValidity("");
      photoInput.nextElementSibling.style.display = 'none';
  }
  

  if (!form.checkValidity()) {
      feedback.textContent = "Por favor, completa todos los campos requeridos.";
      feedback.classList.add('text-danger');
      form.classList.add('was-validated');
  } else {
      feedback.textContent = "Información enviada con éxito.";
      feedback.classList.remove('text-danger');
      feedback.classList.add('text-success');
  }
});




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
