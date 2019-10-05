let arregloMatrizA = [];


document.getElementById('btnComprobar').addEventListener('click', comprobar);
document.getElementById('btnMostrarA').addEventListener('click', MostrarMatriz);

let contadorA = 0;

function comprobar() {
    arregloMatrizA = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ]


    for (let i = 0; i < 3; i++) {
        for (let x = 0; x < 3; x++) {
            let numero = parseInt(prompt(`Ingresa el valor [${i}][${x}]`));
            console.log(numero);
            arregloMatrizA[i][x] = numero;
            if (numero == 0) {
                console.log('entre');
                contadorA = contadorA + 1;
            }

        }
    }

    if (contadorA == 9) {
        console.log('tu matriz es nula');
        alert('Tu matriz es nula');
    } else { alert('tu matriz no es nula') }
}

function MostrarMatriz() {
    let tabla = document.getElementById("tabla2");

    for (let x = 0; x < 3; x++) //renglon
    {
        const renglon = document.createElement('tr');
        renglon.id = "ren" + x;
        tabla.appendChild(renglon);
        for (let y = 0; y < 3; y++) //Columna
        {
            var celda = document.createElement('td');
            celda.id = "celda(" + x + y + ")";
            let ren = document.getElementById("ren" + x);
            ren.appendChild(celda);


            var btn = document.createElement("button");
            btn.style.width = "100%";
            btn.style.background = "#e6f8f9";

            btn.innerText = arregloMatrizA[x][y];
            celda.appendChild(btn);

        }

    }

}