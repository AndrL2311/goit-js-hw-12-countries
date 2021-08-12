
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

export default fetchCountries;
