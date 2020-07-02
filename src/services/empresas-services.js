import { privateReq } from './api'
const RESOURCE = "empresas"


export const cadastrarEmpresa = async empresa =>{

    let data = new FormData();
    
    data.append('razao_social', empresa.razao_social)
    data.append('nome_fantasia', empresa.nome_fantasia)
    data.append('cnpj', empresa.cnpj)
    data.append('telefone_empresa', empresa.telefone_empresa)
    data.append('cep', empresa.cep)
    data.append('logradouro', empresa.logradouro)
    data.append('cidade', empresa.cidade)
    data.append('numero', empresa.numero)
    data.append('complemento', empresa.complemento)
    data.append('bairro', empresa.bairro)
    data.append('uf', empresa.uf)
    data.append('images', empresa.images[0])
    data.append('categorias', empresa.categorias)
    data.append('transporte', empresa.transporte)

    try{
        
        const retorno = await privateReq.post(RESOURCE,data)

        console.log(retorno)
        if(retorno.status === 201){
            console.log(retorno)
        }

        return retorno

    }catch(error){
        return await error.response
    }
}

export const listar = async () =>{
    try{
        const retorno = await privateReq.get(RESOURCE)
        console.log(retorno)
        return retorno
    } catch (error) {
        return error.response
    }
}

export const sigleEmpresa = async (id) =>{
    try{
        const retorno = await privateReq.get(`${RESOURCE}/${id}`)
        return retorno
    } catch (error) {
        return error.response
    }
}