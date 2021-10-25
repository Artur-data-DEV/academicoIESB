import React from "react";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router";
import CursosForm from './pages/cursos/CursosForm'
import AlunosForm from './pages/alunos/AlunosForm'
import ProfessoresForm from "./pages/Professores/ProfessoresForm";
import DisciplinasForm from "./pages/Disciplinas/DisciplinasForm";


const Rotas = () => {
  return (
    <>
      <Switch>
        <Container className="mt-3">
          <Route exact path="/" component={CursosForm} />
          <Route exact path="/alunos" component={AlunosForm} />
          <Route exact path="/professores" component={ProfessoresForm} />
          <Route exact path="/cursos" component={CursosForm} />
          <Route exact path="/disciplinas" component={DisciplinasForm} />
        </Container>
      </Switch>
    </>
  );
};

export default Rotas;
