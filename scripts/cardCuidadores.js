let actualPage = 1;
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
}