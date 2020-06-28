import axios from 'axios';

const URL = "http://127.0.0.1:8000/api/v1/";

const CONFIG = {
    baseURL:URL,
    'Accept':'application/json',
    'Content-Type':'application/json'
}

export const publicReq = axios.create(CONFIG)


export const privateReq = axios.create({
    baseURL:URL
})





