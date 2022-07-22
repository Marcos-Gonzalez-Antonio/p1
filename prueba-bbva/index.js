

let resta = 0;
const arr = [];
function seleccionarProducto() {

    select = document.getElementById("productoSeleccionado").value;

    if (select == '1') {
        select = "A"
        precio = 270;
    }
    if (select == '2') {
        select = "B"
        precio = 340;
    }
    if (select == 3) {
        select = "C"
        precio = 390;
    }
    arr.push(...select);
    console.log(arr)

}
function nombre(){
    nombreUser = document.getElementById("nombreUser").value;
}
function validarDinero() {

    document.getElementById('nombreUser').setAttribute("disabled", "disabled");
    document.getElementById('productoSeleccionado').setAttribute("disabled", "disabled");


    let dinero = Number(document.getElementById("efectivo").value);
    if (dinero == 10 || dinero == 50 || dinero == 100) {
        console.log(dinero, 'jfjfj')
        resta = (resta + dinero)
        document.getElementById("efectivo").value = "";
        alert(resta)
    

        if (resta > precio) {
            darCambio()
        }
    } else {
        alert('Intente solo con monedas de 10, 50 y 100')
        document.getElementById("efectivo").value = "";
    }

}




function darCambio() {
    let cambio = (resta - precio)
    document.getElementById('btn-pagar').setAttribute("disabled", "disabled");
    document.getElementById('efectivo').setAttribute("disabled", "disabled");
    while (cambio > 0) {
        
        if (cambio > 100) {
            alert(' su cambio es: 100  ')
            cambio = (cambio - 100)

        } else if
            (cambio > 50) {
            alert( ' su cambio es: 50')
            cambio = (cambio - 50)

        } else {
            cambio = (cambio - 10)
            alert(' su cambio es: 10')

        }
    }
}

function activaCampos() {
    resta = 0;
    document.getElementById('productoSeleccionado').disabled = false;
    document.getElementById('btn-pagar').disabled = false;
    document.getElementById('efectivo').disabled = false;
    
}

function finalizarCompra(){
    alert(nombreUser.value + " " + "los productos adquiridos en esta maquina son" + " " + arr+ ""  
    +"Gracias por su compra!!!");
    document.getElementById('nombreUser').disabled = false;
    document.getElementById('productoSeleccionado').disabled = false;
    document.getElementById('btn-pagar').disabled = false;
    document.getElementById("nombreUser").value = "";
}

