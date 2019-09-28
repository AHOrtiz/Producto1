document.getElementById('btnArregloG').addEventListener('click', LlenarArregloG);
document.getElementById('btnCalculaRaiz').addEventListener('click', CalcularRaiz);

//Variables
let arreglog = [];
let arregloh = [];
let contador_10 = 0;

function CalcularRaiz() {
    for (let x = 0; x < 3; x++) {
        let resultado = Math.sqrt(arreglog[x]);
        arregloh[x] = resultado;
    }
    showList_10();
}

function showList_10() {
    let h2 = document.createElement('h2');
    let lista = document.getElementById('lista');

    h2.innerText = "Resultado de la Raiz:";

    lista.appendChild(h2);
    for (let j = 0; j < 3; j++) {
        let li = document.createElement('li');
        li.innerText = arregloh[j];
        lista.appendChild(li);
    }
}

function LlenarArregloG(e) {
    e.preventDefault();
    if (arreglog.length < 3) {
        let numero = document.getElementById('txtNumero1').value;
        arreglog[contador_10] = numero;
        showNumbers_10();
        contador_10 = contador_10 + 1;
        showMessage_10();
    } else {
        alert('llego al limite de numeros');
    }

}

function showMessage_10() {
    let formulario = document.getElementById("formularioEjercicio10");
    const mensaje = document.createElement('p');

    mensaje.innerText = "Numero Agregado";
    mensaje.id = 'mensaje';
    mensaje.className = 'mensajeCorrecto';

    formulario.insertBefore(mensaje, document.getElementById('txtNumero1'));

    setTimeout(function() {
        document.getElementById('mensaje').remove();
        let caja = document.getElementById('txtNumero1');
        caja.value = "";
        caja.focus();
    }, 3000);
}

function showNumbers_10() {
    let celda = document.getElementById('Ejercicio10');
    var btn = document.createElement("button");

    btn.innerText = arreglog[contador_10];
    celda.appendChild(btn);
}