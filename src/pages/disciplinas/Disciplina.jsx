import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import DisciplinaService from '../../services/academico/DisciplinaService'

const Disciplinas = () => {

    const [disciplinas, setDisciplinas] = useState([])

    useEffect(() => {
        const disciplinas = DisciplinaService.getAll()
        setDisciplinas(disciplinas)
    }, [])

    return (
        <>
            <Box title="Disciplinas">
                <Link to="/disciplinas/create" className="btn btn-primary mb-3"><FaPlus /> Novo</Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>ID Curso</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {disciplinas.map((disciplinas, i) => (
                            <tr key={i}>
                                <td>{i}</td>
                                <td>{disciplinas.nome}</td>
                                <td>{disciplinas.cursoId}</td>
    
                            </tr>
                        ))}
                    </tbody>
                </Table>

            </Box>
        </>
    )
}

export default Disciplinas
