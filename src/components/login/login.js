import React from 'react';
import './login.css'

import FormularioLogin from "./formularioLogin";

export default function login(){
    return(
       
       <div className="login">
            <div id="area_foto">
                foto do gato
            </div>

            <div id="area_form">
                <div className="logo_pet">

                </div>

                <div className="titulo-pet">
                    <h5>PET's APP</h5>
                </div>

                <div className="container">
                    <FormularioLogin/>
                </div>
                
            </div>
        </div>

    )
}


