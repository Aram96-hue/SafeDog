let cuidadores = null;
//direccion de ruta json 
const url = `./json/cardsCuidadores.json`;
/********FETCH JSON FILE ************/

 // Función fetch para obtener los datos del archivo JSON
 async function obtenerData() {
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('Error en la solicitud de datos');
        const data = await res.json();
        return data.cardsCuidadores; // Devuelve la lista de cuidadores
    } catch (error) {
        console.error('Hubo un problema con la obtención de los datos:', error);
        return []; // Devuelve un array vacío en caso de error
    }
}

// Función para manipular y mostrar los datos
async function manipulacionJson() {
    const cuidadores = await obtenerData();
    const container = document.getElementById('cuidadoresCards');

    cuidadores.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('item');

        div.innerHTML = `
            <img src="${item.profile_photo}" alt="Foto de persona">
            <h3>${item.ciudad}</h3>
            <p>${item.description}</p>
        `;
        container.appendChild(div);
    });
}

// Ejecutar la función al cargar la página
document.addEventListener('DOMContentLoaded', manipulacionJson);



/******** PAGINACIÓN *********/
let actualPage = 1;
const limitNumberProducts = 6; // Número de cards a mostrar por página

const cardContainers = document.querySelectorAll('.card-container .card');
const paginationContainer = document.querySelector('.pagination');

function loadItem() {
    let beginIndex = limitNumberProducts * (actualPage - 1);
    let endIndex = limitNumberProducts * actualPage;

    cardContainers.forEach((card, index) => {
        if (index >= beginIndex && index < endIndex) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    updatePagination();
}

function updatePagination() {
    const numberOfPages = Math.ceil(cardContainers.length / limitNumberProducts);
    
    // Limpiar paginación existente.
    paginationContainer.innerHTML = ''; // Modificación

    // Botón "Previous"
    if (actualPage > 1) {
        const prev = document.createElement('li');
        prev.className = 'page-item';

        const prevLink = document.createElement('a');
        prevLink.className = 'page-link';
        prevLink.href = '#';
        prevLink.textContent = 'Previous';
        prevLink.addEventListener('click', () => changePage(actualPage - 1));

        prev.appendChild(prevLink);
        paginationContainer.appendChild(prev);
    }

    // Números de página
    for (let i = 1; i <= numberOfPages; i++) {
        const pageItem = document.createElement('li');
        pageItem.className = 'page-item';

        const pageLink = document.createElement('a');
        pageLink.className = 'page-link';
        pageLink.href = '#';
        pageLink.textContent = i;
        
        if (i === actualPage) {
            pageItem.classList.add('active');
        }

        pageLink.addEventListener('click', () => changePage(i));
        pageItem.appendChild(pageLink);
        paginationContainer.appendChild(pageItem);
    }

    // Botón "Next"
    if (actualPage < numberOfPages) {
        const next = document.createElement('li');
        next.className = 'page-item';

        const nextLink = document.createElement('a');
        nextLink.className = 'page-link';
        nextLink.href = '#';
        nextLink.textContent = 'Next';
        nextLink.addEventListener('click', () => changePage(actualPage + 1));

        next.appendChild(nextLink);
        paginationContainer.appendChild(next);
    }
}

function changePage(pageNumber) {
    actualPage = pageNumber;
    loadItem();
}

// Cargar los ítems iniciales
loadItem();

