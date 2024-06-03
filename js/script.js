const pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  function add(pokemon) {
    if (typeof pokemon === 'object' &&
      'name' in pokemon &&
      'detailsUrl' in pokemon) {
      pokemonList.push(pokemon);
    } else {
      console.log('pokemon is not correct');
    }
  }
  function getAll() {
    return pokemonList;
  }
  function addListItem(pokemon) {
    let listPokemon = document.querySelector('.pokemon-list');
    let pokemonElement = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemon-button');
    button.addEventListener('click', function() {
      showDetails(pokemon);
    });
    pokemonElement.appendChild(button);
    listPokemon.appendChild(pokemonElement);
  }
  function loadList() {
    return fetch(apiUrl)
      .then(response => response.json())
      .then(json => {
        json.results.forEach(item => {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      })
      .catch(err => console.error('Error fetching pokemon list: ', err));
  }
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(response => response.json())
      .then(details => {
        // Now we add the details to the item
        item.imgUrl = details.sprites.front_default;
        item.height = details.height;
        console.log(item);
      })
      .catch(err => console.error('Error fetching pokemon details: ', err));
  }
  function showDetails(item) {
    loadDetails(item)
      .then(() => {
        console.log(item);
      });
  }
  return {
    add,
    getAll,
    addListItem,
    loadList,
    loadDetails,
    showDetails
  };
})();
pokemonRepository.loadList().then(() => {
  pokemonRepository.getAll().forEach(pokemon => {
    pokemonRepository.addListItem(pokemon);
  });
});