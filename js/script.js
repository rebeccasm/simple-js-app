// Update script.js file
let pokemonRepository = (function() {
  let pokemonList = [];

  function add(pokemon) {
    if (typeof pokemon === 'object' && pokemon !== null) {
      pokemonList.push(pokemon);
    } else {
      console.log('Invalid Pokemon object');
    }
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonListContainer = document.querySelector('.pokemon-list');

    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemon-button');

    button.addEventListener('click', function() {
      showDetails(pokemon);
    });

    pokemonListContainer.appendChild(button);
  }

  function showDetails(pokemon) {
    console.log(pokemon.name);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

// Sample data
let pokemon1 = { name: 'Pikachu', type: 'Electric' };
let pokemon2 = { name: 'Charmander', type: 'Fire' };

// Add Pokemon objects to the pokemonList array
pokemonRepository.add(pokemon1);
pokemonRepository.add(pokemon2);

// Iterate over each Pokémon in the repository and create buttons
pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});

