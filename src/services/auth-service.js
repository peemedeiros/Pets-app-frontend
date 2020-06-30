import { publicReq, privateReq } from './api';

const RESOURCE = "login";
const TOKEN_KEY = '@PetsApp:token';

export const signIn = async usuario => {
    try{
        const retorno =  await publicReq.post(RESOURCE, usuario)

        if(retorno.status === 200){
            
            if(retorno.data.user.tipo_cadastro === 0){
                return retorno.status = 404
            }

            usuario = retorno.data;
            localStorage.setItem(TOKEN_KEY, JSON.stringify(usuario))
        
        }
        
        return retorno

    } catch(error) {
        return error.response
    }
}

export const isLogged = () => {
    const usuario = localStorage.getItem(TOKEN_KEY);
    return JSON.parse(usuario);
}

export const signOut = () => {
    localStorage.removeItem(TOKEN_KEY);
}

