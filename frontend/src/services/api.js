import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://localhost:3333'
    baseURL: 'https://alissonapi2.herokuapp.com/'
})

export default api;