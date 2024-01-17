//console.log("Hola Mundo desde app.js");

// const { emailTemplate } = require("./js-foundation/01-template");
// require("./js-foundation/02-destructuring");
// const { getUserById } = require("./js-foundation/03-callbacks");
// const { getUserById } = require("./js-foundation/04-arrow");
// const { buildMakePerson } = require("./js-foundation/05-factory");
// const { getId, getAge } = require('./plugins');
// const getPokemonById = require("./js-foundation/06-promises");
// const { buildLogger } = require('./plugins');
// import { buildLogger } from "./plugins";

// const id = 1;

// getUserById( id, ( error, user) => {
//     if (error) throw new Error( error );
        
//     console.log( {user} );
//     });

//console.log(emailTemplate);

// ! Factory Functions
// const makePerson = buildMakePerson( {getId, getAge} );

// const person = { name: "Dani", birthdate: "1982-05-18" };

// const me = makePerson( person );

// console.log({me});
//! Promises
// getPokemonById(4)
//     .then( pokemon => console.log( {pokemon} ))
//     .catch( error => console.error("Por favor intentelo de nuevo."))
//     .finally( console.log("Terminó."));

//! Logger(winston)


// const logger = buildLogger("app.js");


// logger.log("Hola Mundo");


// logger.error("Algo malo pasó");



