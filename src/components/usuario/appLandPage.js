import React, { Component } from 'react';
import './usuario.css';

import { Link } from 'react-router-dom';
import logoApp from '../../assets/petsAppLogo3.png'
import tituloApp from '../../assets/logo2.png'
import fotoApp2 from '../../assets/pagina2pet.PNG'
import fotoApp3 from '../../assets/pagina3pet.PNG'
import fotoCelular from '../../assets/mobile.png'
import petsIcon from '../../assets/pet.jpg'
import mobileHome from '../../assets/mobilehome.png'
import home from '../../assets/homemobile.png'
import servico from '../../assets/servico.png'
import favoritos from '../../assets/fav.png'
import $ from 'jquery'

export default class Usuario extends Component{


    componentDidMount(){

        $(window).scroll(function () { 
            if($(this).scrollTop() < 400){
                $('.appScreen').attr('src', mobileHome);
            }else if ($(this).scrollTop() > 500 && $(this).scrollTop() < 1100) { 
                $('.appScreen').attr('src', home);
            } else if($(this).scrollTop() > 1001 && $(this).scrollTop() < 1500) { 
                $('.appScreen').attr('src', servico);
            }else if($(this).scrollTop() > 1600 && $(this).scrollTop() < 2000){
                $('.appScreen').attr('src', favoritos);
            }
        });

    }

    render(){
        return(
            <>   
                <div className="sessao1">
                    <div className="container">
                        <div className="row">
                            <div className="col-2">
                                <div className="logo-box pt-1">
                                    <Link className="nav-link logo-box" to="/">
                                        <img src={logoApp} alt="logo-md" />
                                    </Link>
                                </div>
                            </div>
            
                            <div className="col-6">
                                <img src={tituloApp} alt="titulo-petsApp" className="logo-text"/>
                            </div>
                        </div>
                    </div>
                </div>
        
                {/* Sessao 2 */}
                <div className="sessao2 mt-4">
                    <div className="container">
                        <div className="row">
                            <div className="container">
                                <div className="col-8 text-app mb-4">
                                    Um aplicativo pensado para o você e seu amiguinho 
                                </div>
                                <div className="col-8">
                                    <p className="introducao-app">
                                        Baixe agora o nosso app, realize seu cadastro e comece a utilizar serviços para seu PET pela palma da sua mão!
                                    </p>
                                </div>
                                <div className="col-4 pl-5">
                                    <div className="box-qrcode floating">
                                        <img src={mobileHome} alt="app" className="appScreen floating-inside" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
                {/* Sessao 3 */}
        
                <div className="sessao3">
                    <div className="container d-flex flex-column align-items-start bd-highlight mb-3">
                        <div className="row">
                            <div className="col">
                                <div className="area-titulo pt-3 mb-5 p-2 bd-highlight">
                                    Busque petshops!
                                </div>
                            </div>
                        </div>
            
                        <div className="row">
                            <div className="col-8 pt-8 app-intro p-1 bd-highlight">
                                Busque entre petshops, clínicas veterinárias e hoteis para pets e agende os serviços de sua preferencia com alguns toques.
                            </div>
                        </div>
            
                        <div className="img-helper mt-auto bd-highlight">

                        </div>
                    </div>
                </div>
        
                {/* Sessao 4 */}
        
                <div className="sessao4">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="area-titulo pt-3 mb-5">
                                    Escolha serviços!
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-8 app-intro">
                                Tenha acesso aos milhares de serviços disponíveis para pets, no segmento de hopedagem de animais, pet care e até consultas médicas
                            </div>
                            <div className="col-8 app-intro">
                                <p> Conte com a avaliação dos demais clientes da empresa selecionada para deixar seu amiguinho em boas mãos </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
        
                {/* Sessao 5 */}
        
                <div className="sessao5">
                    <div className="container d-flex flex-column align-items-start bd-highlight mb-3">
                        <div className="row">
                            <div className="col">
                                <div className="area-titulo pt-3 mb-5 p-2 bd-highlight">
                                    Gostou do atendimento?
                                </div>
                            </div>
                        </div>
            
                        <div className="row">
                            <div className="col-8 pt-8 app-intro bd-highlight">
                                Não esqueça de retonar um feedback para a empresa que lhe atendeu, eles irão adorar saber como foi sua experiência.
                                
                            </div>
                            <div className="col-8 app-intro">
                                <p>Caso tenha gostado do atendimento, você pode salvar a empresa em sua lista de favoritos!</p>
                            </div>
                        </div>
            
                        <div className="img-helper2 mt-auto bd-highlight">

                        </div>
                    </div>
                </div>
        
            </>
        
            );
    }
    
}
