import { privateReq } from './api';

const RESOURCE = "agendamentos"

export const listaAgendamentos = async () => {

    try{
        const retorno = await privateReq.get(RESOURCE)
        console.log(retorno.data)
        return retorno.data
    }catch( error ){
        return error.response
    }

}

