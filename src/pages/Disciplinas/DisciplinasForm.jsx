import React from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FaArrowLeft, FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'

const AlunosForm = () => {

    const { register, handleSubmit, formState: {errors} } = useForm()

    function enviarDados(dados){
        console.log(dados);
    }    

    return (
        <>
            <Box title="Alunos">
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="nome">
                        <Form.Label column sm={2}>Nome: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("nome", {required: true})} />
                            {errors.nome && <span className="text-danger">Campo Obrigatório</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="CPF">
                        <Form.Label column sm={2}>CPF: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("CPF", {pattern: /^(\d{3}\.){2}\d{3}-\d{2}$/})} />
                            {errors.CPF && <span className="text-danger">Campo Obrigatório</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="matricula">
                        <Form.Label column sm={2}>Matrícula: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("matricula", {required: true})} />
                            {errors.matricula && <span className="text-danger">Campo Obrigatório</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="email">
                        <Form.Label column sm={2}>E-mail: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("email", {required: true})} />
                            {errors.email && <span className="text-danger">Campo Obrigatório</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="telefone">
                        <Form.Label column sm={2}>Telefone: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("telefone", {required: true})} />
                            {errors.telefone && <span className="text-danger">Campo Obrigatório</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="CEP">
                        <Form.Label column sm={2}>CEP: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("CEP", {required: true})} />
                            {errors.CEP && <span className="text-danger">Campo Obrigatório</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="Logradouro">
                        <Form.Label column sm={2}>Logradouro: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("Logradouro", {required: true})} />
                            {errors.Logradouro && <span className="text-danger">Campo Obrigatório</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="complemento">
                        <Form.Label column sm={2}>Complemento: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("complemento", {required: true})} />
                            {errors.complemento && <span className="text-danger">Campo Obrigatório</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="numero">
                        <Form.Label column sm={2}>Número: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("numero", {required: true})} />
                            {errors.numero && <span className="text-danger">Campo Obrigatório</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="bairro">
                        <Form.Label column sm={2}>Bairro: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("bairro", {required: true})} />
                            {errors.bairro && <span className="text-danger">Campo Obrigatório</span>}
                        </Col>
                    </Form.Group>
                                  
                    <div className="text-center">
                        <Button variant="success" onClick={handleSubmit(enviarDados)}><FaCheck /> Salvar</Button>
                        <Link className="btn btn-danger" to="/cursos"><FaArrowLeft /> Voltar</Link>
                    </div>
                </Form>
            </Box>
        </>
    )
}

export default AlunosForm