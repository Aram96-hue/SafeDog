function convertToJson() {
  let form = document.getElementById("myForm");
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
  window.location.href = './cardCuidadores.html';
}


function loadImageFromUrldueño() {
  const imageUrl = document.getElementById('imagenDueño').value;
  const previewImg = document.querySelector('.imagenDueño');

  if (imageUrl) {
      previewImg.src = imageUrl;
      previewImg.onerror = function() {
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
      previewImg.onerror = function() {
          alert('No se pudo cargar la imagen. Por favor, verifica la URL.');
          previewImg.src = '../assets/foto-mascota.jpg'; // Restaura la imagen por defecto
      };
  } else {
    feedback.classList.add('text-danger');
  }
}


