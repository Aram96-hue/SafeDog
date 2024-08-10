document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    

    let form = document.getElementById("myForm");
    let isValid = form.checkValidity();

    let feedbackDiv = document.getElementById("formFeedback");

    if (!isValid) {
        feedbackDiv.textContent = "Por favor, complete los campos requeridos.";
        feedbackDiv.style.color = "red";
        form.classList.add("was-validated");
    } else {
        feedbackDiv.textContent = "Información enviada con éxito.";
        feedbackDiv.style.color = "green";
    }
});




