const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {

    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {

        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country-div')
        countryDiv.innerHTML = `
        <h3>Name: ${country.name.common}</h3>
        <h5>Capital: ${country.capital ? country.capital[0] : 'There is no capital in this country'}</h5>
        <button onclick=loadDetail('${country.cca2}')>Details</button>
        `
        countriesContainer.appendChild(countryDiv)
    });
}
const loadDetail = code => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data))
}
const displayCountryDetail=country=>{
    
    const countryDetails=document.getElementById('country-details')
    countryDetails.innerHTML=`
    <h3>Name: ${country[0].name.common}</h3>
    <img src="${country[0].flags.png}">
    `
}

loadCountries()