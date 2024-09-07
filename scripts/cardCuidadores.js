let cuidadores = null; 
const url = `../json/cardsCuidadores.json`;

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
async function manipulacionJson(ciudad = 'Todas') { 
    cuidadores = await obtenerData(); // Se asume que esta variable global se usa en paginación
    const container = document.getElementById('cuidadoresCards');
    container.innerHTML = ''; 

    console.log(cuidadores); // Verifica que tienes los datos correctos

    // Filtrar por ciudad si se seleccionó una, incluyendo la opción "Todas"
    const cuidadoresFiltrados = ciudad === 'Todas' ? 
        cuidadores : 
        cuidadores.filter(item => item.ciudad.toLowerCase() === ciudad.toLowerCase());

    // Mostrar cards filtradas
    cuidadoresFiltrados.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('item');

        div.innerHTML = `
         <a href="perfilCuidador.html?id=${item.id}">
         <div class="image-container">
            <img src="${item.profile_photo}" alt="Foto de persona">
        </div>
            <h2 class=Nombre>${item.nombre}</h2>
            <h4 class=Ciudad>${item.ciudad}</h4>
            <p class=Descripcion>${item.description}</p>
        `;
        container.appendChild(div);
    });

    // Reiniciar la página actual y actualizar la paginación después de manipular los datos
    actualPage = 1;
    loadItem();
    updatePagination();
}

// Event listener para el dropdown
document.getElementById('ciudad').addEventListener('change', function() {
    const ciudadSeleccionada = this.value;
    manipulacionJson(ciudadSeleccionada);
});

// Llamada inicial para cargar todos los cuidadores por defecto
document.addEventListener('DOMContentLoaded', () => {
    // Configura el dropdown para mostrar "Todas" por defecto
    document.getElementById('ciudad').value = 'Todas';
    manipulacionJson('Todas');
});

// Paginación
let actualPage = 1;
const limitNumberProducts = 6; // Número de cards a mostrar por página
let cardContainers = [];

function loadItem() {
    cardContainers = document.querySelectorAll('#cuidadoresCards .item');

    let beginIndex = limitNumberProducts * (actualPage - 1);
    let endIndex = limitNumberProducts * actualPage;

    console.log('Loading items from', beginIndex, 'to', endIndex); // Verifica el rango de los items

    cardContainers.forEach((card, index) => {
        if (index >= beginIndex && index < endIndex) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function updatePagination() {
    const numberOfPages = Math.ceil(cardContainers.length / limitNumberProducts);
    
    // Limpiar paginación existente.
    const paginationContainer = document.querySelector('.pagination');
    paginationContainer.innerHTML = ''; // Modificación

    console.log('Updating pagination for', numberOfPages, 'pages'); // Verifica el número de páginas

    // Botón "Previous"
    if (actualPage > 1) {
        const prev = document.createElement('li');
        prev.className = 'page-item';

        const prevLink = document.createElement('a');
        prevLink.className = 'page-link';
        prevLink.href = '#';
        prevLink.textContent = 'Anterior';
        prevLink.addEventListener('click', (e) => {
            e.preventDefault(); // Prevenir el comportamiento por defecto del enlace
            changePage(actualPage - 1);
        });

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

        pageLink.addEventListener('click', (e) => {
            e.preventDefault(); // Prevenir el comportamiento por defecto del enlace
            changePage(i);
        });
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
        nextLink.textContent = 'Siguiente';
        nextLink.addEventListener('click', (e) => {
            e.preventDefault(); // Prevenir el comportamiento por defecto del enlace
            changePage(actualPage + 1);
        });

        next.appendChild(nextLink);
        paginationContainer.appendChild(next);
    }
}

function changePage(pageNumber) {
    actualPage = pageNumber;
    loadItem();
    updatePagination();
}