import axios from 'axios';
import { getToken } from './auth-service';

const api = axios.create({
    baseURL:'http://127.0.0.1:8000/api/v1/',
    headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
    }
})


export const privateReq = axios.create({
    baseURL:'http://127.0.0.1:8000/api/v1/',
})


export default api
