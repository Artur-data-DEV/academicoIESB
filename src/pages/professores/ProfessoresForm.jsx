import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FaArrowLeft, FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import validator from '../../validators/ProfessoresValidator'

const ProfessoresForm = () => {

    const { register, handleSubmit, formState: {errors} } = useForm()

    function enviarDados(dados){
        console.log(dados);
    }    

    // function handleCpf(event){
    //     const valor = mask(event.target.value, '999.999.999-99')
    // }

    return (
        <>
            <Box title="Professores">
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="nome">
                        <Form.Label column sm={2}>Nome: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Insira seu nome completo..." {...register("nome", validator.nome)} />
                            {errors.nome && <span className="text-danger">{errors.nome.message}</span> }
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="cpf">
                        <Form.Label column sm={2}>CPF: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Insira seu CPF..." {...register("cpf", validator.cpf)} />
                            {errors.cpf && <span className="text-danger">{errors.cpf.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="matricula">
                        <Form.Label column sm={2}>Matrícula: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Insira seu código de matricula..." {...register("matricula", validator.matricula)} />
                            {errors.matricula && <span className="text-danger">{errors.matricula.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="salario">
                        <Form.Label column sm={2}>Salário: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Insira seu salário..." {...register("salario")} />
                            {errors.salario && <span className="text-danger">{errors.salario.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="email">
                        <Form.Label column sm={2}>E-mail: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="email" placeholder="Insira seu E-mail... " {...register("email", validator.email)} />
                            {errors.email && <span className="text-danger">{errors.email.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="telefone">
                        <Form.Label column sm={2}>Telefone: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="tel" placeholder="Insira seu número de telefone... "{...register("telefone", validator.telefone)} />
                            {errors.telefone && <span className="text-danger">{errors.telefone.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="cep">
                        <Form.Label column sm={2}>CEP: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Insira seu CEP..." {...register("cep", validator.cep)} />
                            {errors.cep && <span className="text-danger">{errors.cep.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="logradouro">
                        <Form.Label column sm={2}>Logradouro: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Insira seu logradouro..." {...register("logradouro", validator.logradouro)} />
                            {errors.logradouro && <span className="text-danger">{errors.cep.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="complemento">
                        <Form.Label column sm={2}>Complemento: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Insira o complemento do seu endereço..." {...register("complemento")} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="numero">
                        <Form.Label column sm={2}>Número: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="number" placeholder="Insira o número da sua residência..." {...register("numero", {required: true})} />
                            {errors.numero && <span className="text-danger">Campo Obrigatório</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="bairro">
                        <Form.Label column sm={2}>Bairro: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Insira o nome do bairro em que reside..." {...register("bairro", validator.logradouro)} />
                            {errors.bairro && <span className="text-danger">{errors.bairro.message}</span>}
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

export default ProfessoresForm