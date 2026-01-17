
obtenerDatos();


async function obtenerDatos() {
    try {
        // Cambiamos la URL a una API real (Open-Meteo) que tiene CORS abierto
        const url = 'https://api.open-meteo.com/v1/forecast?latitude=-1.25&longitude=-78.25&current=precipitation,rain&timezone=America/Los_Angeles';
        
        const respuesta = await fetch(url);

    
        if (respuesta.ok) {
          const datos = await respuesta.json();
          console.log("Datos obtenidos:", datos);
          
          // Aquí podrías llamar a una función para mostrar el clima junto a tus opiniones
          // mostrarClima(datos.current.precipitation);

          const btn = document.createElement("button");
    
          btn.textContent = "Clima: 🌤️";
          btn.style.cssText =
            "position:fixed;bottom:20px;right:25px;z-index:9999;padding:20px 12px;border-radius:20px;border:4px solid #0095ff;background: #b9e2ff; font-size: 25px;";
          btn.addEventListener("click", () => alert("Existe una probabilidad de precipitación de: " + datos.current.precipitation));
          document.body.appendChild(btn);
        }else{
          throw new Error(`Error en el servidor: ${respuesta.status}`);
        }

       

    } catch (error) {
        // Este bloque captura tanto errores de red (CORS) como de servidor
        console.error("Error al obtener los datos:", error.message);
    }
}