/* Ventanilla 1 Categoria Mantencion */
const abrir1 = document.querySelector("#imgMantencion");
const model1 = document.querySelector("#model15");
const cerrar1 = document.querySelector("#btnCerrar1");

const abrirVentana1 = () => {
    model1.showModal();
}

const cerrarVentana1 = () => {
    model1.close();
}

abrir1.addEventListener("click", abrirVentana1)

cerrar1.addEventListener("click", cerrarVentana1)

/* Ventanilla 2 Categoria Reparacion */
const abrir2 = document.querySelector("#imgReparacion");
const model2 = document.querySelector("#model16");
const cerrar2 = document.querySelector("#btnCerrar2");

const abrirVentana2 = () => {
    model2.showModal();
}

const cerrarVentana2 = () => {
    model2.close();
}

abrir2.addEventListener("click", abrirVentana2)

cerrar2.addEventListener("click", cerrarVentana2)

/* Ventanilla 3 Categoria Tunning */
const abrir3 = document.querySelector("#imgTunning");
const model3 = document.querySelector("#model17");
const cerrar3 = document.querySelector("#btnCerrar3");

const abrirVentana3 = () => {
    model3.showModal();
}

const cerrarVentana3 = () => {
    model3.close();
}

abrir3.addEventListener("click", abrirVentana3)

cerrar3.addEventListener("click", cerrarVentana3)

/* Ventanilla 4 Categoria Circuiteria */
const abrir4 = document.querySelector("#imgCircuito");
const model4 = document.querySelector("#model18");
const cerrar4 = document.querySelector("#btnCerrar4");

const abrirVentana4 = () => {
    model4.showModal();
}

const cerrarVentana4 = () => {
    model4.close();
}

abrir4.addEventListener("click", abrirVentana4)

cerrar4.addEventListener("click", cerrarVentana4)