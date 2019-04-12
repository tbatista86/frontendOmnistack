import axios from 'axios';

const api = axios.create({
    baseURL: "https://box-omnistack-backend.herokuapp.com",
});

export default api;