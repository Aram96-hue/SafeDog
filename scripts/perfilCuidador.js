const itemsPerPage = 3;
const maxButtons = 6;
let currentPage = 1;

function calculateStars() {}

function createStars(stars) {
  let starsNumber = stars;
  const starsContainer = document.createElement("div");
  starsContainer.className = "star--content--review";
  for (let i = 1; i <= 5; i++) {
    const starContainer = document.createElement("ion-icon");
    if (starsNumber > 0) {
      starContainer.setAttribute("name", "star");
    } else {
      starContainer.setAttribute("name", "star-outline");
    }
    starContainer.classList.add("star-icon");
    starsNumber--;
    starsContainer.appendChild(starContainer);
  }
  return starsContainer;
}

// Por el momento se supone la obtención de objetos JSON
// Aqui va el código para recuperar los datos del cuidador y generar la página web

// Aqui va el código para recuperar los datos del usaurio logueado

// Aqui va el código para recuperar las reseñas del cuidador
// Sustituir la ruta del fetch con la ruta del JSON real
function generateReviews() {
  fetch("../json/reviewsCuidador.json")
    .then((response) => response.json())
    .then((data) => {
      createReview(data);
      createPagination(data);
    })
    .catch((error) => console.error(error));
}

function createReview(data) {
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const reviewsToDisplay = data.slice(start, end);
  const reviewList = document.getElementById("reviews-list");
  reviewList.innerHTML = "";
  reviewsToDisplay.map((review) => {
    const reviewContainer = document.createElement("div");
    const reviewUserName = document.createElement("h3");
    const starsContainer = document.createElement("div");
    const starsTile = document.createElement("p");
    const stars = createStars(review.stars);
    const reviewText = document.createElement("p");

    reviewUserName.innerText = `${review.userName}`;
    starsTile.innerText = "Calificación: ";
    reviewText.innerText = `${review.review}`;

    reviewUserName.classList.add("heading-four");
    starsTile.classList.add("review--text");
    reviewText.classList.add("review--all");
    starsContainer.classList.add("calification--review");
    reviewContainer.classList.add("reviews--container");

    starsContainer.appendChild(starsTile);
    starsContainer.appendChild(stars);
    reviewContainer.appendChild(reviewUserName);
    reviewContainer.appendChild(starsContainer);
    reviewContainer.appendChild(reviewText);
    reviewList.appendChild(reviewContainer);
    console.log(reviewList);
  });
}

function createPagination(data) {
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const pagination = document.getElementById("review-pagination");
  pagination.innerHTML = "";
  if (totalPages <= maxButtons) {
    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement("button");
      button.classList.add("btn");
      button.classList.add("btn--form");
      button.classList.add("btn--shadow");
      button.innerText = i;
      button.disabled = i === currentPage;
      button.addEventListener("click", () => {
        currentPage = i;
        createReview(data);
        createPagination(data);
      });
      pagination.appendChild(button);
    }
  } else {
    const prevButton = document.createElement("button");
    prevButton.classList.add("btn");
    prevButton.classList.add("btn--form");
    prevButton.classList.add("btn--shadow");
    prevButton.classList.add("btn--help");
    prevButton.innerText = "Anterior";
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        createReview(data);
        createPagination(data);
      }
    });
    pagination.appendChild(prevButton);

    const maxPages = 5;
    const startPage = Math.max(1, currentPage - Math.floor(maxPages / 2));
    const endPage = Math.min(totalPages, startPage + maxPages - 1);
    for (let i = startPage; i <= endPage; i++) {
      const button = document.createElement("button");
      button.classList.add("btn");
      button.classList.add("btn--form");
      button.classList.add("btn--shadow");
      button.classList.add("btn--help");
      button.innerText = i;
      button.disabled = i === currentPage;
      button.addEventListener("click", () => {
        currentPage = i;
        createReview(data);
        createPagination(data);
      });
      pagination.appendChild(button);
    }

    const nextButton = document.createElement("button");
    nextButton.classList.add("btn");
    nextButton.classList.add("btn--form");
    nextButton.classList.add("btn--shadow");
    nextButton.classList.add("btn--help");
    nextButton.innerText = "Siguiente";
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener("click", () => {
      if (currentPage < totalPages) {
        currentPage++;
        createReview(data);
        createPagination(data);
      }
    });
    pagination.appendChild(nextButton);
  }
}

function convertToJson() {
  let form = document.getElementById("form-cont-review");
  let formData = {};

  let userName = document.getElementById("userName");
  let cuidadorName = document.getElementById("cuidadorName");
  formData[cuidadorName.id] = cuidadorName.innerText;
  formData[userName.id] = userName.innerText;

  for (let i = 0; i < form.elements.length; i++) {
    let element = form.elements[i];
    if (element.type !== "submit") {
      if (element.type === "radio") {
        if (element.checked) {
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

generateReviews();

document
  .getElementById("form-cont-review")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let radios = document.querySelectorAll('input[name="stars"]');
    let isChecked = Array.from(radios).some((radio) => radio.checked);
    let review = document.getElementById("review-text").value;
    if (!isChecked) return;
    convertToJson();
  });