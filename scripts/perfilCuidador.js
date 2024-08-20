function convertToJson(){
    let form = document.getElementById("form-cont-review");
    let formData = {}
    
    let userName = document.getElementById("userName");
    let cuidadorName = document.getElementById("cuidadorName");
    formData[cuidadorName.id] = cuidadorName.innerHTML;
    formData[userName.id] = userName.innerHTML;
    

    for (let i = 0; i < form.elements.length; i++) {
        let element = form.elements[i];
        if(element.type !== "submit"){
            if(element.type === "radio"){
                if(element.checked){
                    formData[element.name] = element.value;
                }
            } else {
                formData[element.name] = element.value;
            }
        }
    }
    let jsonData = JSON.stringify(formData);
    localStorage.setItem("cuidadorReview", jsonData);
    console.log(jsonData);
}

document.getElementById("form-cont-review").addEventListener("submit", function (event) {
    event.preventDefault();
    let radios = document.querySelectorAll('input[name="stars"]');
    let isChecked = Array.from(radios).some(radio => radio.checked);
    let review = document.getElementById("review-text").value;
    if(!isChecked) return;
    convertToJson();
});