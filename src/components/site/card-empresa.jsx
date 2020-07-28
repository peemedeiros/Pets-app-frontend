import React from 'react';
import house from '../../assets/house2.png'

export default props => {

    let imgURL = ""

    if(!props.empresa.foto[0]){
        imgURL = house
    }else{
        imgURL = "http://192.168.1.106:8000/storage/"+props.empresa.foto[0].foto
    }

    return(
        <div class="empresa-card">
            <div className="empresa-foto">
                <img src={imgURL} alt="logo"/>
            </div>
            <div className="empresa-info-box">
                <div className="empresa-info p-3 d-flex flex-column justify-contet-center">
                    <h6>{props.empresa.nome_fantasia}</h6>
                    <h6>{props.empresa.telefone_empresa}</h6>
                    <h6>{props.empresa.cidade} - {props.empresa.uf}</h6>
                </div>
                <div className="empresa-info p-3">
                    <h6>Tipo de empresa</h6>
                    <div className="categoria-info-card-empresa">
                        {props.empresa.categoria.map( categoria => {
                            return <h6 className="text-categoria"> {categoria.categoria} <span></span></h6>
                        })}
                    </div>
                </div>
            </div>
        </div>


    )
}