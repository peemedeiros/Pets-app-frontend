import React,{Component} from 'react'

import { getToken } from '../../services/api';

import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';
import ProgressBar from './progressBar';
import AlertError from '../errors/alertError';

import './cadastro-empresa.css'
import '../cadastro/styles.css'

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
            transporte:0,
            images:[],
            categorias:[],
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
        if(step === 2){
            this.setState({ errors:{... this.state.errors, alert:false} })
        }
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

        if(res.status !== 201){

            if(res.status === 422){
                this.setState({ errors:{...this.state.errors, alert:true, error_data:Object.values(res.data.errors)} })
            }else{
                this.setState({ errors:{...this.state.errors, alert:true, error_data:["Ocorreu algum erro"]} })
            }
            this.setState({ disabled:false })
            return this.setState({step:1})
        }
        //Redirecionando para o componente de sucesso de cadastro!
        this.setState({ disabled:false })

        return this.setState({ step:4 })
    }

    render(){

        if(getToken()){
            return(
                <>
                    <ProgressBar nextStep={this.nextStep} step={this.state.step}/>
                    <AlertError error={this.state.errors.alert}  error_data={this.state.errors.error_data}/>

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
                            transporte={this.state.transporte}
                        />

                        <Step2 
                            step={this.state.step}
                            images={this.state.images}
                            fileHandler={this.fileHandler}
                            nextStep={this.nextStep}
                        />

                        <Step3
                            step={this.state.step}
                            categorias={this.state.categorias}
                            handleSubmit={this.handleSubmit}
                            empresa={this.state}
                            disabled={this.state.disabled}
                        />

                        <Step4
                            step={this.state.step}
                        />
                </>
            )
        }else{
            return <Redirect to="/login" />
        }
    }
}