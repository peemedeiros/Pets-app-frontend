import React, { Component } from 'react'
import SideMenu from './side-menu'
import CadastroServicos from './cadastro-servico'
import Agendamentos from './agendamento'
import { sigleEmpresa, listarTiposServico } from '../../../services/empresas-services'
import { listaAgendamentos, mudarStatusAgendamento, listaAgendamentosPorEmpresa } from '../../../services/agendamentos-services'
import { deletarServicos } from '../../../services/tipo-servicos-serveice'
import { listarServicos, cadastrarServico } from '../../../services/tipo-servicos-serveice'
import PubSub from 'pubsub-js';
import LoadingGif from '../../../assets/loading-balls.gif';
import Home from './home'

import './cadastro-servico.css'

export default class PainelEmpresa extends Component{
    
    constructor(){
        super()
        this.stateInicial = {
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
            agendamentos:[],
            item_menu:0,
            novo_servico:{
                nome:null,
                preco:null,
                id_tipo:null,
                foto:[],
                id_empresa:''
            },
            disabled:false,
            errors:{
                alert:false,
                error_data:[]
            },
        }

        this.state = this.stateInicial;

        PubSub.subscribe('editing', (msg, servico) => {
            this.setState({
                novo_servico:{ ...this.state.novo_servico, nome:servico.nome, preco:servico.preco, id_empresa:servico.id_empresa }
            })
        });

        this.navgation = this.navgation.bind(this)
        this.handlerChange = this.handlerChange.bind(this)
        this.fileHandler = this.fileHandler.bind(this)
        this.hundleSubmit = this.hundleSubmit.bind(this)
        this.deletar = this.deletar.bind(this)
        this.atualizarStatusAgendamento = this.atualizarStatusAgendamento.bind(this)
    }

    async componentDidMount(){
        this.setState({ images:LoadingGif })
        
        try{

            const retorno = await sigleEmpresa(this.props.match.params.id)
            const retornoTiposServicos = await listarTiposServico()
            const retornoServicos = await listarServicos(this.props.match.params.id)
            const retornoAgendamentos = await listaAgendamentos()
            const retornoAgendamentosPorEmpresa = await listaAgendamentosPorEmpresa(this.props.match.params.id)
            
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
                images:'http://192.168.1.106:8000/storage/' + retorno.foto[0].foto,
                categorias:retorno.categoria,
                tipo_servico:retornoTiposServicos,
                servicos:retornoServicos,
                novo_servico:{
                    id_empresa:this.props.match.params.id
                },
                agendamentos:retornoAgendamentosPorEmpresa
            })
                console.log('$$$$$$$$$$$$$$$')
                console.log(this.state.agendamentos)
                console.log(retornoAgendamentosPorEmpresa)
                console.log(this.props.match.params.id)
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
    }

    fileHandler(e){
        this.setState({ novo_servico:{...this.state.novo_servico, foto:e.target.files }});
    }

    hundleSubmit = async e =>{
        e.preventDefault();

        this.setState({disabled:true});
        
        const res = await cadastrarServico(this.state.novo_servico)

        this.setState({...this.state, servico:this.state.servicos.push(res.servico), disabled:false })

        return console.log(res)
    }

    deletar = async id =>{
        const servicosCadastrados = this.state.servicos;
        const retorno = await deletarServicos(id)

        if(retorno.status === 204){
            this.setState({
                servicos: servicosCadastrados.filter(servico => {
                    return servico.id !== id
                })
            })
        }
    }

    atualizarStatusAgendamento = async (id, status) =>{
        const agendamentos = this.state.agendamentos;
        const retorno = await mudarStatusAgendamento(id, status)

        const agendamentosAceitos = agendamentos
        
        agendamentosAceitos.map(agendamento => {
            if(agendamento.id == id){
                agendamento.status = status
            }
            console.log(agendamento)
        })

        this.setState({agendamentos:agendamentosAceitos});

        return console.log(retorno)
    }

    render(){

        return(
            <>  
                <SideMenu 
                    logo={this.state.images}
                    nome_fantasia={this.state.nome_fantasia}
                    navgation={this.navgation}
                    item={this.state.item_menu}
                    cidade={this.state.cidade}
                />

                <Home 
                    item={this.state.item_menu}
                    nome_empresa={this.state.nome_fantasia}
                    agendamentos={this.state.agendamentos}
                />

                <CadastroServicos
                    item={this.state.item_menu}
                    tipo_servico={this.state.tipo_servico}
                    servicos={this.state.servicos}
                    novo_servico={this.state.novo_servico}
                    handlerChange={this.handlerChange}
                    fileHandler={this.fileHandler}
                    hundleSubmit={this.hundleSubmit}
                    disabled={this.state.disabled}
                    deletar={this.deletar}
                />

                <Agendamentos 
                    item={this.state.item_menu}
                    agendamentos={this.state.agendamentos}
                    atualizarStatusAgendamento={this.atualizarStatusAgendamento}
                />

            </>
        )
    }
}