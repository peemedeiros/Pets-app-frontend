import { publicReq } from './api'

const RESOURCE = 'empresas-cadastradas';

export const listarEmpresasPublics = async () => {
    try{
        const retorno = await publicReq.get(RESOURCE)
        return retorno
    } catch (error) {
        return error
    }
}