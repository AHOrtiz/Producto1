// Variables
let arregloMatriz = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];
let arregloFila = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

let contadorHorizontal = 0;
let contadorVertical = 0;
// FIN Variables

// Eventos
document.getElementById('btnAgregarMatriz').addEventListener('click', agregarNumero);
document.getElementById('btnObtenerDeterminante').addEventListener('click', obtenerDeterminante);
document.getElementById('btnMostrar').addEventListener('click', mostrar);
document.getElementById('btnMostrarMatriz').addEventListener('click', Mostrar);
// FIN Eventos

function Mostrar() {
    let tabla = document.getElementById("tabla1");
    for (let x = 3; x < 5; x++) //renglon
    {
        const renglon = document.createElement('tr');
        renglon.id = "ren" + x;
        tabla.appendChild(renglon);
        for (let y = 0; y < 3; y++) //Columna
        {
            var celda = document.createElement('td');
            celda.id = "celda(" + x + y + ")";
            ren = document.getElementById("ren" + x);
            ren.appendChild(celda);


            var btn = document.createElement("button");
            btn.style.width = "100%";
            btn.style.background = "#e6f8f9";
            btn.innerText = arregloFila[x][y];
            celda.appendChild(btn);

        }

    }
    console
}

function agregarNumero(e) {
    e.preventDefault();

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            arregloMatriz[i][j] = parseInt(prompt(`Ingresa el valor [${i}][${j}]`))
        }
    }
    // console.log("arregloMatriz", arregloMatriz);


}

function obtenerDeterminante() {
    arregloFila = arregloMatriz;
    arregloFila[3] = [0, 0, 0];
    arregloFila[4] = [0, 0, 0];

    // console.log("Nuevo Formato", arregloB);

    let contador = 0;
    for (let fila = 3; fila < 5; fila++) {
        for (let columna = 0; columna < 3; columna++) {
            arregloFila[fila][columna] = arregloMatriz[contador][columna];
        }
        contador = contador + 1;
    }


    console.log("arreglofila Final", arregloFila);
    let b = arregloMatriz[0][0] * arregloMatriz[1][1] * arregloMatriz[2][2];
    console.log(b);
    let c = arregloMatriz[1][0] * arregloMatriz[2][1] * arregloMatriz[3][2];
    console.log(c);
    let d = arregloMatriz[2][0] * arregloMatriz[3][1] * arregloMatriz[4][2];
    console.log(d);
    console.log("La suma del primer bloque", (b + c + d));

    let p = arregloMatriz[0][2] * arregloMatriz[1][1] * arregloMatriz[2][0];
    console.log(p);
    let f = arregloMatriz[1][2] * arregloMatriz[2][1] * arregloMatriz[3][0];
    console.log(f);
    let g = arregloMatriz[2][2] * arregloMatriz[3][1] * arregloMatriz[4][0];
    console.log(g);
    console.log("La suma del segunda bloque", -(p + f + g));

    let resultado = (b + c + d) - (p + f + g);
    console.log("La determinente es :", resultado);

    alert(resultado);

}

function mostrar() {
    let tabla = document.getElementById("tabla");
    for (let x = 0; x < 3; x++) //renglon
    {
        const renglon = document.createElement('tr');
        renglon.id = "ren" + x;
        tabla.appendChild(renglon);
        for (let y = 0; y < 3; y++) //Columna
        {
            var celda = document.createElement('td');
            celda.id = "celda(" + x + y + ")";
            ren = document.getElementById("ren" + x);
            ren.appendChild(celda);



            var btn = document.createElement("button");
            btn.style.width = "100%";
            btn.style.background = "#ffdfdf";
            btn.innerText = arregloMatriz[x][y];
            celda.appendChild(btn);

        }

    }



}