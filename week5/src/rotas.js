import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './paginas/Home';
import Contato from './paginas/Contato';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/contato" element={<Contato />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas;
