import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 6BTte4m6KE2fsWRArcLJdIzplfedg6GrBlxes1T5Esg'
    }
});
