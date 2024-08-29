

// Toggle form fields
document.getElementById("modifyBtn").addEventListener("click", function () {
  const formElements = document.querySelectorAll("#userForm input, #userForm select");
  formElements.forEach(function (element) {
    element.disabled = !element.disabled; // Toggle the disabled state
  });
});

// Function to display error messages
function showError(inputId, message) {
  let errorElement = document.getElementById(inputId + "-error");

  if (!errorElement) {
    errorElement = document.createElement("div");
    errorElement.id = inputId + "-error";
    errorElement.style.color = "red";
    errorElement.style.fontSize = "12px";
    errorElement.className = "error-message";
    document.getElementById(inputId).parentNode.appendChild(errorElement);
  }

  errorElement.textContent = message;
}

// Function to clear error messages
function clearErrors() {
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach(function (error) {
    error.textContent = "";
  });
}

// Validation function
function validateForm() {
  let isValid = true;
  clearErrors(); // Clear previous errors

  // Validate name fields (only letters allowed)
  const nameFields = [
    { id: "firstName", label: "Nombre" },
    { id: "lastName", label: "Apellido" },
    { id: "petName", label: "Nombre de Mascota" }
  ];

  nameFields.forEach(field => {
    const value = document.getElementById(field.id).value;
    if (value && !/^[a-zA-Z\s]+$/.test(value)) {
      isValid = false;
      showError(field.id, `El campo ${field.label} solo debe contener letras.`);
    }
  });

  // Validate phone fields (only numbers, max 10 digits)
  const phoneFields = [
    { id: "phoneNumber1", label: "Teléfono" },
    { id: "phoneNumber2", label: "Teléfono de Emergencia" }
  ];

  phoneFields.forEach(field => {
    const value = document.getElementById(field.id).value;
    if (value && !/^\d{1,10}$/.test(value)) {
      isValid = false;
      showError(field.id, `El campo ${field.label} solo debe contener números y un máximo de 10 dígitos.`);
    }
  });

  return isValid;
}

// Save data with validations
document.getElementById("saveBtn").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form from submitting the default way

  // Check form validity
  if (!validateForm()) {
    return;
  }

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

// Load data from JSON
document.addEventListener('DOMContentLoaded', function () {
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
      document.getElementById('petUser').value = data.nombrePerro;
      document.getElementById('breed').value = data.raza;
    })
    .catch(error => console.error('Error fetching the JSON:', error));
});




