import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import MusicasForm from './pages/musicas/MusicasForm'
import Albuns from './pages/albuns/Albuns'
import AlbunsForm from './pages/albuns/AlbunsForm'
import ProfessoresForm from './pages/professores/ProfessoresForm'
import Musica from './pages/musicas/Musica'
import DisciplinasForm from './pages/disciplinas/DisciplinasForm'
import Disciplinas from './pages/disciplinas/Disciplina'
import Professores from './pages/professores/Professor'

const Rotas = () => {
    return (
        <Container className="mt-3">
            <Switch>
                <Route exact path="/" component={Musica} />
                <Route exact path="/musicas" component={Musica} />
                <Route exact path="/musicas/create" component={MusicasForm} />
                <Route exact path="/musicas/:id" component={MusicasForm} />
                <Route exact path="/albuns" component={Albuns} />
                <Route exact path="/albuns/create" component={AlbunsForm} />
                <Route exact path="/albuns/:id" component={AlbunsForm} />
                <Route exact path="/disciplinas" component={Disciplinas} />
                <Route exact path="/disciplinas/create" component={DisciplinasForm} />
                <Route exact path="/disciplinas/:id" component={DisciplinasForm} />
                <Route exact path="/professores" component={Professores} />
                <Route exact path="/professores/create" component={ProfessoresForm} />
                <Route exact path="/professores/:id" component={ProfessoresForm} />

            </Switch>
        </Container>
    )
}

export default Rotas
