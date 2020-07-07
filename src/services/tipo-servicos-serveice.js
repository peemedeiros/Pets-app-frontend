import { privateReq } from './api'

const RESOURCE = "servicos/empresa"
const SERVICO = "servicos"

export const listarServicos = async (idempresa) =>{
    try{
        const retorno = await privateReq.get(`${RESOURCE}/${idempresa}`)
        
        return retorno.data
    } catch (error) {
        return error.response
    }
}

export const cadastrarServico = async servico =>{

    let data = new FormData();

    console.log(servico)

    data.append('nome', servico.nome);
    data.append('preco', servico.preco);
    data.append('id_subcategoria', servico.id_tipo);
    data.append('foto', servico.foto[0]);
    data.append('id_empresa', servico.id_empresa);
    
    try{
        const retorno = await privateReq.post(SERVICO, data)
        if(retorno.status === 201){
            console.log(retorno)
        }

        return retorno

    } catch ( error ){
        return error.response
    }
}