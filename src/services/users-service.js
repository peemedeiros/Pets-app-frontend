import { publicReq } from './api'
const RESOURCE = 'users'

export const cadastrarUsuario = async usuario => {
    try{
        return await publicReq.post(RESOURCE, usuario);
    } catch (error) {
        return error.response
    }
}
