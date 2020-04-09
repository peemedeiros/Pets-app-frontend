import React from 'react';

import backArrow from '../../assets/back-arrow.png';

export default function backButton(props){
    return(
        <>
            <img src={backArrow}
                alt="back" 
                className="backArrow"
                onClick={(e) => props.voltar(1)}/>
        </>
    )
}