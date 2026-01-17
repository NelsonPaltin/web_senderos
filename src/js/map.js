import { senderos } from "./senderos.js";

import L from "leaflet";
import 'leaflet/dist/leaflet.css';


const sendero = senderos.find(x => x.id === 2);

// Crear el mapa y establecer coordenadas de visualización
const map = L.map("map").setView([sendero.latitud_inicio, sendero.longitud_inicio], 14);

// Cargar el mozaico
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

// Añadir un marker/bandera de posición al mapa
L.marker([sendero.latitud_inicio, sendero.longitud_inicio]).addTo(map);
