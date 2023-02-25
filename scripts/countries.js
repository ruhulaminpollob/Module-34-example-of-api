const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    
    const countriesContainer=document.getElementById('countries-container');
    countries.forEach(country => {
        console.log(country);
        const countryDiv=document.createElement('div');
        countryDiv.innerHTML=`
        <h3>Name: ${country.name.common}</h3>
        <h5>Capital: ${country.capital?country.capital[0]:'There is no capital in this country'}</h5>
        `
        countriesContainer.appendChild(countryDiv)
    });
}


loadCountries()