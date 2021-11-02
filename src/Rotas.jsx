import React from "react";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router";
import CursosForm from './pages/cursos/CursosForm'
import AlunosForm from './pages/alunos/AlunosForm'
import ProfessoresForm from "./pages/professores/ProfessoresForm";
import DisciplinasForm from "./pages/disciplinas/DisciplinasForm";
import Curso from "./pages/cursos/Curso";
import Alunos from "./pages/alunos/Alunos";


const Rotas = () => {
  return (
    <>
      <Switch>
        <Container className="mt-3">
        <Route exact path="/" component={Curso} />
                <Route exact path="/cursos" component={Curso} />
                <Route exact path="/cursos/create" component={CursosForm} />
                <Route exact path="/cursos/:id" component={CursosForm} />
                <Route exact path="/alunos" component={Alunos} />
                <Route exact path="/alunos/create" component={AlunosForm} />
                <Route exact path="/alunos/:id" component={AlunosForm} />
                <Route exact path="/professores" component={ProfessoresForm} />
        </Container>
      </Switch>
    </>
  );
};

export default Rotas;
