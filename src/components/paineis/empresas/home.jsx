import React from 'react'

import Star from '../../../assets/strela.png'
import Cancelado from '../../../assets/cancelados.png'
import Confirmado from '../../../assets/completo.png'
import Dash from '../../../assets/dashboard.png'
import Support from '../../../assets/support.png'
import Truck from '../../../assets/truck.png'

export default props => {
    if(props.item !== 0) return null

    var numeroAgendamentos = props.agendamentos.length

    var servicosFinalizados = []
    var servicosCancelados = []
    var servicosPendentes = []
    var aCaminhoDoCliente = []
    var servicosEmExecucao = []

    props.agendamentos.filter(agendamentosFinalizados => {
        
        switch(agendamentosFinalizados.status){
            case 0:
                servicosPendentes.push(agendamentosFinalizados)
                break
            case 2:
                aCaminhoDoCliente.push(agendamentosFinalizados)
                break
            case 3:
                servicosEmExecucao.push(agendamentosFinalizados)
                break
            case 4:
                servicosCancelados.push(agendamentosFinalizados)
                break
            case 5:
                servicosFinalizados.push(agendamentosFinalizados)
                break
        }       
    })

    return(
        <>
            <div className="main-body">
                <div className="helper"></div>
                
                <div className="empresas-body p-4">

                    <div className="title mb-4">
                        <h3>Bem-Vindo à {props.nome_empresa}</h3>
                        <hr/>
                    </div>
                    
            
                    <div className="card-qtd-servicos">
                        <div className="card-qtd-servico-title">
                            Serviços finalizados
                        </div>
                        <div className="card-content-servicos">
                            <div className="card-content-help">
                                {servicosFinalizados.length}
                            </div>
                            <div className="card-content-help">
                                <img src={Confirmado} alt="star" />
                            </div>
                        </div>
                    </div>

                    <div className="card-qtd-servicos red-card">
                        <div className="card-qtd-servico-title">
                            Serviços cancelados
                        </div>
                        <div className="card-content-servicos">
                            <div className="card-content-help">
                            {servicosCancelados.length}
                            </div>
                            <div className="card-content-help">
                                <img src={Cancelado} alt="star" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="card-qtd-servicos blue-card mb-4">
                        <div className="card-qtd-servico-title">
                            Serviços em agendados
                        </div>
                        <div className="card-content-servicos">
                            <div className="card-content-help">
                                {numeroAgendamentos}
                            </div>
                            <div className="card-content-help">
                                <img src={Star} alt="star" />
                            </div>
                        </div>
                    </div>

                    <div className="card-qtd-servicos bg-warning">
                        <div className="card-qtd-servico-title">
                            Serviços pendentes
                        </div>
                        <div className="card-content-servicos">
                            <div className="card-content-help">
                                {servicosPendentes.length}
                            </div>
                            <div className="card-content-help">
                                <img src={Dash} alt="star" />
                            </div>
                        </div>
                    </div>

                    <div className="card-qtd-servicos bg-dark">
                        <div className="card-qtd-servico-title">
                            A caminho do cliente 
                        </div>
                        <div className="card-content-servicos">
                            <div className="card-content-help">
                                {aCaminhoDoCliente.length}
                            </div>
                            <div className="card-content-help">
                                <img src={Truck} alt="star" />
                            </div>
                        </div>
                    </div>

                    <div className="card-qtd-servicos bg-info">
                        <div className="card-qtd-servico-title">
                            Serviços em execução
                        </div>
                        <div className="card-content-servicos">
                            <div className="card-content-help">
                                {servicosEmExecucao.length}
                            </div>
                            <div className="card-content-help">
                                <img src={Support} alt="star" />
                            </div>
                        </div>
                    </div>
                        
                </div>
            </div>
        </>
    )
}