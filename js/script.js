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
    let pokemonElement = document.createElement('div');
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
        item.types = details.types;
        item.weight = details.weight;
      })
      .catch(err => console.error('Error fetching pokemon details: ', err));
  }
  function showDetails(item) {
    loadDetails(item)
      .then(() => {
        showModal(item);
      });
  }
  function showModal(item) {
    let modalContainer = document.querySelector('#modal-container');
    let modal = document.querySelector('.modal');
    let closeButton = document.querySelector('.close-button');
    let modalTitle = document.querySelector('.modal-title');
    let modalBody = document.querySelector('.modal-body');
    let modalImg = document.querySelector('.modal-img');
    
    modalTitle.innerText = item.name;
    modalBody.innerHTML = `
      <img class="modal-img" src="${item.imgUrl}" alt="${item.name} image" />
      <p class="modal-info">Height: ${item.height} </p>
      <p class="modal-info">Weight: ${item.weight} </p>
      <ul class="modal-info">Types:</ul>
    `;
    for (let i = 0; i < item.types.length; i++) {
      let li = document.createElement('li');
      li.innerText = item.types[i].type.name;
      modalBody.querySelector('ul').appendChild(li);
    }
    modalContainer.classList.add('is-visible');
    closeButton.addEventListener('click', hideModal);
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal();
      }
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        hideModal();
      }
    });
  }
  function hideModal() {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');
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