
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

function getUserById( id, callback ) {
    const user = users.find( function(user) {
        return user.id === id;
    });

    if ( !user ) {
        return callback(`User with id: ${ id } not found.`);
    }

    return callback( null, user );
    // console.log( {user} );
    // console.log({ user: user }); es similar que lo de arriba
};

module.exports = {
    getUserById,
    users
};
// getUserById(1);



