import React from 'react'
import Nav from './navbar'

import './site.css'
import logo from '../../assets/petsAppLogo3.png'

export default props => {
    return (
        <>
            {/* <nav id="navigation-bar">
                <div className="container d-flex justify-content-between">
                    <div className="logo-site">
                        <img src={logo} alt="logo" />
                    </div>
                    <ul className="navigation-all-itens">
                        <li className="navigation-item ">
                            HOME
                        </li>
                        <li className="navigation-item ">
                            HOME
                        </li>
                        <li className="navigation-item ">
                            HOME
                        </li>
                        <li className="navigation-item ">
                            HOME
                        </li>
                    </ul>
                </div>
            </nav> */}
            <Nav />
            <section id="sobre-section1">
                <div className="container " >
                    <div className="sobre-titulo ">
                        <h1 className="surgir text-center">Sobre nós</h1>
                        <h1 className="surgir text-center logo-font">PETS <span className="text-light-blue">APP</span></h1>
                    </div>
                </div>
            </section>

            <section id="sobre-section2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 ">
                            <div className="section2-title d-flex  ">
                                <h3> Nossa missão</h3>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section2-text ">
                                <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="sobre-section3">
                <div className="opacidade-ativada">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 ">
                                <div className="section2-title d-flex ">
                                    <h3 className="text-light"> Nossa visão</h3>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="section2-text ">
                                    <p  className="text-light aumentar-font"> 
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="sobre-section4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 ">
                            <div className=" section2-title diminuir-100 d-flex  ">
                                <h3 className="blue-sobre-section-text"> Nossos valores</h3>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section2-text diminuir-100 ">
                                <p className="text-dark">
                                - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                                </p>
                                <p className="text-dark">
                                - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                                </p>
                                <p className="text-dark">
                                - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="sobre-section5" className="d-flex">
                <div className="sobre-equipe1">
                    <div className="opacidade-equipe zoom">
                        <h4>Pedro Medeiros</h4>
                        <h6>Pets App Back-end Developer</h6>
                    </div>
                </div>
                <div className="sobre-equipe2">
                    <div className="opacidade-equipe zoom">
                        <h4>Karolline Brandão</h4>
                        <h6>Pets App Android Developer</h6>
                    </div>
                </div>
                <div className="sobre-equipe3">
                    <div className="opacidade-equipe zoom">
                        <h4>Murillo Letta</h4>
                        <h6>Pets App Android Developer</h6>
                    </div>
                </div>
                <div className="sobre-equipe4">
                    <div className="opacidade-equipe zoom">
                        <h4>Danilo Albuquerque</h4>
                        <h6>Pets App Front-end Developer</h6>
                    </div>
                </div>
            </section>
        </>
    )
}