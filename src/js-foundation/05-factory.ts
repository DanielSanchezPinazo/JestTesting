import { getAge } from '../plugins/get-age.plugin';

// const { getId } = require('../plugins/get-id.plugin');
// const { getAge } = require('../plugins/get-age.plugin');
// const { getId, getAge } = require('../plugins');

// const person = { name: "Dani", birthdate: "1982-05-18" };

interface BuildMakePersonOptions {
    getId: () => string;
    getAge: (birthdate: string) => number;
};

interface PersonOptions {
    name: string;
    birthdate: string;
};

export const buildMakePerson = ( {getId, getAge}: BuildMakePersonOptions ) => {

    return ( {name, birthdate}: PersonOptions ) => {

        return {
            id: getId(),
            name,
            birthdate,
            age: getAge(birthdate)
        }
    }
};

// const me = buildPerson( person );

// console.log( me );

// module.exports = {
//     buildMakePerson,
// };

