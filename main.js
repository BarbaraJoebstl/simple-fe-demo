const mainContainer = document.getElementById('.mainContainer');
const facts =  document.getElementById('.facts');

const url = "https://api.thecatapi.com/v1/breeds/";
fetch(url, {
  method: "GET",
  withCredentials: true,
  headers: {
    "X-API-KEY": "your api key",
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
})
  .then(resp => resp.json())
  .then(function(breeds) {
     this.createMainStats(breeds); 
     this.createBreedCards(breeds);
  })
  .catch(function(error) {
    console.log(error);
  });

function createMainStats(breeds) {
    const numberOfBreeds = breeds.length;
    const numberOfUniqueCountries =  [...new Set(breeds.map(breed => breed?.country_code))]

    this.facts.innerHTML = `There are ${numberOfBreeds} breeds from ${numberOfUniqueCountries.length} countries.`;
}

function createBreedCards(data) {   
    const breedCards = data.map(breed => {
        return `
            <div class="breed-card">
                <h3>${breed.name}</h3>
                <img src="${breed?.image?.url}"/>
                <a href="${breed.wikipedia_url}" target="_blank">more information</a>
            </div>
            `;
    }).join('');

    this.mainContainer.innerHTML = breedCards;
}
