// // Update script.js file
// let pokemonRepository = (function() {
//   let pokemonList = [];

//   function add(pokemon) {
//     if (typeof pokemon === 'object' && pokemon !== null) {
//       pokemonList.push(pokemon);
//     } else {
//       console.log('Invalid Pokemon object');
//     }
//   }

//   function getAll() {
//     return pokemonList;
//   }

//   function addListItem(pokemon) {
//     let pokemonListContainer = document.querySelector('.pokemon-list');

//     let button = document.createElement('button');
//     button.innerText = pokemon.name;
//     button.classList.add('pokemon-button');

//     button.addEventListener('click', function() {
//       showDetails(pokemon);
//     });

//     pokemonListContainer.appendChild(button);
//   }

//   function showDetails(pokemon) {
//     console.log(pokemon.name);
//   }

//   return {
//     add: add,
//     getAll: getAll,
//     addListItem: addListItem
//   };
// })();

// // Sample data
// let pokemon1 = { name: 'Pikachu', type: 'Electric' };
// let pokemon2 = { name: 'Charmander', type: 'Fire' };

// // Add Pokemon objects to the pokemonList array
// pokemonRepository.add(pokemon1);
// pokemonRepository.add(pokemon2);

// // Iterate over each Pokémon in the repository and create buttons
// pokemonRepository.getAll().forEach(function(pokemon) {
//   pokemonRepository.addListItem(pokemon);
// });

// // IIFE
// let pokemonRepository = (function() {
// let pokemonList = [];

// function add(pokemon) {
// pokemonList.push(pokemon);
// }

// function getAll() {
// return pokemonList;
// }

// return {
// getAll: getAll,
// add: add
// };
// })();

// // Adding some Pokémon to the repository
// pokemonRepository.add({ name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison'] });
// pokemonRepository.add({ name: 'Charmander', height: 0.6, types: ['fire'] });
// pokemonRepository.add({ name: 'Squirtle', height: 0.5, types: ['water'] });

// // Using the getAll function to access the pokemonList array
// pokemonRepository.getAll().forEach(function(pokemon) {
// console.log(pokemon.name + ' - Height: ' + pokemon.height + ' - Types: ' + pokemon.types.join(', '));
// });

// (function() {
// // Your existing code here

// function addListItem(pokemon) {
// // Create list item
// const listItem = document.createElement('li');

// // Create button
// const button = document.createElement('button');
// button.innerText = pokemon.name;

// // Append button to list item
// listItem.appendChild(button);

// // Append list item to list
// pokemonList.appendChild(listItem);

// // Add event listener to button
// button.addEventListener('click', function() {
// showDetails(pokemon);
// });
// }

// function showDetails(pokemon) {
// console.log(pokemon);
// // You can add more code here to display details of the selected pokemon
// }

// // Your existing forEach loop here
// })();

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
    console.log(pokemon);
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