import React from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import { FaCheck, FaArrowLeft } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import validator from '../../validators/DisciplinasValidator'

const DisciplinasForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    function enviarDados(dados) {
        console.log(dados);
    }

    return (
        <>
            <Box title="Disciplinas">
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="nome">
                        <Form.Label column sm={2}>Nome: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" name="nome" {...register("nome", validator.nome)} />
                            {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="duracao">
                        <Form.Label column sm={2}>ID do curso: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" name="curso" {...register("curso", validator.curso)} />
                            {errors.curso && <span className="text-danger">{errors.curso.message}</span>}
                        </Col>
                    </Form.Group>
                    <div className="text-center">
                        <Button variant="success" onClick={handleSubmit(enviarDados)}><FaCheck /> Salvar</Button>
                        <Link className="btn btn-danger" to="/disciplinas"><FaArrowLeft /> Voltar</Link>
                    </div>
                </Form>
            </Box>
        </>
    )
}

export default DisciplinasForm