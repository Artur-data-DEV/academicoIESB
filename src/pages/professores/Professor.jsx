import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { FaEdit, FaPlus, FaRegTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import ProfessoresService from '../../services/academico/ProfessoresService'

const Professores = () => {

    const [professores, setProfessores] = useState([])

    useEffect(() => {
        const professores = ProfessoresService.getAll()
        setProfessores(professores)
    }, [])

    function excluir(i) {

        if (window.confirm('Deseja realmente excluir o registro?')) {
            ProfessoresService.delete(i)
            setProfessores(ProfessoresService.getAll())
        }
    }

    return (
        <>
            <Box title="Professores">
                <Link to="/professores/create" className="btn btn-primary mb-3"><FaPlus /> Novo</Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Ações</th>
                            <th>#</th>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Telefone</th>
                            <th>E-mail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {professores.map((professor, i) => (
                            <tr key={i}>
                                <td>
                                    <Link to={'/professores/' + i}>
                                        <FaEdit title="Editar" />
                                    </Link>
                                    {' '}
                                    <FaRegTrashAlt className="text-danger" title="Excluir" onClick={() => excluir(i)}    />
                                </td>
                                <td>{i}</td>
                                <td>{professor.nome}</td>
                                <td>{professor.cpf}</td>
                                <td>{professor.telefone}</td>
                                <td>{professor.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

            </Box>
        </>
    )
}

export default Professores
