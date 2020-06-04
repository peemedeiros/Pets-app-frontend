import React from 'react';
import './usuario.css';

import { Link } from 'react-router-dom';
import logoApp from '../../assets/LogoApp.png'
import tituloApp from '../../assets/logo.png'
import fotoApp from '../../assets/paginapet.PNG'
import fotoApp2 from '../../assets/pagina2pet.PNG'
import fotoApp3 from '../../assets/pagina3pet.PNG'
import fotoQrcode from '../../assets/qr-code-genérico.png'
import petsIcon from '../../assets/pet.jpg'

export default function usuario(){
    return(
    <div className="sessao_total">

        <div className="sessao1">
            <div className="row">
                <div className="col-2 ml-5">
                    <div className="logo-box pt-1">
                        <Link className="nav-link logo-box" to="/cadastro">
                            <img src={logoApp} alt="logo"/>
                        </Link>
                    </div>
                </div>

                <div className="col-3 mt-4 pt-1 ">
                    <img src={tituloApp} alt="titulo petsApp"/>
                </div>

                <div className="col-6 text_titulo">
                        O melhor para seu amiguinho.
                </div>

            </div>
            
        </div>

        {/* Sessao 2 */}
        <div className="sessao2">
            <div className="row">
                <div className="col-4 mt-5">
                    <div className="foto-app">
                        <img src={fotoApp}/>
                    </div>
                </div>

                <div className="col-4 text-app">
                Um novo conceito
                    para amantes do mundo
                    Pets.
                </div>

                <div className="col-4 pl-5">
                    <div className="box-qrcode">
                        Baixe nosso APP
                        <img src={fotoQrcode}/>
                    </div>
                </div>
            </div>
        </div>

        {/* Sessao 3 */}

        <div className="sessao3">
            <div className="row">
                <div className="col">
                    <div className="area-titulo pt-3">
                    Aplicativo Pet’s App
                    </div>
                </div>
            </div>

            <div className="row pt-5 pl-5 pb-3">
                <div className="col-8 pt-8 app-intro ">
                &nbsp;&nbsp;&nbsp;Em meio a um mercado que vem crescendo gradualmente, a Pet’s App oferece agilidade, 
                praticidade e segurança para os donos de pets e donos de empresas do ramo de pets.
                </div>

            </div>

            <div className="row pl-4">
                <div className="col-8 box-icon">
                    <img src={petsIcon}/>
                </div>

            </div>
        </div>

        {/* Sessao 4 */}

        <div className="sessao4 mt-5">
            <div className="row">
                <div className="col-4 ml-5 tela-app">
                    <img src={fotoApp2}/>
                </div>

                <div className="col-4  tela-app">
                    <img src={fotoApp3}/>
                </div>

            </div>
        </div>

        {/* Sessao 5 */}

        <div className="sessao5">
            <div className="row">
                <div className="col-10 txt-app">
                Conheça as principais funcionalidades do nosso aplicativo:
                </div>
            </div>

            <div className="row">
                <div className="col-8 pt-5 text-servicos">
                - Agende serviços pets por meio de nossa aplicação, diretamente com o prestador do serviço.
                <br/>
                <br/>
                - Pesquise por serviços perto da sua região e qual é mais vantajoso para você.
                <br/>
                <br/>
                - Faça o pagamento direto pela aplicação, evitando a burocracia e a demora nos atendimentos.
                <br/>
                <br/>
                - Para logar em nosso aplicativo, basta fazer um cadastro com email e senha, posteriormente preencha os campos requisitados e ja pode utilizar a aplicação.
                
                </div>

            </div>
        </div>

    </div>

    );
}
