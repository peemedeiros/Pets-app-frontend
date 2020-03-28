import React from 'react'

import CadastroEmpresaForm from '../home/formularioCadastro';
import ConfirmacaoForm from '../home/confirmacaoCadastro';
import CadastroFinalizado from '../home/cadastroFinalizado';

//Renderiza os passos dos formulários de acordo com o estado do 'step'
export default function currentStep(props){
    console.log(props.step)
    if(props.step === 1)
        return <CadastroEmpresaForm nextStep={props.nextStep}/>
    else if (props.step === 2)
        return <ConfirmacaoForm nextStep={props.nextStep} />
    else
        return <CadastroFinalizado />
}