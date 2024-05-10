
//  create pokemonList
let pokemonList = [];

let bulbasaur = {
name: "Bulbasaur",
height: 7,
types: ["grass", "poison"]
};

let charmander = {
name: "Charmander",
height: 6,
types: ["fire"]
};

let squirtle = {
name: "Squirtle",
height: 5,
types: ["water"]
};

// push the pokemonList
pokemonList.push(bulbasaur, 
    charmander, 
    squirtle);

// Loop through each item in the pokemonList array
for (let i = 0; i < pokemonList.length; i++) {
// Get the current Pokemon object
let pokemon = pokemonList[i];

// Write the Pokemon's name and height to the DOM
document.write(`${pokemon.name} (height: ${pokemon.height})`);

// Check if the height is above a certain value
if (pokemon.height > 6) {
document.write(" - Wow, that's big!");
}

// Add a line break after each Pokemon
document.write('\n');
}
// console.log("bulbasaur\ncharmander\nsquirtle");
