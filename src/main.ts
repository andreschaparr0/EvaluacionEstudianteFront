import { series } from "./data/data";  // Importamos los datos de series

async function createSeriesTable() {
  try {
      // Obtenemos el cuerpo de la tabla donde vamos a insertar las filas
      const tableBody = document.getElementById('seriesTable')!.getElementsByTagName('tbody')[0];

      // Iteramos sobre el array de series y llenamos la tabla
      series.forEach(serie => {
          // Creamos una nueva fila en la tabla
          const row = tableBody.insertRow();
          
          // Insertamos las celdas para cada propiedad de la serie
          row.insertCell(0).innerText = serie.id.toString();    // ID de la serie
          row.insertCell(1).innerText = serie.name;             // Nombre de la serie
          row.insertCell(2).innerText = serie.channel;          // Canal
          row.insertCell(3).innerText = serie.seasons.toString(); // Temporadas
      });

      // Calcular el promedio de temporadas
      const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
      const avgSeasons = totalSeasons / series.length;

      // Mostrar el promedio en el elemento correspondiente
      const avgElement = document.getElementById('average-seasons');
      if (avgElement) {
          avgElement.innerText = `Seasons average: ${avgSeasons.toFixed(0)}`;
      }
  } catch (error) {
      console.error('Error loading series table:', error);
  }
}

// Ejecutamos la función cuando se cargue el DOM
document.addEventListener('DOMContentLoaded', createSeriesTable);
