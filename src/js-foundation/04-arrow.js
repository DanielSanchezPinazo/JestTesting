
const users = [
    {
        id: 1,
        name: "John Doe"
    },
    {
        id: 2,
        name: "Jane Doe" 
    }
];

const getUserById = ( id, callback ) => {
    const user = users.find( user => user.id === id );

    user
        ? callback( null, user ) 
        : callback(`User with id: ${ id } not found.`)
    
    // console.log( {user} );
    // console.log({ user: user }); es similar que lo de arriba
};

module.exports = {
    getUserById
};
// getUserById(1);



