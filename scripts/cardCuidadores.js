let cuidadores = null;
//direccion de ruta json 
const url = `../json/cardsCuidadores.json`;
//funcion fetch para pedir que muestre los archivos en tipo json 
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
                 <h2 id=Ciudad>${item.nombre}</h2>
            <h4 id=Ciudad>${item.ciudad}</h4>
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



/*PAGINACION PAGINACION*/
/*let actualPage = 1;
let limitNumberProducts = 6;
let listPagination = document.querySelectorAll('.list .item');

function loadItem(){
    let beginGet = limit * (actualPage -1);
    let endGet = limit * actualPage-1;
    listPagination.forEach((item, key)=>{
        if(key >= beginGet && key <= endGet){
            item.style.display = 'block';
        } else{
            item.style.display = 'none';
        }
    })
    listPage();
}

loadItem();

function listPage(){
    let numberOfPages = Math.ceil(list.length/limit);
    document.querySelector('.listPage').innerHTML='';

    if(actualPage !=1){
        let prev = document.createElement('li');
        prev.innerText = 'PREV';
        prev.setAttribute('onclick', "changePage("+(actualPage-1)+")");
        document.querySelector('.actualPage').appendChild(prev);
    }

    for(i=1; i<numberOfPages; i++){
        let newPage = document.createElement('li')
        newPage.innerText = i;
        if(i == actualPage){
            newPage.classList.add('active'); 
        }
        newPage.setAttribute('onclick', "changePage(" + i +")"); 
        document.querySelector('.actualPage').appendChild(newPage); 
    }

    if( actualPage !=count){
        let next= document.createElement('li');
        next.innerText = 'NEXT';
        next.setAttribute('onclick', "changePage("+(actualPage-1)+")");
        document.querySelector('.actualPage').appendChild(next);
    }
}

function changePage(i){
    actualPage = i;
    loadItem();
}*/