import React, { Component } from 'react'
import SideMenu from './side-menu'
import { sigleEmpresa } from '../../../services/empresas-services'

export default class PainelEmpresa extends Component{
    
    constructor(){
        super()
        this.state = {
            razao_social:'',
            nome_fantasia:'',
            cnpj:'',
            telefone_empresa:'',
            cep:'',
            logradouro:'',
            numero:'',
            complemento:'',
            bairro:'',
            cidade:'',
            uf:'',
            transporte:0,
            images:[],
            categorias:[],
        }
    }

    async componentDidMount(){
        try{
            const retorno = await sigleEmpresa(this.props.match.params.id)

            this.setState({ 
                razao_social:retorno.data.data.razao_social,
                nome_fantasia:retorno.data.data.nome_fantasia,
                cnpj:retorno.data.data.cnpj,
                telefone_empresa:retorno.data.data.telefone_empresa,
                cep:retorno.data.data.cep,
                logradouro:retorno.data.data.logradouro,
                bairro:retorno.data.data.bairro,
                numero:retorno.data.data.nome_fantasia,
                cidade:retorno.data.data.cidade,
                uf:retorno.data.data.uf,
                transporte:retorno.data.data.transporte,
                images:retorno.data.data.foto[0].foto,
                categorias:retorno.data.data.categoria
            })
            console.log(this.state)
        }catch(error){
            console.log(error)
        }
    }
    
    render(){

        return(
            <>  
                <SideMenu 
                    logo={this.state.images}
                    nome_fantasia={this.state.nome_fantasia}
                />
            </>
        )
    }
}