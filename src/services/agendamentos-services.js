import { privateReq } from './api';

const RESOURCE = "agendamentos"
const aceitar = {
    "status":1
}

export const listaAgendamentos = async () => {

    try{
        const retorno = await privateReq.get(RESOURCE)
        return retorno.data
    }catch( error ){
        return error.response
    }

}

export const listaAgendamentosPorEmpresa = async (id) => {
    try{
        const retorno = await privateReq.get(`${RESOURCE}/empresa/${id}`)
        console.log(retorno.data)
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>")
        return retorno.data
    }catch( error ){
        return error.response
    }
}

export const mudarStatusAgendamento = async (id, status) => {

    const statusAgendamento = {
        "status":status
    }

    try{
        const retorno = await privateReq.put(`${RESOURCE}/${id}`, statusAgendamento);
        return retorno.data
    } catch ( error ){
        return error.response
    }
}

