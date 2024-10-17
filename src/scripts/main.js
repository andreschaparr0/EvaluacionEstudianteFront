var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Serie } from './models/serie.js';
import { series } from "./data/data.js";
function createSeriesTable() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const tableBody = document.getElementById('seriesTable').getElementsByTagName('tbody')[0];
            series.forEach(serieData => {
                const serie = new Serie(serieData.id, serieData.name, serieData.channel, serieData.seasons, serieData.sinopsis, serieData.link, serieData.image);
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
        }
        catch (error) {
            console.error('Error loading series table:', error);
        }
    });
}
function showSeriesDetail(serie) {
    const serieDetailsCard = document.getElementById('serie-details');
    const cardImage = serieDetailsCard.querySelector('.card-img-top');
    const cardTitle = serieDetailsCard.querySelector('.card-title');
    const cardText = serieDetailsCard.querySelector('.card-text');
    const cardLink = serieDetailsCard.querySelector('.card-link');
    // Actualizamos los detalles de la tarjeta con la información de la serie
    cardImage.src = serie.image; // Asegúrate de que la serie tenga una propiedad 'image'
    cardImage.alt = serie.name;
    cardTitle.textContent = serie.name;
    cardText.textContent = serie.sinopsis; // Asegúrate de que la serie tenga una propiedad 'sinopsis'
    cardLink.textContent = serie.link;
    cardLink.href = serie.link;
    // Mostramos la tarjeta
    serieDetailsCard.classList.remove('d-none');
}
document.addEventListener('DOMContentLoaded', createSeriesTable);
