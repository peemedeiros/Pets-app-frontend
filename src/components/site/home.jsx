import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import CardEmpresa from './card-empresa';
import $ from 'jquery';

import { listarEmpresasPublics } from '../../services/public-empresa-services'
import logo from '../../assets/petsAppLogo3.png'
import petShop from '../../assets/pet-shop.png'
import vet from '../../assets/vet.png'
import pethotel from '../../assets/architecture-and-city.png'
import dog3 from '../../assets/dog3.png'
import dogfood from '../../assets/dogfood.png'

export default class Home extends Component{

    constructor(){
        super()
        this.state = {
            empresas:[]
        }
    }

    async componentDidMount(){
        try{
            const retorno = await listarEmpresasPublics();
            this.setState({ empresas:retorno.data.data})
        }catch(erro){
            console.log(erro)
        }

        $('.dogie3').on('click', function(){
            alert("oi");
        })
    }

    render (){
        return(
            <>
                <nav className="nav-home">
                    <div className='container d-flex justify-content-end'>
                        <div className='nav-item-box'>
                            <div className='nav-itens' >
                                <Link to='/sobre' className="router-link"> Sobre nós </Link> 
                            </div>
                            <div className='nav-itens'>
                                <Link to='/cadastro' className="router-link"> Para Empresas </Link> 
                            </div>
                            <div className='nav-itens'>
                                <Link to='/app' className="router-link"> Para usuarios </Link> 
                            </div>
                            <div className='nav-itens max-largura'>
                                <Link to='/cadastro' className="btn btn-primary orage-default"> CADASTRAR </Link>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="header-home">
                    <img src={dog3} alt="dog3" class="dogie3"/>
                    <img src={dogfood} alt="dogfood" class="dogiefood"/>

                    <div className="container d-flex flex-column align-items-center justify-content-center p-3">
                        <div className="logo-home-header mb-3">
                            <img src={logo} alt="logo"/>
                            
                            <h4> PETS APP </h4>
                        </div>
                        <div className="row">
                            <h1 className=" dark-gray-text"> Agora você tem mais facilidade em cuidar do seu <span className="orange-text"> PET </span> </h1>
                        </div>
                        <div className="row">
                            <h4 className="gray-text" > Busque os petshops, hotéis pet ou clinicas veterinárias  </h4>
                        </div>
                    </div>
                    
                </div>
                <div className="categoria-content">
                    <div className="categoria-itens">
                        <div className='mb-3 zoom'>
                            <img src={petShop} alt="petshop"/>
                        </div>
                        <h4> PETSHOP </h4>
                    </div>
                    <div className="categoria-itens">
                        <div className='mb-3 zoom'>
                            <img src={vet} alt="petshop"/>
                        </div>
                        <h4> CLÍNICAS VETERINÁRIAS </h4>
                    </div>
                    <div className="categoria-itens">
                        <div className='mb-3 zoom'>
                            <img src={pethotel} alt="petshop"/>
                        </div>
                        <h4>PET HOTEL</h4>
                    </div>
                </div>
                <div className="empresas-pets">
                    <div className="container">
                        <h4>
                            Empresas
                        </h4>
                        <div className="empresas">
                            { this.state.empresas.map( empresa => {
                                return <CardEmpresa empresa={empresa}/>
                            }) }
                        </div>
                    </div>
                </div>
            </>
        )
    }
}