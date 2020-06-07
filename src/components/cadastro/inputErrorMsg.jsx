import React from 'react';

export default function InputErrorMessage(props){
    if(props.field === '')
        return <div className="invalid-feedback">Esse campo é obrigatório</div>
    
    return null
}

export function Error(props){
    if(props.status){
        console.log(props.status + " " + props.error)
        return <div className="invalid-feedback">{props.error}</div>
    }
        
    
    return null
    
}

