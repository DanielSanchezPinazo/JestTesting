const { httpClientPlugin: http } = require('../plugins');

const getPokemonById = async( id ) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  //! mode 1  
    // fetch(url).then( ( response ) => {
    //     response.json().then( (pokemon) => {
        //         console.log( pokemon.name );
    //         callback( pokemon.name );
    //     })
    //     return response.json();
    // });

  //! mode 2 (se quita callback)
    // return fetch(url)
    //     .then( (resp) => resp.json())
    //     .then( pokemon => pokemon.name )

  //! mode async/await (ponemos async arriba)
    // const response = await fetch(url);
    // const pokemon = await response.json();
    // return pokemon.name;

 //! mode httpClient (añadimos la importación arriba)
    const pokemon = await http.get( url );
    return pokemon.name;
};



module.exports = getPokemonById;