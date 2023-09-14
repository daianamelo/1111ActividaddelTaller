const house = 'gryffindor'; // Puedes cambiar esto según la casa que desees
const urlPersonajes = `https://hp-api.onrender.com/api/characters`;

// Obtén una referencia al contenedor donde deseas agregar las tarjetas
const containerCards = document.getElementById('containerDeCards');

// Realiza la petición a la API
fetch(urlPersonajes)
  .then(response => response.json())
  .then(data => {
    // data es un arreglo de personajes, así que puedes usar forEach para crear una tarjeta por cada personaje
    data.forEach(personaje => {
      // Crea un elemento div para la tarjeta
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
      cardElement.style = 'width: 18rem;';

      // Establece el contenido de la tarjeta con los datos del personaje
      cardElement.innerHTML = `
        <img src="${personaje.image}" class="card-img-top" alt="${personaje.name}">
        <div class="card-body">
          <h5 class="card-title">${personaje.name}</h5>
          <p class="card-text">${personaje.house}</p>
          <p class="card-text">${personaje.species}</p>
        </div>
      `;

      // Agrega la tarjeta al contenedor
      containerCards.appendChild(cardElement);
    });
  })
  .catch(error => {
    console.log('Hubo un error:', error);
  });
