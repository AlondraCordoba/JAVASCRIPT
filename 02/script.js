// MARIO
kg = document.getElementById("kg");
m = document.getElementById("m");
nombre = document.getElementById("name");
// LUIGI
kg2 = document.getElementById("kg2");
m2 = document.getElementById("m2");
nombre2 = document.getElementById("name2");

imc = document.getElementById("imc");
lectura = document.getElementById("lectura");

imc2 = document.getElementById("imc2");
lectura2 = document.getElementById("lectura2");

pesoM = document.getElementById("pesoM");
estaturaM = document.getElementById("estaturaM");
imcM = document.getElementById("imcM");
muestraMN = document.getElementById("muestraMN");

pesoL = document.getElementById("pesoL");
estaturaL = document.getElementById("estaturaL");
imcL = document.getElementById("imcL");
muestraLN = document.getElementById("muestraLN");
mayor = document.getElementById("mayor");


let muestraMario = 0;
let muestraLuigi = 0;

let marioMayorIMC = false;
let luigiMayorIMC = false;

var memoria = [];
var memoria2 = [];

function calcular() {
    if (kg.value != "" && m.value != "") {

        imcx = (kg.value / (m.value * m.value));
        imc.innerHTML = imcx
        console.log(imcx);

        if (imcx < 18.5) { lectura.innerHTML = "Peso inferior al normal"; } else if (imcx >= 18.5 && imcx <= 24.9) { lectura.innerHTML = "Peso normal"; } else if (imcx >= 25 && imcx <= 29.9) { lectura.innerHTML = "Peso superior al normal"; } else if (imcx > 30) { lectura.innerHTML = "Obesidad"; }

        muestraMario++;
        Muestra = function(muestraMario, kg, m, imcx) {
            this.muestraMario = muestraMario;
            this.kg = kg.value;
            this.m = m.value;
            this.imcx = imcx;
        };

        var c = new this.Muestra(muestraMario, kg, m, imcx);
        memoria.push(c);
        console.log(memoria);

        muestraMN.innerHTML = muestraMario;
        pesoM.innerHTML = kg.value;
        estaturaM.innerHTML = m.value;
        imcM.innerHTML = imcx;


    } else {
        alert("Debes ingresar peso y altura.")
    }

};

function calcular2() {
    if (kg2.value != "" && m2.value != "") {

        imcx2 = (kg2.value / (m2.value * m2.value));
        imc2.innerHTML = imcx2
        console.log(imcx2);

        if (imcx2 < 18.5) { lectura2.innerHTML = "Peso inferior al normal"; } else if (imcx2 >= 18.5 && imcx2 <= 24.9) { lectura2.innerHTML = "Peso normal"; } else if (imcx2 >= 25 && imcx2 <= 29.9) { lectura2.innerHTML = "Peso superior al normal"; } else if (imcx2 > 30) { lectura2.innerHTML = "Obesidad"; }

        muestraLuigi++;
        Muestra = function(muestraLuigi, kg2, m2, imcx2) {
            this.muestraLuigi = muestraLuigi;
            this.kg2 = kg2.value;
            this.m2 = m2.value;
            this.imcx2 = imcx2;
        };

        var d = new this.Muestra(muestraLuigi, kg2, m2, imcx2);
        memoria2.push(d);

        console.log(memoria2);

        muestraLN.innerHTML = muestraLuigi;
        pesoL.innerHTML = kg2.value;
        estaturaL.innerHTML = m2.value;
        imcL.innerHTML = imcx2;

    } else {
        alert("Debes ingresar peso y altura.")
    }

};

function mayorIMC() {
    if (muestraMN.textContent == muestraLN.textContent) {
        if (imcM.textContent > imcL.textContent) {
            console.log("Mario tiene Mayor IMC");
            mayor.innerHTML = "Mario tiene mayor IMC";
        }

        if (imcL.textContent > imcM.textContent) {
            console.log("Luigi tiene Mayor IMC");
            mayor.innerHTML = "Luigi tiene mayor IMC";
        }
    }
}