// IIFE
let pokemonRepository = (function() {
let pokemonList = [];

function add(pokemon) {
pokemonList.push(pokemon);
}

function getAll() {
return pokemonList;
}

return {
getAll: getAll,
add: add
};
})();

// Adding some Pokémon to the repository
pokemonRepository.add({ name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison'] });
pokemonRepository.add({ name: 'Charmander', height: 0.6, types: ['fire'] });
pokemonRepository.add({ name: 'Squirtle', height: 0.5, types: ['water'] });

// Using the getAll function to access the pokemonList array
pokemonRepository.getAll().forEach(function(pokemon) {
console.log(pokemon.name + ' - Height: ' + pokemon.height + ' - Types: ' + pokemon.types.join(', '));
});