let array = [1,2,3,4,5,6,7,8,9,10];
let array2 = ["Enero","Febrero","Marzo"];
let arrayVacio = [];

function eliminarUltimo(array) {
    if(Object.prototype.toString.call(array) !== '[object Array]' || array.length === 0) {
        alert("no se puede ejecutar");
    } else {
        console.log("Elemento eliminado: ", array.pop());
    }
    
}

eliminarUltimo(array2);