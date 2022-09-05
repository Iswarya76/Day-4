//Use the same rest contries and print all countries name,regions,sub-region, and population
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v2/all");
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    var r = JSON.parse(this.response);
    console.log(r);
    for (let i=0;i<r.length;i++){
        console.log(`
        Country Name: ${r[i].name},
        Country Region: ${r[i].region},
        Country Sub-region: ${r[i].subregion},
        Country Population: ${r[i].population}
        `);
    }
  } else {
    console.log("Data is not available");
  }
};
xhr.send();