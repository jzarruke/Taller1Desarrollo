import { Serie } from './series.js';
import { series } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
let serieSeleccionada: HTMLElement = document.getElementById('serieSeleccionada')!;

renderSeriesInTable(series);
renderAverageSeasons(series);

function renderSeriesInTable(series: Serie[]) {
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.classList.add("table-active");
        trElement.innerHTML = `<td scope="row">${serie.id}</td>
                                <td>${serie.name}</td>
                                <td>${serie.channel}</td>
                                <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
}

function renderAverageSeasons(series: Serie[]) {
    let totalSeasons = 0;
    let trElement = document.createElement("tr");
    series.forEach((serie) => {
        totalSeasons += serie.seasons;
    });
    let averageSeasons = totalSeasons / series.length;
    trElement.innerHTML = `<td colspan="3">Seasons average: ${averageSeasons}</td>`;
    seriesTbody.appendChild(trElement);
}