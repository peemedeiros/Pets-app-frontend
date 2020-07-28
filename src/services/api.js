import axios from 'axios';

const URL = "http://192.168.1.106:8000/api/v1/";
const TOKEN_KEY = '@PetsApp:token';

const CONFIG = {
    baseURL:URL,
    'Accept':'application/json',
    'Content-Type':'application/json'
}

export const publicReq = axios.create(CONFIG)

export const getToken = () =>{
    const data = JSON.parse(localStorage.getItem(TOKEN_KEY))
    if(!data) return false

    return data.token;
}

const PRIVATECONFIG = {
    baseURL:URL,
    'Accept':'application/json',
    'Content-Type':'application/json',
    'Authorization':"Bearer " + getToken()
}

export const privateReq = axios.create(PRIVATECONFIG)





