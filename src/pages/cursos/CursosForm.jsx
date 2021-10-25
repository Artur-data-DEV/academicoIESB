import React from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import { FaCheck, FaArrowLeft } from 'react-icons/fa'
import { useForm } from 'react-hook-form'

const CursosForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    function enviarDados(dados) {
        console.log(dados);
    }

    return (
        <>
            <Box title="Cursos">
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="nome">
                        <Form.Label column sm={2}>Nome: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" name="nome" {...register("nome", { required: true })} />
                            {errors.nome && <span className="text-danger">Campo Obrigatório</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="duracao">
                        <Form.Label column sm={2}>Duração: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" name="duracao" {...register("duracao", { required: true })} />
                            {errors.duracao && <span className="text-danger">Campo Obrigatório</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="modalidade">
                        <Form.Label column sm={2}>Modalidade: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" name="modalidade" {...register("modalidade", { required: true })} />
                            {errors.modalidade && <span className="text-danger">Campo Obrigatório</span>}
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

export default CursosForm