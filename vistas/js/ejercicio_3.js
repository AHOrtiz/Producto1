// addEventListener ("se comunica el html con el js")
document.getElementById('btnAgregarArregloA').addEventListener('click', agregarArreglo);
document.getElementById('btnCalcularPotencia').addEventListener('click', CalcularPotencia);


// Variables
let arregloA = [];
let contador = 0;
let arregloB = [];

function CalcularPotencia() {

    let potencia = document.getElementById('txtNumeroPotencia').value;
    for (let i = 0; i < 3; i++) {
        arregloB[i] = Math.pow(arregloA[i], potencia);
    }
    // console.log(arregloB);
    mostrarLista();

}

function mostrarLista() {
    let h2 = document.createElement('h2');
    let lista = document.getElementById('Lista');

    h2.innerText = "Resultado de Potencia:";

    lista.appendChild(h2);
    for (let j = 0; j < 3; j++) {
        let li = document.createElement('li');
        li.innerText = arregloB[j];
        lista.appendChild(li);
    }
}

function agregarArreglo(e) {
    e.preventDefault();
    if (arregloA.length < 3) {
        let numero = document.getElementById('txtNumero').value;
        arregloA[contador] = numero;
        mostrarNumeros();
        contador = contador + 1;
        mostrarMensaje();
    } else {
        alert('llego al limite de numeros');
    }
}

// Es el mensaje que se mostrara al insertar el digito.
function mostrarMensaje() {
    let formulario = document.getElementById("formularioEjercicio3");
    const mensaje = document.createElement('p');

    mensaje.innerText = "Numero Agregado";
    mensaje.id = 'mensaje';
    mensaje.className = 'mensajeCorrecto';


    formulario.insertBefore(mensaje, document.getElementById('txtNumero'));

    setTimeout(function() {
        document.getElementById('mensaje').remove();
        let caja = document.getElementById('txtNumero');
        caja.value = "";
        caja.focus();
    }, 3000);
}

function mostrarNumeros() {
    let celda = document.getElementById('arreglosNumeros');
    var btn = document.createElement("button");

    btn.innerText = arregloA[contador];
    celda.appendChild(btn);
}