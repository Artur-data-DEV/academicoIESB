import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import CursosForm from './pages/cursos/CursosForm'
import Alunos from './pages/alunos/Alunos'
import AlunosForm from './pages/alunos/AlunosForm'
import ProfessoresForm from './pages/professores/ProfessoresForm'
import Curso from './pages/cursos/Curso'
import DisciplinasForm from './pages/disciplinas/DisciplinasForm'
import Disciplinas from './pages/disciplinas/Disciplina'
import Professores from './pages/professores/Professor'

const Rotas = () => {
    return (
        <Container className="mt-3">
            <Switch>
                <Route exact path="/" component={Curso} />
                <Route exact path="/cursos" component={Curso} />
                <Route exact path="/cursos/create" component={CursosForm} />
                <Route exact path="/alunos" component={Alunos} />
                <Route exact path="/alunos/create" component={AlunosForm} />
                <Route exact path="/disciplinas" component={Disciplinas} />
                <Route exact path="/disciplinas/create" component={DisciplinasForm} />
                <Route exact path="/professores" component={Professores} />
                <Route exact path="/professores/create" component={ProfessoresForm} />

            </Switch>
        </Container>
    )
}

export default Rotas
