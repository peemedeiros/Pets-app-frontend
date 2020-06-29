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
                            <div className="rate"> 
                                <i className="rate-icon"></i>
                                <i className="rate-icon"></i>
                                <i className="rate-icon"></i>
                                <i className="rate-icon"></i>
                                <i className="rate-icon"></i>
                                <p>5.0</p>
                            </div>
                        </div>
                    </div>
                    <div className="linha-info">
                        <div className="categorias pt-2">
                            <h6>PET SHOP</h6>
                            <h6>PET SHOP</h6>
                        </div>
                        <div className="empresa">
                            <div className="linha-empresa mb-2">
                                <div className="coluna-empresa">
                                    <h5>Endereco</h5>
                                    Endereco <br/>
                                    Endereco <br/>
                                    Endereco <br/>
                                </div>

                                <div className="coluna-empresa-right">
                                    <div className="closed bg-danger"> FECHADO </div>
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