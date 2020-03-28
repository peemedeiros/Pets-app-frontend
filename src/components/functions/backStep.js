import React from 'react';

import BackButton from '../home/backButton';
import BackHome from '../home/backHomeButton';


//Renderiza um botão voltar de acordo com o step do cadastro
export default function backStep(props){

    if(props.step === 2)
        return <BackButton voltar={props.nextStep}/>
    else if( props.step === 1 || props.step === 3)
        return <BackHome/>

}