import { series } from './data.js';
var seriesTbody = document.getElementById('series');
renderSeriesInTable(series);
renderAverageSeasons(series);
function renderSeriesInTable(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.classList.add("table-active");
        trElement.innerHTML = "<td scope=\"row\">".concat(serie.id, "</td>\n                                <td>").concat(serie.name, "</td>\n                                <td>").concat(serie.channel, "</td>\n                                <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function renderAverageSeasons(series) {
    var totalSeasons = 0;
    var trElement = document.createElement("tr");
    series.forEach(function (serie) {
        totalSeasons += serie.seasons;
    });
    var averageSeasons = totalSeasons / series.length;
    trElement.innerHTML = "<td colspan=\"3\">Seasons average: ".concat(averageSeasons, "</td>");
    seriesTbody.appendChild(trElement);
}
