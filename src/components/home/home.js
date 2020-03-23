import React from 'react';
import PreCadastro from './precadastro'

import './styles.css';
import logo from '../../assets/logo.png';
import plano1 from '../../assets/transporte.jpg'

export default function home(){
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
                                Já sou cadastrado
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
                                <PreCadastro/>
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
                            <p>
                                Como faço para me cadastrar na Pet's App?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}