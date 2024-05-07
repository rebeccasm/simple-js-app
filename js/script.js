let pokemonList = [
    { name: "Butterfree", height: 6, types: ['psychic', 'poison'],},
    { name: "Ninetales", height: 10, types: ['dark', 'normal']},
    { name: "Seviper", height: 8, types: ['normal', 'ghost']}
];

for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height <10 && pokemonList[i].height >5) {
    console.log(pokemonList[i].name + " is a Pokemon" + "<br>");
    } else if (pokemonList[i].height <5) {
        console.log(pokemonList[i].name + " is a small Pokemon" + "<br>");
    } else {
        console.log(pokemonList[i].name + " is a big Pokemon" + "<br>")
    }
};

document.write(pokemonList);
