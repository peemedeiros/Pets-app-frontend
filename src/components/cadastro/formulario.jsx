import React from 'react'

import * as yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'

// const validations = yup.object().shape({
//     nome:yup.string().required(),
//     email:yup.string().email().required(),
//     celular:yup.string().required(),
//     password:yup.string().min(8).required(),
//     password_confirmation:yup.string().min(8).required()
// })

const Formulario = ({ initialValues, handleSubmit }) => (
    <Formik initialValues={initialValues}  onSubmit={handleSubmit} >
        <Form className='pre-cadastro' >
            <h2 className='text-center'> Cadastre-se </h2>
            <div className="form-group">
                <label>Nome completo</label>
                <Field type="text"  name="nome" className="form-control" placeholder="Nome do dono da empresa"/>
                <ErrorMessage component="span" name="nome"/>
            </div>
            <div className="form-group">
                <label>E-mail</label>
                <Field type="text" name="email" className="form-control" placeholder="E-mail do dono da empresa"/>
                <ErrorMessage component="span" name="email"/>
            </div>
            <div className="form-group">
                <label>Celular com DDD</label>
                <Field type="text" name="celular" className="form-control" placeholder="Celular do dono da empresa"/>
                <ErrorMessage component="span" name="celular"/>
            </div> 
            <div className="form-group">
                <label>Senha</label>
                <Field type="password" name="password" className="form-control" placeholder="*********"/>
                <ErrorMessage component="span" name="password"/>
            </div> 
            <div className="form-group">
                <label>Confirmar senha</label>
                <Field type="password" name="password_confirmation" className="form-control" placeholder="*********"/>
                <ErrorMessage component="span" name="password_confirmation"/>
            </div> 
            <div className="form-group flex-center">
                <button type="submit" className="btn btn-light">
                    <div className="spinner-row">
                        INICIAR CADASTRO
                    </div>
                </button>
            </div>
        </Form>
    </Formik>
)

export default Formulario