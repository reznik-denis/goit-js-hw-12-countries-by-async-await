const BASE_URL = 'https://restcountries.eu/rest/v2';

export default async function fetchCountries (serchValue) {
    const responce = await fetch(`${BASE_URL}/name/${serchValue}`);
    const countrys = await responce.json();
    
    return countrys
};
    