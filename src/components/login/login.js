import React from 'react';
import './login.css'

import FormularioLogin from "./formularioLogin";

export default function login(){
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
                    <FormularioLogin/>
                </div>
                
            </div>
        </div>

    )
}


