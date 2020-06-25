import React,{Component} from 'react'

import { getToken } from '../../services/auth-service';

import Step1 from './step1';
import Step2 from './step2';
import ProgressBar from './progressBar';

import './cadastro-empresa.css'
import { Redirect } from 'react-router-dom';
import { cnpjMask, telefoneMask, cepMask } from '../../functions/homeMasks';
import { cadastrarEmpresa } from '../../services/empresas-services';

export default class Home extends Component {

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
            images:[],
            step:1,
            disabled:false,
            errors:{
                alert:false,
                error_data:[]
            }

        }

        this.nextStep = this.nextStep.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.findCep = this.findCep.bind(this);
        this.fileHandler = this.fileHandler.bind(this);
    }

    nextStep(step){
        return this.setState({ step:step });
    }

    handleChange = e =>{
        const {name, value} = e.target;
        switch(name){
            case 'cnpj':
                this.setState({[name]:cnpjMask(value)})
                break;
            case 'telefone_empresa':
                this.setState({[name]:telefoneMask(value)})
                break;
            case 'cep':
                this.setState({[name]:cepMask(value)})
                break;
            default:
                this.setState({[name]:value})
                break;
        }
    }

    findCep = cep =>{
        const headers = 
        fetch(`https://viacep.com.br/ws/${cep}/json`, {
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => (res.json()))
        .then(res => {
            this.setState({
                logradouro:res.logradouro,
                bairro:res.bairro,
                cidade:res.localidade,
                uf:res.uf
            })
        })
    }

    fileHandler = e =>{
        
        this.setState({ images:e.target.files });
    }

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ disabled: true });

        const res = await cadastrarEmpresa(this.state);

        if(res.status !== 201) console.log('error')

    }

    render(){

        if(getToken()){
            return(
                <>
                    <ProgressBar nextStep={this.nextStep} step={this.state.step}/>
                

                        <Step1
                            findCep={this.findCep}
                            handleChange={this.handleChange} 
                            nextStep={this.nextStep} 
                            step={this.state.step}
                            razao_social={this.state.razao_social}
                            nome_fantasia={this.state.nome_fantasia}
                            cnpj={this.state.cnpj}
                            telefone_empresa={this.state.telefone_empresa}
                            cep={this.state.cep}
                            logradouro={this.state.logradouro}
                            cidade={this.state.cidade}
                            numero={this.state.numero}
                            complemento={this.state.complemento}
                            bairro={this.state.bairro}
                            uf={this.state.uf}
                        />

                        <Step2 
                            step={this.state.step}
                            images={this.state.images}
                            handleChange={this.state.handleChange}
                            handleSubmit={this.handleSubmit}
                            fileHandler={this.fileHandler}
                            disabled={this.state.disabled}
                        />

                </>
            )
        }else{
            return <Redirect to="/login" />
        }
    }
}