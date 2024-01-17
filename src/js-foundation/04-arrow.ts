
import { User } from "./03-callbacks";

const users: User[] = [
    {
        id: 1,
        name: "John Doe"
    },
    {
        id: 2,
        name: "Jane Doe" 
    }
];

export const getUserById = ( id: number, callback: (error?: string, user?: User) => void) => {
    const user = users.find( user => user.id === id );

    user
        ? callback( undefined, user ) 
        : callback(`User with id: ${ id } not found.`)
    
    // console.log( {user} );
    // console.log({ user: user }); es similar que lo de arriba
};

// getUserById(1);

// module.exports = {
//     getUserById
// };




