// components/seriesTable.ts
import { series } from "../data/data";

export function createSeriesTable(): void {
  const tableBody = document.getElementById("series-table-body");
  let totalSeasons = 0;
  
  series.forEach(serie => {
    totalSeasons += serie.seasons;

    const row = `<tr>
      <td>${serie.id}</td>
      <td>${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    </tr>`;
    tableBody!.innerHTML += row;
  });

  const avgSeasons = totalSeasons / series.length;
  document.getElementById("average-seasons")!.textContent = `Average Seasons: ${avgSeasons.toFixed(2)}`;
}
