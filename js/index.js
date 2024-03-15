
var tablero = {
    "00": 0,
    "01": 0,
    "02": 0,
    "03": 0,
    "10": 0,
    "11": 0,
    "12": 0,
    "13": 0,
    "20": 0,
    "21": 0,
    "22": 0,
    "23": 0,
    "30": 0,
    "31": 0,
    "32": 0,
    "33": 0,
};

function celdasVacias() {
    let arrayCeldasVacias = [];
    for (const key in tablero) {
        if (tablero[key] == 0) {
            arrayCeldasVacias.push(key);
        }
    }
    return arrayCeldasVacias;
}

function celdaAleatoria(celdas) {
    let pos = Math.floor(Math.random() * celdasVacias().length);
    return celdas[pos];
}

function nuevoNumero() {
    let celdasLibres = celdasVacias();
    let nuevaPos = celdaAleatoria(celdasLibres);
    tablero[nuevaPos] = valorAleatorio();

}

function valorAleatorio() {
    //operador ternario
    return Math.random() < 0.9 ? 2 : 4;
}

function rellenarTablero() {
    for (const key in tablero) {
        if (tablero[key] != 0) {
            document.getElementById(key).innerHTML = tablero[key];
        } else {
            document.getElementById(key).innerHTML = "";
        }
    }
}
function comprobarColumna(col) {
    //return tablero[String(col)+"0"]=="0"|| tablero[String(col)+"1"]==0 || tablero[String(col)+"2"]=="0" || tablero[String(col)+"0"]==tablero[String(col)+"1"] ||tablero[String(col)+"1"]==tablero[String(col)+"2"] || tablero[String(col)+"2"]==tablero[String(col)+"3"]
}

function desplazarArriba() {

    let posU = "", posD = "";

    for (let j = 0; j <= 3; j++) {
        for (let index = 0; index <= 2; index++) {
            posU = String(j) + index;
            posD = String(j) + (index + 1);
            if (tablero[posU] == tablero[posD] || tablero[posU] == 0) {
                seguir = true;
                tablero[posU] += tablero[posD];
                tablero[posD] = 0;
            }
        }
        rellenarTablero()


    }

}
function desplazarAbajo() {

    let posU = "", posD = "";

    for (let j = 0; j <= 3; j++) {
        for (let index = 3; index >= 1; index--) {
            posD = String(j) + index;
            posU = String(j) + (index - 1);
            if (tablero[posU] == tablero[posD] || tablero[posD] == 0) {
                tablero[posD] += tablero[posU];
                tablero[posU] = 0;
            }
        }
        rellenarTablero()


    }

}

document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "ArrowUp":
            for (let index = 0; index < 4; index++) {
                desplazarArriba();
                rellenarTablero()    
            }
            nuevoNumero()
            rellenarTablero()

            break;
        case "ArrowDown":
            for (let index = 0; index < 4; index++) {
                desplazarAbajo();
                rellenarTablero()    
            }
            nuevoNumero()
            rellenarTablero()
            break
        case "ArrowLeft":
            console.log("Tecla izquierda presionada");
            // Agrega aquí el código para el evento de tecla izquierda
            break;
        case "ArrowRight":
            console.log("Tecla derecha presionada");
            // Agrega aquí el código para el evento de tecla derecha
            break;
    }
});


/************************* */
nuevoNumero();
nuevoNumero();
rellenarTablero();