import React, { Component } from 'react';

import './login.css'

import Formulario from "./formulario";

export default class login extends Component{
    
    render(){

        return(
            <div className="login">
                <div id="area_foto">
                    
                </div>

                <div id="area_form">
                    <div className="logo_pet">
                        
                    </div>

                    <div className="titulo-pet">
                        <h5>PETS APP</h5>
                    </div>

                    <div className="container">
                        <Formulario />
                    </div>
                    
                </div>
            </div>
        )
    }
}


