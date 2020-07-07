import React from 'react';
import ListaServicos from './lista-servicos'


const TipoServicos = props => {

    return(
        <>  
            {props.tipo_servico.map( tipoServico => {
                return(
                   <option key={tipoServico.id} value={tipoServico.id}> {tipoServico.subcategoria} </option>
                )
            } )}
        </>
    );

}

export default props => {

    if( props.item !== 1 ) return null

    return(
        <>
            <div className="main-body">
                <div className="helper"></div>
                
                <div className="empresas-body p-4">
                    <div className="title no-margin">
                        <h3>Cadatre os serviços que sua empresa oferece</h3>
                        <hr/>
                    </div>

                    <div className="servicos-body">
                        <div className="row">
                            <div className="col-md-5 p-3">
                                <form className="formulario-servicos" onSubmit={props.hundleSubmit}>
                                    <h4 className="d-flex justify-content-center" >Cadastro de serviços</h4>

                                    <div className="form-group">
                                        <label for="nomeServico">Nome</label>
                                        <input type="text" className="form-control" name="nome" onChange={props.handlerChange} id="nomeServico" value={props.novo_servico.nome}/>
                                        <small id="emailHelp" className="form-text text-muted">Esse nome será visível para os seus clientes</small>
                                    </div>

                                    <div className="form-group">
                                        <label for="precoServico">Preço</label>
                                        <input type="text" className="form-control input-pequeno" name="preco" onChange={props.handlerChange} id="precoServico" value={props.novo_servico.preco}/>
                                    </div>

                                    <div className="form-group">
                                        <label for="tipo-servico">Tipo de serviços</label>
                                        <select className="form-control" onChange={props.handlerChange} name="id_tipo" id="tipo-servico" >
                                            <option value=""> Selecione o tipo de serviço </option>
                                            <TipoServicos tipo_servico={props.tipo_servico}/>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label for="servico-imagem">Escolha uma imagem</label>
                                        <input type="file" name="foto" onChange={props.fileHandler} className="form-control" id="servico-imagem" />
                                    </div>

                                    <div className="form-group">
                                        <button type="submit" className="btn btn-light btn-lg btn-block orange-button" > CADASTRAR </button>
                                    </div>
                                    
                                </form>
                            </div>

                            <div className="col-md-7">
                                <ListaServicos servicos={props.servicos}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}