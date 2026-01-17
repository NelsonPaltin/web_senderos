import { senderos } from "./senderos.js";


const sendero = senderos.find(x => x.id === 2);

// Nombre del sendero
document.querySelector("#det-nombre").textContent = sendero.nombre;

/*

// Imagen representativa
document.querySelector("#det-img-rep").src = sendero.img;
document.querySelector("#det-img-rep").alt = sendero.nombre;
*/

// Párrafos
document.querySelector("#det-par1").textContent = sendero.parr1;
document.querySelector("#det-par2").textContent = sendero.parr2;
document.querySelector("#det-par3").textContent = sendero.parr3;


/*
// Imágenes de galería
document.querySelector("#det-img-1").src = sendero.img_g1;
document.querySelector("#det-img-1").alt = "Imagen representatica de " + sendero.nombre;

document.querySelector("#det-img-2").src = sendero.img_g2;
document.querySelector("#det-img-2").alt = "Imagen representatica de " + sendero.nombre;

document.querySelector("#det-img-3").src = sendero.img_g3;
document.querySelector("#det-img-3").alt = "Imagen representatica de " + sendero.nombre;
*/


// Video
document.querySelector("#det-video").src = sendero.video;

