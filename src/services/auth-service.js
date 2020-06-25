import api, { privateReq } from './api';
const RESOURCE = "login";
const TOKEN_KEY = '@PetsApp:token';

export const signIn = async usuario => {
    try{
        const retorno =  await api.post(RESOURCE, usuario)

        console.log(retorno.data.user.tipo_cadastro)

        if(retorno.status === 200){
            
            if(retorno.data.user.tipo_cadastro === 0){
                return retorno.status = 404
            }

            usuario = retorno.data;
            localStorage.setItem(TOKEN_KEY, JSON.stringify(usuario))
            
            privateReq.defaults.headers.common['Authorization'] = 'Bearer ' + retorno.data.token

        }
        
        return retorno

    } catch(error) {
        return error.response
    }
}

export const getToken = () => {
    const data = JSON.parse(localStorage.getItem(TOKEN_KEY))
    return data.token
}

export const isLogged = () => {
    const usuario = localStorage.getItem(TOKEN_KEY);
    return JSON.parse(usuario);
}

export const signOut = () => {
    localStorage.removeItem(TOKEN_KEY);
}

