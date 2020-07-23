import React from 'react';

export default props => {

    if(props.item !== 2) return null

    return(
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Nome Pet</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Opções</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                
                    
                    {props.agendamentos.map( agendamento => {
                        return (
                                <tr>
                                    <th scope="row">1</th>
                                    <td>{agendamento.user.nome}</td>
                                    <td>{agendamento.animal.nome_pet}</td>
                                    <td>R$ {agendamento.valor_total}</td>
                                    <td>
                                        <button className="btn btn-success btn-sm mr-2">
                                            Aceitar
                                        </button>
                                        <button className="btn btn-danger btn-sm">
                                            Recusar
                                        </button>      
                                    </td>
                                    <td>{agendamento.status == 0 ? 'novo' : 'aceito'}</td>
                                </tr>
                        )
                    })}
                    
                </tbody>
            </table>
        </>
    )

}