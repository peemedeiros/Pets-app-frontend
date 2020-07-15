import React from 'react';
import PubSub from 'pubsub-js';

export default props => {

    return(
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Serviço (categoria)</th>
                        <th scope="col">Preço R$</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {props.servicos.map( servico => {
                        return (
                            <tr>
                                <td>{servico.nome}</td>
                                <td>R${servico.preco}</td>
                                <td>
                                    <button onClick={ () => props.deletar(servico.id) } className="btn btn-danger btn-sm mr-1">
                                        Excluir
                                    </button>
                                    <button onClick={ () => {PubSub.publish('editing', servico) }} className="btn btn-primary btn-sm">
                                        Editar
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>
        </>
    )
}