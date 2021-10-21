import React from "react";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router";
import CursosForm from './pages/cursos/CursosForm'
import AlunosForm from './pages/alunos/AlunosForm'


const Rotas = () => {
  return (
    <>
      <Switch>
        <Container className="mt-3">
          <Route exact path="/cursos" component={CursosForm} />
          <Route exact path="/" component={CursosForm} />
          <Route exact path="/alunos" component={AlunosForm} />
        </Container>
      </Switch>
    </>
  );
};

export default Rotas;
