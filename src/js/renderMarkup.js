// блок добавления html
import refs from './refs';
import countryTpl from '../templates/country.hbs';
import listOfCountriesTpl from '../templates/listOfCountries.hbs';


function renderCountryCard(country) {
    console.log(country);
    const markup = countryTpl(country);
// const markup = listOfCountriesTpl();
    refs.countryContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateMarkupCountries;