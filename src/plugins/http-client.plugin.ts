
// const axios = require('axios');
import axios from "axios";

export const httpClientPlugin = {
    get: async( url: string ) => {
    //! hacemos lo mismo usando axios
        // const response = await fetch(url);
        // return await response.json();
        const { data } = await axios.get(url);
        return data;
    },
    post: async(url: string, body: any) => {},
    put: async(url: string, body: any) => {},
    delete: async(url: string) => {},
};

// module.exports = {
//     httpClientPlugin,
// };

