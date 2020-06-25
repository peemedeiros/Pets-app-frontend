import { privateReq } from './api'
const RESOURCE = "empresas"


export const cadastrarEmpresa = async empresa =>{
    const data = new FormData();

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
    
    let imagensteste =[];
    
    for(let i = 0; i < empresa.images.lenght ; i++){
        imagensteste.push(empresa.images[i]);
    }
    
    data.append('images', imagensteste)   

    // empresa.images = data;

    console.log(empresa)
    console.log(empresa.images)


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