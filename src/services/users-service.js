import api from './api'
const RESOURCE = 'users'

export const cadastrarUsuario = async usuario => {
    try{
        return await api.post(RESOURCE, usuario);
    } catch (error) {
        return error.response
    }
}

export const loggedUser