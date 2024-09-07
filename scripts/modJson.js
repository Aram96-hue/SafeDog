//Funciones de modificacion de json objects basandome en el layout de perfil dueño

function agregarElemento(objeto, clave, valor) {
    objeto[clave] = valor;
    return objeto;
}

function modificarElemento(objeto, clave, nuevoValor) {
    if (objeto.hasOwnProperty(clave)) {
        objeto[clave] = nuevoValor;
    } else {
        console.log("La clave no existe en el objeto.");
    }
    return objeto;
}

function borrarElemento(objeto, clave) {
    if (objeto.hasOwnProperty(clave)) {
        delete objeto[clave];
    } else {
        console.log("La clave no existe en el objeto.");
    }
    return objeto;
}

function borrarTodo(objeto) {
    for (let clave in objeto) {
        if (objeto.hasOwnProperty(clave)) {
            delete objeto[clave];
        }
    }
    return objeto;
}