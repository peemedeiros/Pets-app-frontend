import api from './api'
const RESOURCE = "login";
const TOKEN_KEY = '@PetsApp:token';

export const signIn = async usuario => {
    try{
        const retorno =  await api.post(RESOURCE, usuario)

        console.log(retorno)

        if(retorno.status == 200){

            usuario = retorno;
            localStorage.setItem(TOKEN_KEY, JSON.stringify(usuario))
        }
        
        return retorno

    } catch(error) {
        return error.response
    }
}

export const getToken = () => {
    const user = JSON.parse(localStorage.getItem(TOKEN_KEY))
    return user.token
}

