import React, { useEffect } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FaArrowLeft, FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import PlaylistService from '../../services/PlaylistsService'
import validador from '../../validators/PlaylistsValidator'

const PlaylistsForm = (props) => {

    const { register, setValue, handleSubmit, formState: { errors } } = useForm()

  
    useEffect(() => {
        const id = props.match.params.id

        if (id) {
            const playlist = PlaylistService.get(id)
            for (let campo in playlist) {
                setValue(campo, playlist[campo])
            }
        }
    }, [props, setValue])

    function enviarDados(dados) {
        const id = props.match.params.id
        id ? PlaylistService.update(dados, id) : PlaylistService.create(dados)
        props.history.push('/playlists')
    }
    
    return (
        <>
            <Box title="Playlists ">
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="nome">
                        <Form.Label column sm={2}>Nome: </Form.Label>
                        <Col sm={10}>
                            <Form.Control placeholder="Insira o nome da playlist..."type="text" {...register("nome", validador.nome)} />
                            {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="cursoId">
                        <Form.Label column sm={2}>ID: </Form.Label>
                        <Col sm={10}>
                            <Form.Control placeholder="Insira o ID do curso..."type="text" {...register("cursoId", validador.cursoId)} />
                            {errors.cursoId && <span className="text-danger">{errors.cursoId.message}</span>}
                        </Col>
                    </Form.Group>
                    <div className="text-center">
                        <Button variant="success" onClick={handleSubmit(enviarDados)}><FaCheck /> Salvar</Button>
                        <Link className="btn btn-danger" to="/playlists   "><FaArrowLeft /> Voltar</Link>
                    </div>
                </Form>
            </Box>
        </>
    )
}

export default PlaylistsForm
