import React, { Component } from 'react';
import axios from 'axios';

import './login.css'

import Formulario from "./formulario";

const URL = "http://127.0.0.1:8000/api/v1/login";

const config = {
    headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
    }
}

export default class login extends Component{

    realizarLogin = async usuario => {
        try {
            return await axios.post(URL,usuario, config)
        } catch (error) {
           return error.response
        }
    }
    
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
                        <Formulario realizarLogin={this.realizarLogin} />
                    </div>
                    
                </div>
            </div>
        )
    }
}


