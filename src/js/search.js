import refs from './refs';
import renderCountryCard from './renderMarkup';
import fetchCountries from './fetchCountries';
import debounce from 'lodash.debounce';

refs.searchInput.addEventListener('input', debounce(search, 500));

function search(Event)
{
    console.log('Я нашол');
 };

export default search;