import React from 'react';
import house from '../../assets/house2.png'

export default props => {

    let imgURL = ""

    if(!props.empresa.foto[0]){
        imgURL = house
    }else{
        imgURL = "http://127.0.0.1:8000/storage/"+props.empresa.foto[0].foto
    }

    return(
        <div class="empresa-card">
            <div className="empresa-foto">
                <img src={imgURL} alt="logo"/>
            </div>
            <div className="empresa-info">
                <h6>{props.empresa.nome_fantasia}</h6>
                <h6>{props.empresa.telefone_empresa}</h6>
                <h6>{props.empresa.cidade} - {props.empresa.uf}</h6>
                {props.empresa.categoria.map( categoria => {
                    return <h6>{categoria.categoria}</h6>
                })}
                
            </div>
        </div>


    )
}