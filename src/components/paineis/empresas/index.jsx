import React, { Component } from 'react'
import SideMenu from './side-menu'
import CadastroServicos from './cadastro-servico'
import { sigleEmpresa, listarTiposServico } from '../../../services/empresas-services'
import { listarServicos, cadastrarServico } from '../../../services/tipo-servicos-serveice'
import LoadingGif from '../../../assets/loading-balls.gif';
import Home from './home'

import './cadastro-servico.css'


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
            images:['../../../assets/loading-balls.gif'],
            categorias:[],
            tipo_servico:[],
            servicos:[],
            item_menu:0,
            novo_servico:{
                nome:'',
                preco:'',
                id_tipo:'',
                foto:[],
                id_empresa:''
            }
        }
        this.navgation = this.navgation.bind(this)
        this.handlerChange = this.handlerChange.bind(this)
        this.fileHandler = this.fileHandler.bind(this)
        this.hundleSubmit = this.hundleSubmit.bind(this)
    }

    async componentDidMount(){
        this.setState({ images:LoadingGif })
        try{

            const retorno = await sigleEmpresa(this.props.match.params.id)
            const retornoTiposServicos = await listarTiposServico()
            const retornoServicos = await listarServicos(this.props.match.params.id)
            this.setState({ 

                razao_social:retorno.razao_social,
                nome_fantasia:retorno.nome_fantasia,
                cnpj:retorno.cnpj,
                telefone_empresa:retorno.telefone_empresa,
                cep:retorno.cep,
                logradouro:retorno.logradouro,
                bairro:retorno.bairro,
                numero:retorno.nome_fantasia,
                cidade:retorno.cidade,
                uf:retorno.uf,
                transporte:retorno.transporte,
                images:'http://127.0.0.1:8000/storage/' + retorno.foto[0].foto,
                categorias:retorno.categoria,
                tipo_servico:retornoTiposServicos,
                servicos:retornoServicos,
                novo_servico:{
                    id_empresa:this.props.match.params.id
                }
            })
        }catch(error){
            console.log(error)
        }
    }



    
    navgation(item){
        return this.setState({item_menu:item})
    }

    handlerChange(e){
        const {name, value} = e.target;
        this.setState({ novo_servico:{...this.state.novo_servico, [name] : value }});
        console.log(name+"  "+value)
    }

    fileHandler(e){
        this.setState({ novo_servico:{...this.state.novo_servico, foto:e.target.files }});
    }

    hundleSubmit = async e =>{
        e.preventDefault();
        
        console.log(this.state.novo_servico)

        const res = await cadastrarServico(this.state.novo_servico)

        this.setState({ ...this.state, servico:this.state.servicos.push(res.servico) })

        return console.log(res)
    }
    
    render(){

        return(
            <>  
                <SideMenu 
                    logo={this.state.images}
                    nome_fantasia={this.state.nome_fantasia}
                    navgation={this.navgation}
                    item={this.state.item_menu}
                />

                <Home 
                    item={this.state.item_menu}
                    nome_empresa={this.state.nome_fantasia}
                />

                <CadastroServicos
                    item={this.state.item_menu}
                    tipo_servico={this.state.tipo_servico}
                    servicos={this.state.servicos}
                    novo_servico={this.state.novo_servico}
                    handlerChange={this.handlerChange}
                    fileHandler={this.fileHandler}
                    hundleSubmit={this.hundleSubmit}
                />

                
                
            </>
        )
    }
}