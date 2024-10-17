import { Serie } from './models/serie.js';
import { series } from "./data/data.js";

async function createSeriesTable() {
  try {
    const tableBody = document.getElementById('seriesTable')!.getElementsByTagName('tbody')[0];

    series.forEach(serieData => {
      const serie = new Serie(
        serieData.id,
        serieData.name,
        serieData.channel,
        serieData.seasons,
        serieData.sinopsis,
        serieData.link,
        serieData.image
      );

      const row = tableBody.insertRow();

      row.insertCell(0).innerText = serie.id.toString();
      const nameCell = row.insertCell(1);
      nameCell.innerHTML = `<a href="#" class="text-decoration-none serie-link" data-id="${serie.id}">${serie.name}</a>`;
      row.insertCell(2).innerText = serie.channel;
      row.insertCell(3).innerText = serie.seasons.toString();

      row.addEventListener('click', () => showSeriesDetail(serie));
    });

    // Calculate the average number of seasons
    const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
    const avgSeasons = totalSeasons / series.length;

    // Display the average in the corresponding element
    const avgElement = document.getElementById('average-seasons');
    if (avgElement) {
      avgElement.innerText = `Seasons average: ${avgSeasons.toFixed(0)}`;
    }
  } catch (error) {
    console.error('Error loading series table:', error);
  }
}

function showSeriesDetail(serie: Serie): void {
  const serieDetailsCard = document.getElementById('serie-details') as HTMLElement;
  const cardImage = serieDetailsCard.querySelector('.card-img-top') as HTMLImageElement;
  const cardTitle = serieDetailsCard.querySelector('.card-title') as HTMLElement;
  const cardText = serieDetailsCard.querySelector('.card-text') as HTMLElement;
  const cardLink = serieDetailsCard.querySelector('.card-link') as HTMLAnchorElement;

  // Update the card details with the series information.
  cardImage.src = serie.image; 
  cardImage.alt = serie.name;
  cardTitle.textContent = serie.name;
  cardText.textContent = serie.sinopsis;
  cardLink.textContent = serie.link;
  cardLink.href = serie.link;

  // Show the card
  serieDetailsCard.classList.remove('d-none');
}


document.addEventListener('DOMContentLoaded', createSeriesTable);