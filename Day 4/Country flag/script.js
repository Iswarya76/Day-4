//Use the same rest contries and display all country flag in the console
const getAllCountriesInfo = new XMLHttpRequest();
getAllCountriesInfo.open("GET", "https://restcountries.com/v2/all");
getAllCountriesInfo.send();
getAllCountriesInfo.onload = function () {
  const countryData = JSON.parse(getAllCountriesInfo.response);
  for (const country of countryData) {
    console.log(`${country.name} : ${country.flag}`);
  }
};