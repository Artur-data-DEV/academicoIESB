import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Rotas from "./Rotas"

import Menu from "./components/Menu";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Rotas />
      </BrowserRouter>
    </>
  );
}

export default App;
