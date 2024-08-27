/*$('#myList a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })
  
$('#myList a[href="#profile"]').tab('show') // Select tab by name
$('#myList a:first-child').tab('show') // Select first tab
$('#myList a:last-child').tab('show') // Select last tab
$('#myList a:nth-child(3)').tab('show') // Select third tab

$(function () {
    $('#myList a:last-child').tab('show')
  })

$('#someListItem').tab('show')
*/

document.getElementById("modifyBtn").addEventListener("click", function() {
  const formElements = document.querySelectorAll("#userForm input, #userForm select");
  formElements.forEach(function(element) {
    element.disabled = !element.disabled; // Toggle the disabled state
  });
});

document.getElementById("saveBtn").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent form from submitting the default way

  // Collect updated data from the form
  const updatedData = {
    nombre: document.getElementById('firstName').value,
    apellidos: document.getElementById('lastName').value,
    telefono: document.getElementById('phoneNumber1').value,
    nombreEmergencia: document.getElementById('firstName2').value,
    apellidoEmergencia: document.getElementById('lastName2').value,
    numeroEmergencia: document.getElementById('phoneNumber2').value,
    nombrePerro: document.getElementById('petName').value,
    tamanoPerro: document.querySelector('input[name="optionsRadios"]:checked').id,
    raza: document.getElementById('breed').value,
    edadAños: parseInt(document.getElementById('years').value),
    edadMeses: parseInt(document.getElementById('months').value),
    genero: document.querySelector('input[name="gender"]:checked').id,
  };
  console.log("Updated Data:", updatedData);

  // Here you could send `updatedData` back to a server, or save it locally
  // For demonstration, we just log it to the console
  alert("Data saved successfully!");
  
});

document.addEventListener('DOMContentLoaded', function() {
  fetch('../data/userProfile.json')
    .then(response => response.json())
    .then(data => {
      
      document.getElementById('username').textContent = data.nombre;
      document.getElementById('petUser').textContent = data.nombrePerro;
      document.getElementById('firstName').value = data.nombre;
      document.getElementById('lastName').value = data.apellidos;
      document.getElementById('phoneNumber1').value = data.telefono;
      document.getElementById('firstName2').value = data.nombreEmergencia;
      document.getElementById('lastName2').value = data.apellidoEmergencia;
      document.getElementById('phoneNumber2').value = data.numeroEmergencia;
      document.getElementById(data.genero).checked = true;
      document.getElementById(data.tamanoPerro).checked = true;
      document.getElementById('years').value = data.edadAños;
      document.getElementById('months').value = data.edadMeses;
      document.getElementById('petName').value = data.nombrePerro;
      document.getElementById('breed').value = data.raza;
    })
    .catch(error => console.error('Error fetching the JSON:', error));
});





