import React, { useState } from 'react';

export default props => {
    if(props.step !== 3) return null

    function adicionarPetShop(value){
        if(props.categorias.includes("1")){
            return props.categorias.splice(props.categorias.indexOf("1"), 1)
        }
        props.categorias.push(value)
        console.log(props.categorias)
    }
    function adicionarVeterinario(value){
        if(props.categorias.includes("2")){
            return props.categorias.splice(props.categorias.indexOf("2"), 1)
        }
        props.categorias.push(value)
        console.log(props.categorias)
    }
    function adicionarHotel(value){
        if(props.categorias.includes("3")){
            return props.categorias.splice(props.categorias.indexOf("3"), 1)
        }
        props.categorias.push(value)
        console.log(props.categorias)
    }

    const [ petshopEffect, ativarPetshop ] = useState(false);
    const [ veterinario, ativarVeterinario ] = useState(false);
    const [ hotelPet, ativarHotelPet ] = useState(false);

    return(
        <>
            <div id="step3">
                <div className="container">
                    <form onSubmit={e => props.handleSubmit(e) } >
                        <div className="row d-flex justify-content-center mt-4 mb-5">
                            <h1 className="text-grey mb-3"> Primeiro, conte o que sua empresa é ! </h1>

                            <h4 className="text-center">
                                Antes de continuarmos para o cadastro, selecione entre as categorias, a ou as que mais
                                identificam os serviços de sua empresa.  
                            </h4>
                        </div>

                        <div className="row d-flex justify-content-center">
                            <div className="categorias-content d-flex justify-content-between">
                                <div className="categorias-labels d-flex flex-column align-items-center"> 
                                    <div className="row mb-2">
                                        <label className={`categoria petshop ${ petshopEffect ? 'ativado' : '' } `} onClick={() => ativarPetshop(!petshopEffect)} htmlFor="petshop">

                                        </label>
                                        <input onChange={() => adicionarPetShop("1")} onClick={() => props.selecionarCategoria} type="checkbox" id="petshop" name="categorias"  className="d-none"/>
                                    </div>

                                    <div className="row d-flex justify-content-center">
                                        <h2>Pet Shop</h2>
                                        
                                        <div className="card shadow text-white bg-card-orange mb-3" style={{maxWidth:'18rem'}}>
                                            <div className="card-body">
                                                <p className="card-text d-flex justify-content-center">
                                                    Sou seu ajudante no quesito bem estar
                                                    e estética do seu amiguinho. Banho, 
                                                    tosa, dia de recreação e dia de spa. 
                                                    conte comigo.
                                                    Eu sou um PET SHOP!
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="categorias-labels d-flex flex-column align-items-center"> 
                                    <div className="row mb-2">
                                        <label className={`categoria vet ${ veterinario ? 'ativado' : '' } `} onClick={() => ativarVeterinario(!veterinario)} htmlFor="veterinario">

                                        </label>
                                        <input onChange={() => adicionarVeterinario("2")} type="checkbox" id="veterinario" name="categorias"  className="d-none"/>
                                    </div>

                                    <div className="row d-flex justify-content-center">
                                        <h2>Clínica veterinária</h2>
                                        
                                        <div className="card shadow text-white bg-card-orange mb-3" style={{maxWidth:'18rem'}}>
                                            <div className="card-body">
                                                <p className="card-text d-flex justify-content-center">
                                                    Estou aqui para cuidar da saúde do seu
                                                    amiguinho, seja qual for a emergência
                                                    médica.
                                                    Eu sou um Clínica veterinária!
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="categorias-labels d-flex flex-column align-items-center"> 
                                    <div className="row mb-2">
                                        <label className={`categoria hotel ${ hotelPet ? 'ativado' : '' } `} onClick={() => ativarHotelPet(!hotelPet)} htmlFor="pethotel">

                                        </label>
                                        <input onChange={() => adicionarHotel("3")} type="checkbox" id="pethotel" name="categorias"  className="d-none"/>
                                    </div>

                                    <div className="row d-flex justify-content-center">
                                        <h2>Pet Hotel</h2>
                                        
                                        <div className="card shadow text-white bg-card-orange mb-3" style={{maxWidth:'18rem'}}>
                                            <div className="card-body">
                                                <p className="card-text d-flex justify-content-center">
                                                    Eu ajudo os seus amiguinhos a terem
                                                    um lugar confortável, alimentação nos
                                                    horários recomendados e horas de di
                                                    versão, enquanto você precisa viajar.
                                                    Eu sou um PET HOTEL !
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-3 botao-cadastrar">
                            <button type="submit" className="btn btn-light botao-laranja center">
                                CADASTRAR
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}