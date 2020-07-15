import React from 'react';
import ListaServicos from './lista-servicos'
import SpinnerButton from '../../template/spinnerLoader'


const TipoServicos = props => {

    return(
        <>  
            {props.tipo_servico.map( tipoServico => {
                return(
                   <option key={tipoServico.id} value={tipoServico.id} selected={tipoServico.selected == null ? false : true }> {tipoServico.subcategoria} </option>
                )
            } )}
        </>
    );
}

export default props => {

    if( props.item !== 1 ) return null

    let status = true;

    let nome = props.novo_servico.nome
    let preco = props.novo_servico.preco
    let tipo = props.novo_servico.id_tipo
    let foto = props.novo_servico.foto

    let verificaNome = nome !== null && nome !== undefined && nome !== ""
    let verificaPreco = preco !== null && preco !== undefined && preco !== ""
    let verificaTipo = tipo !== null && tipo !== undefined && tipo !== ""
    let verificaFoto = foto !== null & foto !== undefined && foto !== "" && foto !== []

    if(verificaNome && verificaPreco && verificaTipo && verificaFoto){
        status = false;
    }else{
        status = true;
    }

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
                                        <button disabled={status} type="submit" className="btn btn-light btn-lg btn-block orange-button" > CADASTRAR  <SpinnerButton status={props.disabled}/></button>
                                        
                                    </div>
                                    
                                </form>
                            </div>

                            <div className="col-md-7">
                                <ListaServicos deletar={props.deletar} servicos={props.servicos}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}