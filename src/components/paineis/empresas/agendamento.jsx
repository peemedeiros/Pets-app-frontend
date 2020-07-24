import React from 'react';

import Taxi from '../../../assets/taxi.png'
import Remove from '../../../assets/cancelado.png'

export default props => {

    if(props.item !== 2) return null

    const mudarStatusAgendamento = (numero) => {
        
        switch(numero){
            case 0:
                return ''
            case 1: 
                return '#fdffd9'
            case 2:
                return '#d9e4ff'
            case 3:
                return '#d9e4ff'
            case 4:
                return '#ffd9d9'
            case 5:
                return '#e2ffc9'
            
        }   
    }

    const renderizarBotao = (id ,status) => {
        switch(status){
            case 0:
                return (<>
                    <button onClick={() => props.atualizarStatusAgendamento(id, 1)} className="btn btn-success btn-sm mr-2">
                        Aceitar
                    </button> 
                    <button onClick={() => props.atualizarStatusAgendamento(id, 4)} className="btn btn-danger btn-sm mr-2">
                        Recusar
                    </button> 
                </>)
            case 1:
                return (<button onClick={() => props.atualizarStatusAgendamento(id, 2)} className="btn btn-info btn-sm mr-2">
                            À Caminho
                        </button>)
            case 2:
                return (<button onClick={() => props.atualizarStatusAgendamento(id, 3)} className="btn btn-info btn-sm mr-2">
                            Executando serviços
                        </button>)
            case 3: 
                return (<div onClick={() => props.atualizarStatusAgendamento(id, 5)} className="btn btn-info btn-sm mr-2">
                            Finalizar
                        </div>)
            case 4:
                return 'Serviço cancelado'
            default:
                return 'FINALIZADO'
        
        }
    }

    const renderizaTransporte = (status, id) =>{

        switch(status){
            case 0:
                return (<>
                    <button onClick={() => props.atualizarStatusAgendamento(id, 1)} className="btn btn-success btn-sm mr-2">
                        Aceitar
                    </button> 
                    <button onClick={() => props.atualizarStatusAgendamento(id, 4)} className="btn btn-danger btn-sm mr-2">
                        Recusar
                    </button> 
                </>)
                
            case 1:
                return 'Aguardando cliente'

            default:
                return 'Serviço cancelado'
        }
    }

    return(
        <>  
            <div className="helper-menu"></div>
            <div className="helper-side-menu"></div>
            <table className="table table-sm float-right table-striped w95p">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Nome</th>
                        <th scope="col">Nome Pet</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Opções</th>
                        <th scope="col">Pagamento realizado</th>
                        <th scope="col">Transporte</th>
                    </tr>
                </thead>
                <tbody>
                
                    
                    {props.agendamentos.map( agendamento => {
                        return (
                            <tr style={{ backgroundColor:mudarStatusAgendamento(agendamento.status) }}>
                                <th scope="row d-flex aling-items-center"></th>
                                <td>{agendamento.user.nome}</td>
                                <td>{agendamento.animal.nome_pet}</td>
                                <td>R$ {parseFloat(agendamento.valor_total) + parseFloat(agendamento.valor_transporte)}</td>
                                <td>
                                
                                    { agendamento.transporte == 1 ? renderizarBotao(agendamento.id ,agendamento.status) : renderizaTransporte(agendamento.status, agendamento.id) }
                                    
                                </td>
                                <td>{agendamento.status == 1 ? 'Sim' : 'Não'}</td>
                                <td>{agendamento.transporte == 1 ? 
                                    (<img src={Taxi} className="status-icon" />) :
                                    (<img src={Remove} className="status-icon "/>)
                                }</td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>
        </>
    )

}
