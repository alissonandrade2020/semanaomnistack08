import axios from 'axios'

const api = axios.create({
    baseURL: 'https://alissonapi2.herokuapp.com/'
})

export default api