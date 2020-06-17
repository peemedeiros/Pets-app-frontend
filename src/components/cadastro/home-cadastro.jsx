import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { cadastrarUsuario } from '../../services/users-service';

import InputErrorMessage from './inputErrorMsg';
import SpinnerButton from '../template/spinnerLoader';
import { telefoneMask } from '../../functions/homeMasks';
import AlertError from '../errors/alertError'

import empresa from '../../assets/empresa.png'
import cliente from '../../assets/cliente.png'
import logo from '../../assets/logo.png';
import plano1 from '../../assets/transporte.jpg';
import arrow from '../../assets/arrow.png';



export default class CadastroRestaurante extends Component{
    constructor(){
        super()
        this.stateInicial = {
            nome:'',
            email:'',
            celular:'',
            password:'',
            password_confirmation:'',
            tipo_cadastro:1,
            disabled:false,
            errors:{
                alert:false,
                error_data:[]
            }
        }
        this.state = this.stateInicial
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = e =>{
        const {name, value} = e.target;
        this.setState({[name]: value})
        console.log(name + " " +value)

        if(!value){
            switch(name){
                case 'nome':
                case 'email':
                case 'celular':
                case 'password':
                case 'password_confirmation':
                default:
                    e.target.className = 'form-control is-invalid'
                    break;
            }
        }else if(value){
            switch(name){
                case 'celular':
                    this.setState({[name]: telefoneMask(value)})
                    e.target.className = 'form-control'
                    break;
                case 'nome':
                case 'email':
                case 'password':
                case 'password_confirmation':
                default:
                    e.target.className = 'form-control'
                    break;
            }
        }
    }

    avancarPassoCadastro = e => {
        e.preventDefault();
        this.props.nextStep(1);
    }

    handleSubmit = async e =>{
        e.preventDefault();
        this.setState({ disabled: true});

        const res = await cadastrarUsuario(this.state);
        
        if(res.status !== 201){
            this.setState({
                errors:{...this.state.errors, alert:true, error_data:Object.values(res.data.errors)}
            })
            this.props.nextStep(0)
        }else {
            this.props.nextStep(2);
            this.setState(this.stateInicial)
        }
        this.setState({disabled:false});
    }

    render(){
        if(this.props.currentStep === 0){
            return(
                <>
                    <div className='section1'>
                        <div className="container">
                            <div className="nav-bar-container center">
                                <div className="coluna-flex">
                                    <img src={logo} className='logo' alt="logo"/>
                                </div>
                                <div className="coluna-flex">

                                    <button type="button" className="btn btn-light">
                                        <Link to="/login">Já sou cadastrado</Link>
                                    </button>

                                    <button type="button" className="btn btn-light bg-white">
                                        Planos de pagamento
                                    </button>

                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <div className='titulo-principal'>
                                        <h1>
                                            O MELHOR PARA O SEU AMIGUINHO
                                        </h1>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='fomulario-cadastro'>
                                        <form className='pre-cadastro' onSubmit={this.avancarPassoCadastro}>

                                            <h2 className='text-center'> Cadastre-se </h2>

                                            <AlertError error={this.state.errors.alert}  error_data={this.state.errors.error_data[0]} />

                                            <div className="form-group">
                                                <label htmlFor="inputNome">Nome completo</label>
                                                <input type="text" value={this.state.nome} onChange={this.handleChange} onBlur={this.handleChange} name="nome" className="form-control" id="inputNome" placeholder="Nome do dono da empresa" required/>
                                                <InputErrorMessage field={this.state.nome} />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="inputEmail">E-mail</label>
                                                <input type="email" value={this.state.email} onChange={this.handleChange} onBlur={this.handleChange}  name="email" className="form-control" id="inputEmail" placeholder="E-mail do dono da empresa" required/>
                                                <InputErrorMessage field={this.state.email}/>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="inputCelular">Celular com DDD</label>
                                                <input type="text" value={this.state.celular} onChange={this.handleChange} onBlur={this.handleChange} name="celular" className="form-control" id="inputCelular" placeholder="Celular do dono da empresa" required/>
                                                <InputErrorMessage field={this.state.celular}/>
                                            </div> 

                                            <div className="form-group">
                                                <label htmlFor="inputPassword">Senha</label>
                                                <input type="password" value={this.state.password} onChange={this.handleChange} onBlur={this.handleChange} name="password" className="form-control" id="inputPassword" placeholder="*********" required/>
                                                <InputErrorMessage field={this.state.password}/>
                                            </div> 

                                            <div className="form-group">
                                                <label htmlFor="inputPasswordConfirmation">Confirmar senha</label>
                                                <input type="password" value={this.state.password_confirmation} onChange={this.handleChange} onBlur={this.handleChange} name="password_confirmation" className="form-control" id="inputPasswordConfirmation" placeholder="*********" required/>
                                                <InputErrorMessage field={this.state.password_confirmation}/>
                                            </div> 

                                            <div className="form-group flex-center">
                                                <button type="submit" disabled={this.state.disabled} className="btn btn-light">
                                                    <div className="spinner-row">
                                                        INICIAR CADASTRO
                                                        <SpinnerButton status={this.state.disabled} />
                                                    </div>
                                                </button>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='section2'>
                        <div className='container'>
                            <div className="row">
                                <div className="col">
                                    <div className="tituloSectio2">
                                        <h1>
                                            Planos de pagamento
                                        </h1>

                                        <p>
                                            Escolha o plano mais adequado para sua empresa e alcance cada vez mais clientes
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <div className="card">
                                        <img src={plano1} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Plano básico</h5>
                                            <p>
                                                Plano básico para novos empreendedores do segmento pet
                                            </p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Detalhes do plano</li>
                                            <li className="list-group-item">Detalhes do plano</li>
                                            <li className="list-group-item">Detalhes do plano</li>
                                        </ul>
                                        
                                    </div>
                                </div>

                                <div className='col'>
                                    <div className="card">
                                        <img src={plano1} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Plano básico</h5>
                                            <p>
                                                Plano básico para novos empreendedores do segmento pet
                                            </p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Detalhes do plano</li>
                                            <li className="list-group-item">Detalhes do plano</li>
                                            <li className="list-group-item">Detalhes do plano</li>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='section3'>
                        <div className='container'>
                            <div className="tituloSectio2">
                                <h1>
                                    TRAGA SUA EMPRESA E ELEVE O NÍVEL DO SEU NEGÓCIO
                                </h1>
                            </div>
                            <div className='row'>
                                <div className='col flex-center'>
                                    <button type="button" className="btn btn-light">
                                        Quero começar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='section4'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col'>
                                    <div className="tituloSectio2">
                                        <h1>
                                            Perguntas frequentes
                                        </h1>

                                        <p>
                                            Tire todas suas dúvidas sobre trazer o seu negócio PET para o PET’S APP
                                        </p>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='row'>
                                        <div className='col'>
                                            <p className='pergunta'>
                                                Como faço para me cadastrar?
                                                <div className='drop-pergunta'>
                                                    <img src={arrow} alt="arrow"/>
                                                </div>
                                            </p>

                                            <p className='pergunta'>
                                                Como faço para me cadastrar?
                                                <div className='drop-pergunta'>
                                                    <img src={arrow} alt="arrow"/>
                                                </div>
                                            </p>

                                            <p className='pergunta'>
                                                Como faço para me cadastrar?
                                                <div className='drop-pergunta'>
                                                    <img src={arrow} alt="arrow"/>
                                                </div>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='section5'>
                        <div className='container'>
                            <hr/>
                            <div className='row'>
                                <div className='col'>
                                    <p>
                                        Um rodapé qualquer
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>     
                </>
            )
        }else if (this.props.currentStep === 1){
            console.log(this.state)
            return(
                <form className="tipo-cadastro" onSubmit={this.handleSubmit}>
                    <h1 className="tipo-cadastro-title">
                        COMO DESEJA USAR NOSSOS SERVICOS ?
                    </h1>
                    <div className="tipo-empresa">
                        <label className="tipo-empresa-card mb-3" for="empresa">
                            <img src={empresa} alt="empresa" />
                        </label>
                        <div className="row">
                            <input type="radio" value={1} onChange={this.handleChange} name="tipo_cadastro" className="mr-3" id="empresa" required/>
                            <h3>Como empresa</h3>
                        </div>
                    </div>
                    <div className="tipo-usuario">
                        <label className="tipo-empresa-card with-bg mb-3" for="usuario">
                            <img src={cliente} alt="cliente" />
                        </label>
                        <div className="row">
                            <input type="radio" value={0} onChange={this.handleChange} name="tipo_cadastro" className="mr-3" id="usuario" required/>
                            <h3>Como cliente</h3>
                        </div>
                    </div>
                    <div className="tipo-cadastro-title position-bottom">
                        <div className="container md">
                            <button disabled={this.state.disabled} className="btn btn-light-blue btn-lg btn-block">
                                CADASTRAR
                                <SpinnerButton status={this.state.disabled} />
                            </button>
                        </div>
                    </div>
                </form>
            )
        } else if (this.props.currentStep === 2) {
            return(
                <>
                    <div className="cadastroFinalizado center">
                        <div className="imgFinished">
                            
                        </div>
                        
                        <p>
                            Cadastro realizado com sucesso, clique em continuar para receber mais informacoes
                        </p>
    
                        <button type="buttom" onClick={this.state.tipo_usuario === 0 ? () => this.props.nextStep(0) : () => this.props.nextStep(3)} className="btn btn-light center">
                            Continuar
                        </button>
                    </div>
                </>
            )
        } else {
            return <Redirect to="/app" />
        }
            
    }
}