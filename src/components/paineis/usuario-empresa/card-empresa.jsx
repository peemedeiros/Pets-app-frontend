import React, { Component } from 'react'

export default class CardEmpresa extends Component{

    constructor(){
        super()

    }
    
    render(){
        return(
            <>
                <div className="card-empresa">
                    <div className="linha">
                        <div className="logo-empresa">

                        </div>
                        <div className="nome-empresa">
                            <h4 className="txt-underline"> Nome da empresa </h4>
                        </div>
                    </div>
                    <div className="linha-info">
                        <div className="empresa">
                            <div className="linha-empresa mb-2">
                                <div className="coluna-empresa">
                                    <h5>Endereco</h5>
                                    <p>Endereço</p>
                                    <p>Endereço</p>
                                    <p>Endereço</p>
                                    <p>Endereço</p>
                                </div>
                            </div>
                            <button className="btn btn-success btn btn-block"> ENTRAR </button>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}