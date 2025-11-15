/*
import { senderos } from "./senderos.js";

const g1 = new URL('../img/g1.jpeg', import.meta.url);


const img = document.createElement('img');
img.src = g1.href;
img.alt = "Mi imagen";

console.log(g1);
console.log(g1.href);

document.getElementById('img-gen').appendChild(img);

const contenedor = document.getElementById("senderos");

senderos.forEach(lista => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <br>
    <hr>
    <h2>${lista.nombre}</h2>
    <hr>
    <br>
    <img src="${lista.img}" alt="Fotografía, ${lista.nombre}">
    <p class = "info-distancia"><Strong>Distancia:</strong> ${lista.km} km</p>
    <p>${lista.parr1}..</p>
    <p class = "caja-ver-mas"><a href ="${lista.page}" class = "enlace-ver-mas">...ver más</a></p>
    
  `;

  contenedor.appendChild(card);

});
*/