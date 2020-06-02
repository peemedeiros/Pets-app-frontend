import React, { Component } from 'react';
import axios from 'axios';

import './login.css'

import FormularioLogin from "./formularioLogin";

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
            const response = await axios.post(URL,usuario, config)
            console.log(response.data)
        } catch (error) {
            console.log(error.response.data)
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
                        <FormularioLogin realizarLogin={this.realizarLogin}/>
                    </div>
                    
                </div>
            </div>
        )
    }
}


