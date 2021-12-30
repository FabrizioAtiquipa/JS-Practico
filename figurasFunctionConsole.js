/*
Encapsula los console
    console.group("nombre que desees");
    console.groupEnd();
*/


//CUADRADO
/*
    const ladoCuadrado = prompt("Ingrese el lado del cuadrado");
    function perimetroCua(lado){
        console.log("El perimetro del cuadrado es "+lado*4);
    }
    function areaCua(lado){
        console.log("El area del cuadrado es " + lado*lado);
    }
    perimetroCua(ladoCuadrado);
    areaCua(ladoCuadrado);
*/

//TRIANGULO
/*
    var oper = prompt("Que tipo de operacion ara");
    if (oper == "perimetro"){
        const ladoTriangulo1 = prompt("Ingrese el 1° lado del triangulo");
        const ladoTriangulo2 = prompt("Ingrese el 2° lado del triangulo");
        const baseTriangulo = prompt("Ingrese base del triangulo");

        function perimetroTria(lado1, lado2, base){
            periT = Number(lado1)+Number(lado2)+ Number(base)
            console.log("El perimetro del triangulo " + periT )
        }
        perimetroTria(ladoTriangulo1, ladoTriangulo2, baseTriangulo)
    }
    else {
        const alturaTriangulo = prompt("Ingrese altura del triangulo");
        const baseTriangulo = prompt("Ingrese base del triangulo");

        function areaTria(base, altura){
            areaT = (Number(base)*Number(altura))/2
            console.log("El area del triangulo " + areaT )
        }
        areaTria(baseTriangulo, alturaTriangulo)
    }
*/

//CIRCULO

var  pi = Math.PI;
var radio = prompt("Ingrese el radio");


function diametroCir( rad ){
    rpta = Number(rad * 2);
    return rpta;
}

console.log("El diametro del circulo es " + diametroCir(radio));

function  perimetroCir( diaC ){
    rpta = Number(diaC*pi)
    console.log("El perimetro del circulo es " + rpta)
}
perimetroCir(diametroCir(radio));

/*
OTRA FORMA
    function  perimetroCir( rad ){
    diaC = diametroCir(rad)
    rpta = Number(diaC*pi)
    console.log("El perimetro del circulo es " + rpta)
    }
    perimetroCir(radio);
*/




function areaCir(rad) {
    rpta = Number((rad * rad)*pi)
    console.log("El area del circulo es " + rpta)
}

areaCir(radio);











