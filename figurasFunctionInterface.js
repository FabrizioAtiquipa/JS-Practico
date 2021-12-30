
function perimetroCua(lado){
    return (lado*4);
}
function areaCua(lado){
    return (lado*lado);
}


function perimetroTria(lado1, lado2, base){
    periT = Number(lado1)+Number(lado2)+ Number(base)
    return periT
}
function areaTria(base, altura){
    areaT = (Number(base)*Number(altura))/2
    return areaT
}


const pi = Math.PI;
function diametroCir( rad ){
    rpta = Number(rad * 2);
    return rpta;
}
function  perimetroCir( rad ){
    diaC = diametroCir(rad)
    rpta = Number(diaC*pi)
    return rpta;
}
function areaCir(rad) {
    rpta = Number((rad * rad)*pi)
    return rpta;
}

function alturaTrianguloIsosceles(lado1, lado2, base){
    altura = Math.sqrt(
        (lado1*lado2) -
        (Math.pow(base,2)/4)
    );
    return altura;
}


//CUADRADO
function calcularpeimetro(){
    var input = document.getElementById("InputCuadrado");
    var valueinput = input.value;
    const perimetro = perimetroCua(valueinput)
    alert(perimetro)
}
function calculararea(){
    var input = document.getElementById("InputCuadrado");
    var valueinput = input.value;
    const area = areaCua(valueinput)
    alert(area)
}
//TRIANGULO
function calcularpeimetroTriangulo(){
    var input1 = document.getElementById("Lado1Triangulo");
    var valueinput1 = input1.value;

    var input2 = document.getElementById("Lado2Triangulo");
    var valueinput2 = input2.value;

    var input3 = document.getElementById("BaseTriangulo");
    var valueinput3 = input3.value;

    const perimetro = perimetroTria(valueinput1, valueinput2, valueinput3)
    alert(perimetro)
}
function calcularareaTriangulo(){
    var input1 = document.getElementById("BaseTriangulo");
    var valueinput1 = input1.value;

    var input2 = document.getElementById("AlturaTriangulo");
    var valueinput2 = input2.value;


    const area = areaTria(valueinput1, valueinput2)
    alert(area)
}
//CIRCULO
function calculardiametroCirculo(){
    var input = document.getElementById("RadioCirculo");
    var valueinput = input.value;
    const diametro = diametroCir(valueinput)
    alert(diametro)
}
function calcularpeimetroCirculo(){
    var input = document.getElementById("RadioCirculo");
    var valueinput = input.value;
    const perimetro = perimetroCir(valueinput)
    alert(perimetro)
}
function calcularareaCirculo(){
    var input = document.getElementById("RadioCirculo");
    var valueinput = input.value;
    const area = areaCir(valueinput)
    alert(area)
}
//TRIANGULO ISOSCELES
function calcularalturaTriangulo(){
    var input1 = document.getElementById("Lado1TrianguloIso");
    var valueinput1 = input1.value;

    var input2 = document.getElementById("Lado2TrianguloIso");
    var valueinput2 = input2.value;

    var input3 = document.getElementById("BaseTrianguloIso");
    var valueinput3 = input3.value;

    if(valueinput1 == valueinput2){
        const altura = alturaTrianguloIsosceles(valueinput1, valueinput2, valueinput3)
        alert(altura)
    }
    else{
        const alerta = "Los lados no corresponden a un triagulo isosceles"
        alert(alerta)
    }
}

