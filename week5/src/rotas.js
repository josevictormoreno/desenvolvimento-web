import { BrowserRouter, Route } from 'react-router-dom';
import Home from './paginas/Home';
import Contato from './paginas/Contato';

const Rotas = () => {
  return (
    <BrowserRouter>
      <Route exact={true} path="/"  component={Home} />
      <Route exact={true} path="/contato" component={Contato} />
    </BrowserRouter>
  );
};

export default Rotas;
