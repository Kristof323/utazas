import { KartyaAdatok } from "./adatok.ts";

const adatokokTomb: KartyaAdatok[] = [];

fetch('https://petrik-utazas-default-rtdb.europe-west1.firebasedatabase.app/travelDestinations.json')
.then(function(response) {
    return response.json();
})
.then(function(data) {
    data.forEach(function(item: { title: string; content: string; img: string; }) {
        adatokokTomb.push(new KartyaAdatok(item.title, item.content, item.img));
    });
});

addEventListener('DOMContentLoaded', function() {
    const cardContainer = document.getElementById('card-container');
    if (!cardContainer) {
        return;
    }

    adatokokTomb.forEach(function(adat) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${adat.img}" alt="${adat.title}">
            <h2>${adat.title}</h2>
            <p>${adat.content}</p>
        `;
        cardContainer.appendChild(card);
    });
});