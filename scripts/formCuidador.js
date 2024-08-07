function convertToJson() {
  let form = document.getElementById("form-cuidador-uno");
  let formData = {};
  for (let i = 0; i < form.elements.length; i++) {
    let element = form.elements[i];
    if (element.type !== "submit" && element.type !== "button") {
      formData[element.name] = element.value;
    }
  }
  let jsonData = JSON.stringify(formData);
  console.log(jsonData);
}
