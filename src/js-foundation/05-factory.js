
// const { getId } = require('../plugins/get-id.plugin');
// const { getAge } = require('../plugins/get-age.plugin');
// const { getId, getAge } = require('../plugins');

// const person = { name: "Dani", birthdate: "1982-05-18" };

const buildMakePerson = ( {getId, getAge} ) => {

    return ( {name, birthdate} ) => {

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

module.exports = {
    buildMakePerson,
};

