"use strict";
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    cities.push(...data);
};
fetchData(endpoint);
const findMatches = (wordToMatch, cities) => {
    return cities.filter((place) => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
};
const numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const displayMatches = (event) => {
    const target = event.target;
    const value = target.value;
    const matches = findMatches(value, cities);
    const html = matches
        .map((place) => {
        const regex = new RegExp(value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${value}</span>`);
        return `
		<li>
			<span class="name">${cityName}, ${stateName}</span>
			<span class="population">${numberWithCommas(place.population)}</span/>
		</li>
		`;
    })
        .join('');
    suggestions.innerHTML = html;
};
const input = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
input.addEventListener('keyup', displayMatches);
