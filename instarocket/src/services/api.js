import axios from 'axios';

const api = axios.create({
    baseURL: 'https://instarocket.herokuapp.com'
})

export default api;