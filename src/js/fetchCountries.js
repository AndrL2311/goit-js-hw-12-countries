console.log("Hi");
import countryTpl from '../templates/country.hbs';
import listOfCountriesTpl from '../templates/listOfCountries.hbs';



// блок ссылок
const refs = {
searchInput: document.querySelector('.search-input'),
countryContainer: document.querySelector('.country-container'),
};


// блок добавления html
console.log(refs.countryContainer);

const markup = countryTpl();
// const markup = listOfCountriesTpl();
 
refs.countryContainer.insertAdjacentHTML('beforeend', markup);