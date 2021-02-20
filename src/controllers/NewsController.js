// '28f4b1f92b78418dad668e490e792aa8'
import axios from 'axios';

const API_KEY = '28f4b1f92b78418dad668e490e792aa8';

export default {
    getSources: async () => {
        const url = `https://newsapi.org/v2/sources?country=br&apiKey=${API_KEY}`;
        const req = await axios.get(url);
        return req;
    },

    getNews: async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
        const req = await axios.get(url);
        return req;
    },

    getSearch: async (search) => {
        const url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`;
        const req = await axios.get(url);
        return req;
    }
}