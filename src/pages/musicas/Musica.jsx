import React, { useState, useEffect } from 'react'
import { Col, Table } from 'react-bootstrap'
import { FaEdit, FaPlus, FaRegTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import MusicasService from '../../services/musicas/MusicasService'

const Musica = () => {

    const [musicas, setMusicas] = useState([])

    useEffect(() => {
        const musicas = MusicasService.getAll()
        setMusicas(musicas)
    }, [])

    function excluir(i) {

        if (window.confirm('Deseja realmente excluir o registro?')) {
            MusicasService.delete(i)
            setMusicas(MusicasService.getAll())
        }
    }



    return (
        <>
            <Col >
                <Box title="Musicas" >




                    <Table striped bordered hover>
                        <thead>
                            <tr>
                               
                                <th>#</th>
                                <th>Música</th>
                                <th>Artista</th>
                                <th>Album</th>
                                <th>Gênero</th>
                                <th>Ano</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {musicas.map((musica, i) => (
                                <tr key={i}>
                                    
                                    <td>{i}</td>
                                    <td>{musica.nome}</td>
                                    <td>{musica.artista}</td>
                                    <td>{musica.album}</td>
                                    <td>{musica.genero}</td>
                                    <td>{musica.ano}</td>
                                    <td>
                                        <Link to={'/musicas/' + i}>
                                            <FaEdit title="Editar" />
                                        </Link>
                                        {' '}
                                        <FaRegTrashAlt className="text-danger" onClick={() => excluir(i)} title="Excluir" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Link to="/musicas/create" className="btn btn-primary mb-3"><FaPlus /> Adicionar Musica</Link>
                </Box>

            </Col>
        </>
    )
}

export default Musica
