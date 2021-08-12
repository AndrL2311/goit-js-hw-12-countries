console.log("Hi");
import countryTpl from '../templates/country.hbs';
import listOfCountriesTpl from '../templates/listOfCountries.hbs';



  function fetchCountries(country) {
  const url = `https://restcountries.eu/rest/v2/name/${country}`;
  return fetch(url)
    .then(response => {
        return response.json();
        // console.log(response.json());
    })
    .then(renderCountryCard)
    .catch(error => console.log(error));
}
fetchCountries('Canada');

// блок ссылок
const refs = {
searchInput: document.querySelector('.search-input'),
countryContainer: document.querySelector('.country-container'),
};


// блок добавления html
// console.log(refs.countryContainer);

function renderCountryCard(country) {
    console.log(country);
    const markup = countryTpl(country);
// const markup = listOfCountriesTpl();
    refs.countryContainer.insertAdjacentHTML('beforeend', markup);
}