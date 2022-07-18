// LEYENDO LOS CLICKS DEL MOUSE
window.addEventListener(`load`, ()=> {
    const display = document.querySelector(`.calculadora-display`);
    const keypadButtons = document.getElementsByClassName(`keypad-button`);
    const botonesArray = Array.from(keypadButtons)
    botonesArray.forEach((boton)=> {
        boton.addEventListener(`click`, ()=>{
            calculadora(boton, display);
        })
    })
})
// LEYENDO EL TECLADO
document.addEventListener(`keydown`, function(event) {
    let presionar = event.keyCode;
// NUMEROS DE TECLADO Y KEYPAD    
    if (presionar > 95 && presionar < 112 || presionar < 58 && presionar > 47) { 
        let number = event.key;
        let visor = document.querySelector(`.calculadora-display`);
        if(visor.innerHTML == 0) {
            visor.innerHTML = '';
        }
        visor.innerHTML += number;
    }
// TECLA ENTER
    else if (presionar == 13) {
        let enter = document.querySelector(`.calculadora-display`);
        enter.innerHTML = eval(enter.innerHTML);
    }
// TECLA BORRAR
    else if (presionar == 8) {
        let borra = document.querySelector(`.calculadora-display`);
        let pantalla = borra.innerHTML;
        pantalla = pantalla.substring(0, pantalla.length -1);
        if(pantalla == '') {
        pantalla = 0;
        }
        borra.innerHTML = pantalla;
    }
// TECLA ESCAPE
    else if (presionar == 27) {
        let limpiarPantalla = document.querySelector(`.calculadora-display`);
        limpiarPantalla.innerHTML = 0;
    }
})

// SI SE TOCA ESTAS TECLAS
function calculadora(boton, display) {
    switch (boton.innerHTML) {
        case `C`:
            borrar(display);
            break;
        case `=`:
            calcular(display);
            break;
        case `←`:
            retroceder(display);
            break;
        case `%`:
            porciento(display);
            break;
        default:
            actualizar(display, boton);
            break
    }
}

// PORCENTAJE
function porciento(display) {
    let numero = display.innerHTML;
    let num1 = parseFloat(numero);
    let cantidadNumeroUno = num1.toString().length;
    cantidadNumeroUno ++
    let newnumero = numero.slice(cantidadNumeroUno);
    let dividir = newnumero / 100;
    let sacarPorciento = (num1 * dividir) + num1;
    display.innerHTML = sacarPorciento;
}

// BORRADO 1 EN 1
function retroceder(display) {
    let ingreso = display.innerHTML;
    ingreso = ingreso.substring(0, ingreso.length -1);
    if(ingreso == '') {
        ingreso = 0;
    }
    display.innerHTML = ingreso;
    
}

// BORRAR TODO
function borrar(display) {
    display.innerHTML = 0;
}

// CALCULO
function calcular(display) {
    display.innerHTML = eval(display.innerHTML);
}

// INGRESO DE DATOS EN EL DISPLAY
function actualizar(display, boton) {
    if(display.innerHTML == 0) {
        display.innerHTML = '';
    }
    display.innerHTML += boton.innerHTML;
}






