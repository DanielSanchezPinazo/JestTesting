
const axios = require('axios');

const httpClientPlugin = {
    get: async(url) => {
    //! hacemos lo mismo usando axios
        // const response = await fetch(url);
        // return await response.json();
        const { data } = await axios.get(url);
        return data;
    },
    post: async(url, body) => {},
    put: async(url, body) => {},
    delete: async(url) => {},
};

module.exports = {
    httpClientPlugin,
};

