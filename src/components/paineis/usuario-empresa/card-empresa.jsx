import React from 'react'

import house from '../../../assets/house2.png'
import { Link } from 'react-router-dom'

export default props => {
    
    let imgURL = ""

    if(!props.empresa.foto[0]){
        imgURL = house
    }else{
        imgURL = "http://192.168.1.106:8000/storage/"+props.empresa.foto[0].foto
    }

    console.log(props.empresa.foto[0])

    return(
        <div className="card-empresa" key={props.empresa.id}>
            <div className="linha">
                <div className="logo-empresa">
                    <img src={imgURL} alt="logo"/>
                </div>
                <div className="nome-empresa">
                    <h4 className="txt-underline">{props.empresa.nome_fantasia}</h4>
                </div>
            </div>
            <div className="linha-info">
                <div className="empresa">
                    <div className="linha-empresa mb-2">
                        <div className="coluna-empresa">
                            <h5>Endereco</h5>
                            <p>{props.empresa.logradouro} - {props.empresa.numero}</p>
                            <p>{props.empresa.bairro}</p>
                            <p>{props.empresa.cidade} - {props.empresa.uf}</p>
                            <p>TEL: {props.empresa.telefone_empresa}</p>
                        </div>
                    </div>
                    <Link to={`empresa/${props.empresa.id}`} className="btn btn-success btn btn-block"> ENTRAR </Link>
                </div>
            </div>
        </div>
    )
}