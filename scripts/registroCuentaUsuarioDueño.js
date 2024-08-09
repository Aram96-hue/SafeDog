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
}