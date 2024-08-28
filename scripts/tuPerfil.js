
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let form = event.target;
//  let photoInput = document.getElementById('formFileMultipleOne');
let feedback = document.getElementById('formFeedback');
  
  
  // if (photoInput.files.length === 0) {
  //     photoInput.setCustomValidity("Invalid");
  //     photoInput.nextElementSibling.style.display = 'block';
  // } else {
  //     photoInput.setCustomValidity("");
  //     photoInput.nextElementSibling.style.display = 'none';
  // }

  
  if (!form.checkValidity()) {
      feedback.textContent = "Por favor, completa todos los campos requeridos.";
      feedback.classList.add('text-danger');
      form.classList.add('was-validated');
  } else {
      feedback.textContent = "Información enviada con éxito.";
      feedback.classList.remove('text-danger');
      feedback.classList.add('text-success');

      function convertToJson() {
          let formData = {};
          for (let i = 0; i < form.elements.length; i++) {
              let element = form.elements[i];
              if (element.type !== "submit" && element.type !== "button") {
                  formData[element.name] = element.value;
              }
          }
          let jsonData = JSON.stringify(formData);
          localStorage.setItem('cuidadorDatosGenerales', jsonData);
          // Redirigir o mostrar un mensaje de confirmación
          /*alert('Respuestas guardadas con éxito!');*/
          console.log(jsonData);
      }

      // Llama la funcion Json cuando se cumplio la validación
      convertToJson();
      window.location.href = '../pages/formPreguntasCerradas.html';
  }
});

/*function convertToJson() {
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
*/

function loadImageFromUrl() {
  const imageUrl = document.getElementById('imageUrlInput').value;
  const previewImg = document.querySelector('.preview_img');
  
  if (imageUrl) {
      previewImg.src = imageUrl;
      previewImg.onerror = function() {
          alert('No se pudo cargar la imagen. Por favor, verifica la URL.');
          // feedback.textContent = "Por favor, completa todos los campos requeridos.";
          // feedback.classList.add('text-danger');

          previewImg.src = '../assets/iconoPerfil (2).jpg'; // Restaura la imagen por defecto
      };
  } else {
    feedback.classList.add('text-danger');
  }
}


/*
// Mantén la funcionalidad existente para cargar imágenes desde el dispositivo
document.getElementById('formFileMultipleOne').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
          document.querySelector('.preview_img').src = e.target.result;
      };
      reader.readAsDataURL(file);
  }
});*/